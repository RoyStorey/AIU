import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <header className="page-head" style={{ textAlign: "center" }}>
        <p className="eyebrow">Error 404</p>
        <h1>Non inveni.</h1>
        <p className="lede" style={{ margin: "0 auto" }}>The page you sought is not in the catalogue. <Link href="/faculties">Browse the faculties</Link>.</p>
      </header>
    </div>
  );
}
