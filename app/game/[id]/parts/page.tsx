import PCPartsTemplates from "@/components/templates/PartsTemplate";

interface PartsPageProps {
  params: { id: string };
  searchParams: { rank?: "budget" | "recommended" | "highend" };
}

export default function PartsPage({ params, searchParams }: PartsPageProps) {
  return (
    <PCPartsTemplates
      gameId={params.id}
      initialRank={searchParams.rank ?? "recommended"}
    />
  );
}
