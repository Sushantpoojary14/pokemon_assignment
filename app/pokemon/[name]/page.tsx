
import { getPokemon } from '@/lib/api/pokemon';
import Image from 'next/image';
import Link from 'next/link';


export default async function PokemonDetail({ params }: { params: { name: string } }) {
  const name = typeof params?.name === "string" ? params.name : "";
  const res = await getPokemon(name);

  if (!res) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col gap-2 items-center justify-center py-5 px-4">

        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Pokémon found</h2>
        <Link href="/" className="top-6 left-6" >
          <button className="bg-indigo-200  hover:bg-indigo-300 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow transition">
            Back
          </button>
        </Link>
      </div>
    );
  }
  const pokemon = res;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col gap-7 items-center justify-center py-10 px-4">
      <Link href="/" className="top-6 left-6" >
        <button className="bg-indigo-200  hover:bg-indigo-300 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow transition">
          Back
        </button>
      </Link>


      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-xl p-8 w-full max-w-3xl mx-auto border border-indigo-100">

        <div className="flex flex-col items-center mb-8">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="rounded-full border-4 border-indigo-300 shadow-md bg-white"
            width={128}
            height={128}
          />
          <h1 className="text-4xl font-extrabold capitalize mt-4 text-indigo-800 tracking-wide">
            {pokemon.name}
          </h1>
        </div>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Types</h2>
          <div className="flex gap-2 flex-wrap">
            {pokemon.types.map(({ type }: any) => (
              <span
                key={type.name}
                className="bg-indigo-200 text-indigo-900 text-sm px-3 py-1 rounded-full font-medium capitalize shadow-sm"
              >
                {type.name}
              </span>
            ))}
          </div>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Abilities</h2>
          <ul className="list-disc list-inside text-gray-700 capitalize space-y-1">
            {pokemon.abilities.map(({ ability }: any) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Base Stats</h2>
          <ul className="space-y-2">
            {pokemon.stats.map((stat: any) => (
              <li key={stat.stat.name} className="flex justify-between text-gray-800 font-medium">
                <span className="capitalize">{stat.stat.name}</span>
                <span className="bg-indigo-100 px-2 py-0.5 rounded-md text-indigo-700 font-semibold">
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Top Moves</h2>
          <ul className="list-disc list-inside capitalize text-gray-700 space-y-1">
            {pokemon.moves.slice(0, 10).map((move: any) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </section>
      </div>

    </main>
  );
}