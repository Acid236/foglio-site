import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ArticleIndexPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("es", "/guides/", copy.es.meta.guides);

export default function Page() {
  return <ArticleIndexPage locale="es" kind="guides" />;
}
