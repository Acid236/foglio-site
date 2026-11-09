import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { DownloadPage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("fr", "/download/", copy.fr.meta.download);

export default function Page() {
  return <DownloadPage locale="fr" />;
}
