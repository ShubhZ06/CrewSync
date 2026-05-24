"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

const PUBLIC_PREFIXES = ["/", "/sign-in", "/sign-up", "/contract/"];

export function ConditionalHeader() {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    PUBLIC_PREFIXES.slice(1).some((p) => pathname.startsWith(p))
  ) return null;
  return <SiteHeader />;
}
