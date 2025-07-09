import PokemonTable from "@/components/PokemonTable";
import { getAllPokemon } from "@/lib/api/pokemon";
import { notFound } from "next/navigation";
import React from "react";
import results from "@/data.json"
export default async function page() {
//   const { results } = await getAllPokemon(0);
//   console.log(results);

//   if (!results) {
//     notFound();
//   }
    const data = results?.data;
  return (
    <div className="overflow-x-auto rounded-lg shadow-md max-w-4xl mx-auto bg-white p-6">
      <PokemonTable data={data} />
    </div>
  );
}
