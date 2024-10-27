"use server";

import { db } from "@/db";
import { team } from "@/db/schema";

export const getTeamsForMatch = async (matchId: string) => {
  const teams = db.select().from(team);
  return teams;
};
