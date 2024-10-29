import { ReactElement, ReactHTMLElement } from "react";

export const TableInput = (props: any) => (
  <td>
    <input
      type="number"
      placeholder="asdasdasd"
      className="input input-bordered w-full max-w-xs"
      {...props}
    />
  </td>
);
