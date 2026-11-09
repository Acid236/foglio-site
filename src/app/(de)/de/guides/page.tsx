import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ArticleIndexPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("de", "/guides/", copy.de.meta.guides);

export default function Page() {
  return <ArticleIndexPage locale="de" kind="guides" />;
}
