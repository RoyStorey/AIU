import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="container-page flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-navy-900">We couldn&apos;t find that page.</h1>
      <p className="mt-3 text-navy-600">It may have moved, or the course may not exist yet.</p>
      <ButtonLink href="/" className="mt-8">Return home</ButtonLink>
    </div>
  );
}
