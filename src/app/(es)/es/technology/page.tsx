import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { TechnologyPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("es", "/technology/", copy.es.meta.technology);

export default function Page() {
  return <TechnologyPage locale="es" />;
}
