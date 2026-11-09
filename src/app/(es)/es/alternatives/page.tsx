import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ArticleIndexPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("es", "/alternatives/", copy.es.meta.alternatives);

export default function Page() {
  return <ArticleIndexPage locale="es" kind="alternatives" />;
}
