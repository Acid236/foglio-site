import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ComparePage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("es", "/compare/", copy.es.meta.compare);

export default function Page() {
  return <ComparePage locale="es" />;
}
