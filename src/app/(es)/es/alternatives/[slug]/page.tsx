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
  const a = findArticle("alternatives", "es", slug);
  return a ? pageMetadata("es", `/alternatives/${slug}/`, a.meta, "article") : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage locale="es" kind="alternatives" slug={slug} />;
}
