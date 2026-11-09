import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ArticleIndexPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("fr", "/guides/", copy.fr.meta.guides);

export default function Page() {
  return <ArticleIndexPage locale="fr" kind="guides" />;
}
