"use client";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Unikatny prehled matchu v turnaji {params.tournamentid}|{" "}
        <table>
          <tr>
            <th>Sloupec 1</th>
            <th>Sloupec 2</th>
            <th>Sloupec 3</th>
          </tr>
          <tr>
            <td>Řádek 1, Buňka 1</td>
            <td>Řádek 1, Buňka 2</td>
            <td>Řádek 1, Buňka 3</td>
          </tr>
          <tr>
            <td colSpan={2}>Řádek 2, Buňka 1 (spanuje 2 sloupce)</td>
            <td>Řádek 2, Buňka 2</td>
          </tr>
          <tr>
            <td>Řádek 3, Buňka 1</td>
            <td colSpan={2}>Řádek 3, Buňka 2 (spanuje 2 sloupce)</td>
          </tr>
        </table>
      </main>
    </div>
  );
}
