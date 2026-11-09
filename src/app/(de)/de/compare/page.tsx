import type { Metadata } from "next";
import { copy } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ComparePage } from "@/views/Pages";

export const metadata: Metadata = pageMetadata("de", "/compare/", copy.de.meta.compare);

export default function Page() {
  return <ComparePage locale="de" />;
}
