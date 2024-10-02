"use client";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Unikatny prehled matche {params.matchid} v turnaji {params.tournamentid}
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
                <td className="py-2 px-4 border-b">Hráč 1</td>
                <td className="py-2 px-4 border-b">BJ</td>
                <td colSpan={2} className="py-2 px-4 border-b">
                  Body
                </td>
                <td className="py-2 px-4 border-b">BJ</td>
                <td className="py-2 px-4 border-b">Hráč 2</td>
              </tr>
              <tr className="bg-gray-400">
                <td className="py-2 px-4 border-b">
                  <select className="border rounded py-1 px-2"></select>
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </td>
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
                <td className="py-2 px-4 border-b">BJ</td>
                <td colSpan={2} className="py-2 px-4 border-b">
                  Body
                </td>
                <td className="py-2 px-4 border-b">BJ</td>
                <td className="py-2 px-4 border-b">
                  <select className="border rounded py-1 px-2"></select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
