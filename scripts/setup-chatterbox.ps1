# Sets up Chatterbox, the natural-sounding GPU voice, for Cornerstone's narration (Windows, NVIDIA GPU).
#
#   npm run narrate:setup-gpu
#
# What it does, once: finds or installs Python 3.11, makes a private Python environment (.venv-tts),
# installs PyTorch for your GPU and Chatterbox, checks ffmpeg, downloads the voice model, switches
# the site to Chatterbox in .env.local, and renders a short sample of each voice.
# It is safe to run again.

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

function Step($text) { Write-Host ""; Write-Host "== $text" -ForegroundColor Cyan }
function Run($exe, [string[]]$arguments) {
  & $exe @arguments
  if ($LASTEXITCODE -ne 0) { throw "This step failed: $exe $($arguments -join ' ')" }
}

# ---- Disk space: keep everything on the project's drive ----
# pip unpacks PyTorch (2.5 GB) in the temp folder, and the model downloads to the user's profile, both
# normally on C:. Point them at this drive instead, and clear what an earlier attempt left behind.
Step "Checking disk space"
Get-ChildItem -Path $env:TEMP -Filter "pip-*" -Directory -ErrorAction SilentlyContinue |
  Remove-Item -Recurse -Force -ErrorAction SilentlyContinue  # half-finished downloads from an earlier attempt
$work = Join-Path $root ".venv-tts\.tmp"
New-Item -ItemType Directory -Force -Path $work | Out-Null
$env:TEMP = $work
$env:TMP = $work
$env:PIP_NO_CACHE_DIR = "1"
$hfHome = Join-Path $root "data\models\huggingface"
New-Item -ItemType Directory -Force -Path $hfHome | Out-Null
$env:HF_HOME = $hfHome
$oldCache = Join-Path $env:LOCALAPPDATA "pip\Cache"
if (Test-Path $oldCache) {
  Write-Host "Clearing pip's download cache on C: (left by an earlier attempt) ..."
  Remove-Item -Recurse -Force $oldCache -ErrorAction SilentlyContinue
}
$drive = (Split-Path $root -Qualifier).TrimEnd(":")
$freeGb = [math]::Round((Get-PSDrive $drive).Free / 1GB, 1)
Write-Host "Free on ${drive}: $freeGb GB (about 15 GB is needed: 7 for PyTorch and Chatterbox, 3 for the model, the rest for audio)."
if ($freeGb -lt 12) { throw "Not enough space on ${drive}: free at least 15 GB there, then run this again." }

# ---- The GPU ----
Step "Checking the graphics card"
$gpu = ""
try { $gpu = (& nvidia-smi --query-gpu=name --format=csv,noheader 2>$null | Select-Object -First 1) } catch { }
if (-not $gpu) {
  throw "No NVIDIA graphics card was found (nvidia-smi did not answer). Install or update the NVIDIA driver, then run this again."
}
Write-Host "Found: $gpu"

# ---- Python 3.11 ----
Step "Finding Python 3.11"
$python = $null
foreach ($v in @("3.11", "3.12")) {
  try {
    $p = (& py "-$v" -c "import sys; print(sys.executable)" 2>$null)
    if ($LASTEXITCODE -eq 0 -and $p) { $python = $p.Trim(); break }
  } catch { }
}
if (-not $python) {
  $candidate = Join-Path $env:LOCALAPPDATA "Programs\Python\Python311\python.exe"
  if (-not (Test-Path $candidate)) {
    Write-Host "Python 3.11 is not installed; installing it with winget ..."
    Run "winget" @("install", "-e", "--id", "Python.Python.3.11", "--scope", "user", "--silent", "--accept-package-agreements", "--accept-source-agreements")
  }
  if (Test-Path $candidate) { $python = $candidate }
}
if (-not $python) { throw "Could not find Python 3.11. Install it from python.org (3.11, 64-bit), then run this again." }
Write-Host "Using $python"

