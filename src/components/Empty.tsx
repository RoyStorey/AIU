import Link from "next/link";

export function NotFound({ what }: { what: string }) {
  return (
    <div className="mx-auto mt-24 max-w-md text-center">
      <div className="text-7xl">🕳️</div>
      <h1 className="mt-4 text-3xl font-black">This {what} fell down a rabbit hole.</h1>
      <p className="mt-2 font-serif">It may live in a different browser, or it was never written at all.</p>
      <Link href="/" className="btn mt-6 bg-sun">
        Back to the front door
      </Link>
    </div>
  );
}

export function Hydrating() {
  return <div className="mt-24 text-center font-mono text-sm opacity-50">opening the stacks…</div>;
}
