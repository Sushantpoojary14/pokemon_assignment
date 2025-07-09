import axios from "axios";

export async function getPokemon(name: string) {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null
  }
}

export async function getAllPokemon(page: number, limit: number = 10) {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
   return null
  }
}
