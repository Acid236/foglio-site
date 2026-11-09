import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArticlePage, articleSlugs, findArticle } from "@/views/Pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs("guides");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle("guides", "pt", slug);
  return a ? pageMetadata("pt", `/guides/${slug}/`, a.meta, "article") : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage locale="pt" kind="guides" slug={slug} />;
}
