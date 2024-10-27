import { TableInput } from "./table_input";

export const ScoreInputTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto text-center">
        <thead className="bg-gray-800">
          <tr>
            <th colSpan={2} className="py-2 px-4 border-b">
              Tým 1
            </th>
            <th colSpan={2} className="py-2 px-4 border-b">
              Skóre
            </th>
            <th colSpan={2} className="py-2 px-4 border-b">
              Tým 2
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-2 px-4 border-b text-nowrap">Hráč 1</td>
            <td className="py-2 px-4 border-b">BJ</td>
            <td colSpan={2} className="py-2 px-4 border-b">
              Body
            </td>
            <td className="py-2 px-4 border-b">BJ</td>
            <td className="py-2 px-4 border-b text-nowrap">Hráč 2</td>
          </tr>
          <tr className="bg-gray-400">
            <td className="py-2 px-4 border-b">
              <select className="border rounded py-1 px-2"></select>
            </td>
            <TableInput />
            <TableInput />
            <TableInput />
            <TableInput />
            <td className="py-2 px-4 border-b">
              <select className="border rounded py-1 px-2"></select>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
            <td colSpan={2} className="py-2 px-4 border-b">
              Body
            </td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
          </tr>
          <tr className="bg-gray-400">
            <td className="py-2 px-4 border-b">
              <select className="border rounded py-1 px-2"></select>
            </td>
            <TableInput />
            <TableInput />
            <TableInput />
            <TableInput />
            <td className="py-2 px-4 border-b">
              <select className="border rounded py-1 px-2"></select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
