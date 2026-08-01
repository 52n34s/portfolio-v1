import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  WorkCaseContent,
  WorkJsonLd,
  WorkPageShell,
} from "@/components/WorkCasePage";
import {
  getWorkCase,
  workCaseSlugs,
} from "@/data/work-cases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workCase = getWorkCase(slug);
  if (!workCase) {
    return { title: "Work | 52N34S" };
  }

  return {
    title: workCase.title,
    description: workCase.description,
    alternates: {
      canonical: `https://52n34s.app/work/${workCase.slug}`,
    },
  };
}

export default async function WorkCasePage({ params }: PageProps) {
  const { slug } = await params;
  const workCase = getWorkCase(slug);
  if (!workCase) notFound();

  return (
    <>
      <WorkJsonLd workCase={workCase} />
      <WorkPageShell>
        <WorkCaseContent workCase={workCase} />
      </WorkPageShell>
    </>
  );
}
