"use server";
import AddNewMatchButton from "@/components/addNewMatchButton";
import CreateTeam from "@/components/createTeam";
import TournamentTeamTable from "@/components/tournamentTeamTable";
import { checkMatches, loadTournament } from "./action";

export default async function Home(params: {
  params: { tournamentid: number };
}) {
  if (!Number.isInteger(Number(params.params.tournamentid))) {
    return <div>Wrong Tournament ID format</div>;
  }

  const matches = await checkMatches(params.params.tournamentid);
  const tournament = await loadTournament(params.params.tournamentid);
  if (tournament === null) {
    return (
      <div>
        Tournament with ID ${params.params.tournamentid} does not exist.
      </div>
    );
  }
  return (
    <>
      ID TURNAJE :{tournament?.id}
      JMENO TURNAJE: {tournament?.name}
      {matches.bool ? (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          TODO: List of matches
        </div>
      ) : (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 row-start-2 items-start">
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-2xl font-bold mb-4">No matches available</h1>
              <CreateTeam id={matches.id} />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <TournamentTeamTable id={matches.id} />
            </div>
          </main>
          <div className="fixed bottom-8 right-8">
            {tournament?.id && <AddNewMatchButton id={tournament?.id} />}
          </div>
        </div>
      )}
    </>
  );
}
