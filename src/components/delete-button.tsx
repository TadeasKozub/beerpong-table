"use client";

import { deleteTeam } from "@/actions/teams";

export const DeleteButton = ({ id }: any) => {
  const removeTeam = async (id: number) => {
    await deleteTeam(id);
  };
  return (
    <button className="btn btn-error" onClick={() => deleteTeam(id)}>
      Delete
    </button>
  );
};
