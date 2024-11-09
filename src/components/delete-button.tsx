"use client";

import { deleteTeam } from "@/actions/teams";
import { useTransition } from "react";

export const DeleteButton = ({ id }: any) => {
  let [isPending, startTransition] = useTransition();
  return (
    <button
      className="btn btn-error"
      onClick={() => startTransition(() => deleteTeam(id))}
    >
      Delete
    </button>
  );
};
