"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Refreshes the page's server data at an interval while something is being prepared. */
export function AutoRefresh({ every = 6000 }: { every?: number }) {
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => router.refresh(), every);
    return () => clearInterval(timer);
  }, [router, every]);
  return null;
}
