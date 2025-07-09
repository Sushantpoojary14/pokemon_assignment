import axios from "axios";

export async function getPokemon(name: string) {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
  } catch (error) {
    console.log(error);

    throw new Error("Failed to fetch Pokemon");
  }
};

export async function getAllPokemon(page:   number) {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Pokemon");
  }
};
