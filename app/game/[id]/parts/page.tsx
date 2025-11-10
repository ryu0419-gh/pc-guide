import PCPartsTemplate from "@/components/templates/PartsTemplate";

interface PartsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ rank?: string }>;
}

export default async function PartsPage({
  params,
  searchParams,
}: PartsPageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const rank = (resolvedSearchParams.rank ?? "recommended") as
    | "budget"
    | "recommended"
    | "highend";

  return <PCPartsTemplate gameId={id} rank={rank} />;
}
