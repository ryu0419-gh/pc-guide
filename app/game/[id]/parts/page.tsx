import PCPartsTemplates from "@/components/templates/PartsTemplate";

interface PartsPageProps {
  params: { id: string };
}

export default function PartsPage({ params }: PartsPageProps) {
  return <PCPartsTemplates gameId={params.id} />;
}
