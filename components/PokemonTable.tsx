'use client';

import { useRouter } from 'next/navigation';

export default function PokemonTable({ data }: { data: Array<{ name: string }> }) {
  const router = useRouter();

  const handleRowClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sr No.</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map(({ name }, index) => (
            <tr
              key={index}
              className="hover:bg-teal-50 cursor-pointer transition duration-150"
              onClick={() => handleRowClick(name)}
            >
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap capitalize text-teal-700 font-semibold">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
