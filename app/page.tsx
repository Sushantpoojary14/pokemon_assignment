import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Pokémon Explorer
      </h1>
      <Link href={"/pokemon/1"} className="m-auto w-44">
        <button>visit</button>
      </Link>
    </div>
  );
}
