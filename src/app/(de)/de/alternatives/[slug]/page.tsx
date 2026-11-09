import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArticlePage, articleSlugs, findArticle } from "@/views/Pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs("alternatives");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle("alternatives", "de", slug);
  return a ? pageMetadata("de", `/alternatives/${slug}/`, a.meta, "article") : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage locale="de" kind="alternatives" slug={slug} />;
}
