"use server";

import { getTeamsForTournament } from "@/app/server-actions/teams";
import { GenericCRUDTable } from "@/components/genericCRUDtable";

export default async function Home(params: {
  params: { tournamentid: number };
}) {
  const teams = await getTeamsForTournament(params.params.tournamentid);
  return (
    <div>
      tymy: {params.params.tournamentid}
      {teams.map((team) => (
        <div key={team.id}>{team.name}</div>
      ))}
      <GenericCRUDTable />
    </div>
  );
}
