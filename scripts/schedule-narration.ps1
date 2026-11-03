# Has Windows render narration every night, with the GPU, while you sleep.
#
#   npm run narrate:nightly                                   every night 23:00 to 08:00, the Chatterbox voice
#   npm run narrate:nightly -- michael                        a different voice
#   npm run narrate:nightly -- "michael,heart" 23:00 07:00    voices, start time, stop time
#   npm run narrate:nightly -- voices=michael at=22:30 until=06:30   the same, by name
#   npm run narrate:nightly -- remove                         stop doing it
#
# (npm drops "-Name" style options, so values are taken in order, or as name=value.)
# Each night it renders whatever is not yet rendered in every narrated course (AIU_NARRATION_COURSES
# in .env.local), stops at the stop time, and carries on the next night. It writes a log to
# data\narration\nightly.log. The computer must be on or asleep (it wakes it), with you signed in.

$ErrorActionPreference = "Stop"
$name = "Cornerstone narration"
$root = Split-Path $PSScriptRoot -Parent

$Voices = "chatterbox"
$At = "23:00"
$Until = "08:00"
$Remove = $false
$position = 0
foreach ($arg in $args) {
  $text = [string]$arg
  if ($text -match '^-{0,2}remove$') { $Remove = $true; continue }
  if ($text -match '^-{0,2}(voices?|at|until)[=:](.+)$') {
    switch ($matches[1].ToLower()) { "at" { $At = $matches[2] } "until" { $Until = $matches[2] } default { $Voices = $matches[2] } }
    continue
  }
  if ($text -match '^-') { continue }  # a -Name label that got through: its value follows
  switch ($position) { 0 { $Voices = $text } 1 { $At = $text } 2 { $Until = $text } }
  $position++
}

if ($Remove) {
  Unregister-ScheduledTask -TaskName $name -Confirm:$false -ErrorAction SilentlyContinue
  Write-Host "The nightly narration is off."
  exit 0
}

foreach ($t in @($At, $Until)) {
  if ($t -notmatch '^\d{1,2}:\d{2}$') { throw "Times look like 23:00, not '$t'. Give them in this order: voices, start time, stop time." }
}

New-Item -ItemType Directory -Force -Path (Join-Path $root "data\narration") | Out-Null
$log = Join-Path $root "data\narration\nightly.log"
$command = "Set-Location -LiteralPath '$root'; npm.cmd run narrate -- --narrated --voices '$Voices' --until $Until *>> '$log'"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command `"$command`""
$trigger = New-ScheduledTaskTrigger -Daily -At $At
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -WakeToRun -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Hours 14)
Register-ScheduledTask -TaskName $name -Action $action -Trigger $trigger -Settings $settings -Force `
  -Description "Renders Cornerstone's lecture narration with Chatterbox. Log: $log" | Out-Null

Write-Host "Done. Every night at $At, Windows will render narration in: $Voices (stopping at $Until)."
Write-Host "Log: $log"
Write-Host "To run it right now:  Start-ScheduledTask -TaskName '$name'"
Write-Host "To turn it off:       npm run narrate:nightly -- remove"
