import { getClubById, CLUBS_DATA } from "@/data/mockData";
import { notFound } from "next/navigation";
import { ClubDetailsClient } from "./ClubDetailsClient";

export function generateStaticParams() {
  return CLUBS_DATA.map((club) => ({
    id: club.id,
  }));
}

export default async function ClubPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const club = getClubById(resolvedParams.id);
  
  if (!club) {
    notFound();
  }

  return <ClubDetailsClient club={club} />;
}
