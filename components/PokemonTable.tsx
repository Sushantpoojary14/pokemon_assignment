"use client";

import { useRouter } from "next/navigation";

export default function PokemonTable({
  data,
  headers,
  page = 1
}: {
  data: Array<{ name: string }>;
  headers: Array<string>;
  page?: number;
}) {
  const router = useRouter();

  if (!data || data.length === 0) {
    return (
      <div className="flex w-full max-w-xl  items-center justify-center min-h-[38rem] bg-white border border-indigo-100 rounded-2xl shadow-md text-center px-6 py-12">

        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Pokémon found</h2>

      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full max-w-xl mx-auto rounded-2xl min-h-[38rem] shadow-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50">

      <table className="min-w-full divide-y divide-indigo-200">
        <thead className="bg-indigo-100 rounded-t-xl">
          <tr>
            {headers.map((name, key) => (
              <th
                key={key}
                className="px-6 py-4 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wide"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-indigo-100 bg-white">
          {data.map(({ name }, index) => (
            <tr
              key={index}
              onClick={() => router.push(`/pokemon/${name}`)}
              className="hover:bg-indigo-50 cursor-pointer transition-all duration-150 ease-in-out group"
            >
              <td className="px-6 py-4 whitespace-nowrap text-indigo-800 font-medium group-hover:pl-7 transition-all">
                {page + index}
              </td>
              <td className="px-6 py-4 whitespace-nowrap capitalize text-indigo-900 font-semibold group-hover:text-indigo-700">
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
