import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { DownloadPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("ja", "/download/", copy.ja.meta.download);

export default function Page() {
  return <DownloadPage locale="ja" />;
}
