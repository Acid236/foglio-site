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
  const a = findArticle("guides", "fr", slug);
  return a ? pageMetadata("fr", `/guides/${slug}/`, a.meta, "article") : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage locale="fr" kind="guides" slug={slug} />;
}
