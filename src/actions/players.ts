"use server";

import { db } from "@/db";
import { player, team } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getPlayerById = async (playerId: number) => {
  const pl = await db.select().from(player).where(eq(player.id, playerId));
  return pl.length > 0 ? pl[0] : null;
};

export const getPlayersForTeamId = async (teamId: number) => {
  const first = await db
    .select()
    .from(team)
    .where(eq(team.id, teamId))
    .innerJoin(player, eq(team.player1_id, player.id));
  const second = await db
    .select()
    .from(team)
    .where(eq(team.id, teamId))
    .innerJoin(player, eq(team.player2_id, player.id));
  return { player1: first[0].player, player2: second[0].player };
};

export const addPlayerScoreAndBJ = async (
  playerId: number,
  score: number,
  BJ: number
) => {
  // I need to add the score on top of the current score:
  const pl = await getPlayerById(playerId);
  if (!pl) {
    throw new Error("Player not found");
  }

  let newScore = pl.score ? Number(pl.score!) + score : 0;
  let newBJ = pl.blowjobs ? Number(pl.blowjobs!) + BJ : 0;

  await db
    .update(player)
    .set({ score: newScore, blowjobs: newBJ })
    .where(eq(player.id, playerId));

  return;
};