# ---- The private environment ----
Step "Making the Python environment (.venv-tts)"
$venvPython = Join-Path $root ".venv-tts\Scripts\python.exe"
if (-not (Test-Path $venvPython)) { Run $python @("-m", "venv", ".venv-tts") }
Run $venvPython @("-m", "pip", "install", "--upgrade", "pip", "--quiet")

# ---- PyTorch for this GPU ----
Step "Installing PyTorch with CUDA (a large download, about 2.5 GB)"
if ($gpu -match "RTX\s*50") {
  # Blackwell cards (RTX 50xx) need CUDA 12.8, which arrived with PyTorch 2.7.
  Run $venvPython @("-m", "pip", "install", "torch==2.7.1", "torchaudio==2.7.1", "--index-url", "https://download.pytorch.org/whl/cu128")
} else {
  Run $venvPython @("-m", "pip", "install", "torch==2.6.0", "torchaudio==2.6.0", "--index-url", "https://download.pytorch.org/whl/cu124")
}

# ---- Chatterbox ----
Step "Installing Chatterbox"
# Installed without its declared dependencies, so it cannot replace the CUDA build of PyTorch above;
# its other dependencies follow (all but the demo web interface, gradio, which narration does not use).
Run $venvPython @("-m", "pip", "install", "chatterbox-tts==0.1.7", "--no-deps", "--quiet")
Run $venvPython @("-m", "pip", "install", "--quiet",
  "numpy>=1.24,<2", "librosa==0.11.0", "s3tokenizer", "transformers==5.2.0", "diffusers==0.29.0",
  "resemble-perth>=1.0.0", "conformer==0.3.2", "safetensors==0.5.3", "spacy-pkuseg", "pykakasi==2.3.0",
  "pyloudnorm", "omegaconf", "huggingface_hub")

Step "Checking that PyTorch can see the GPU"
Run $venvPython @("-c", "import torch, chatterbox; assert torch.cuda.is_available(), 'PyTorch cannot see the GPU'; print('PyTorch', torch.__version__, 'on', torch.cuda.get_device_name(0)); print('Chatterbox', chatterbox.__version__)")

# ---- ffmpeg ----
Step "Checking ffmpeg (used to make MP3s)"
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Host "Installing ffmpeg with winget ..."
  Run "winget" @("install", "-e", "--id", "Gyan.FFmpeg", "--silent", "--accept-package-agreements", "--accept-source-agreements")
  # Make it usable in this window without reopening it.
  $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")
}
if (Get-Command ffmpeg -ErrorAction SilentlyContinue) { Write-Host "ffmpeg is ready." } else { Write-Host "ffmpeg was installed; open a new window before narrating." -ForegroundColor Yellow }

# ---- Settings ----
Step "Switching the site to Chatterbox (.env.local)"
$envFile = Join-Path $root ".env.local"
$lines = @()
if (Test-Path $envFile) { $lines = @(Get-Content $envFile) }
function SetSetting($name, $value) {
  $found = $false
  for ($i = 0; $i -lt $script:lines.Count; $i++) {
    if ($script:lines[$i] -match "^\s*#?\s*$name\s*=") { $script:lines[$i] = "$name=$value"; $found = $true }
  }
  if (-not $found) { $script:lines += "$name=$value" }
}
SetSetting "AIU_NARRATION_PROVIDER" "chatterbox"
SetSetting "AIU_NARRATION_ON_DEMAND" "off"
SetSetting "HF_HOME" $hfHome  # where the voice model is kept (on this drive, not C:)
[System.IO.File]::WriteAllLines($envFile, [string[]]$lines)  # UTF-8 without a byte-order mark, which would spoil the first setting
Write-Host "AIU_NARRATION_PROVIDER=chatterbox and AIU_NARRATION_ON_DEMAND=off (students play only pre-made audio)."

# ---- The model and the samples ----
Step "Downloading the voice model and recording a sample of each voice"
Run "npm.cmd" @("run", "narrate", "--", "--previews")

Remove-Item -Recurse -Force $work -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Chatterbox is ready." -ForegroundColor Green
Write-Host "Render a course now:      npm run narrate -- `"AMH 101`" --voices chatterbox"
Write-Host "Or every night, on its own: npm run narrate:nightly"
