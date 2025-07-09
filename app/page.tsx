import PokemonTable from "@/components/PokemonTable";
import { getAllPokemon } from "@/lib/api/pokemon";
import PaginationComponent from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

import Link from "next/link";


export default async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
 const page = typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
  const searchQuery =
    typeof searchParams?.search === "string" ? searchParams.search : "";

  const limit = 10;
  const offset = (page - 1) * limit;

  const results = await getAllPokemon(searchQuery ? 0 : offset, searchQuery ? 10000 : 10);

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col gap-2 items-center justify-center py-5 px-4">

        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Pokémon found</h2>
        <Link href="/" className="top-6 left-6" >
          <button className="bg-indigo-200  hover:bg-indigo-300 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow transition">
            Refresh
          </button>
        </Link>
      </div>
    );
  }


  const data = results?.results.
    filter(({ name }: { name: string }) =>
      searchQuery ? !!name?.toLowerCase().match(searchQuery.toLowerCase()) : true).splice(0, 10);

  const total = results?.count ?? 0;

  const totalPage = Math.floor(total / limit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col gap-2 items-center justify-center py-5 px-4 ">
      <div className="flex items-center gap-4 w-full max-w-[30rem] ">
        <SearchBar />
      </div>
      <PokemonTable data={data} headers={["Sr. No.", "Name"]} page={offset + 1} />
      {!searchQuery ? <PaginationComponent link={``} total={totalPage} pageIndex={page} /> : <div className=" min-h-16"></div>}
    </div>
  );
}