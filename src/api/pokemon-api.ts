import axios from 'axios';
import { Pokemon } from '../types';

export async function getPokemonData(id: number): Promise<Pokemon | null> {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data: Pokemon = res.data;
        return data;
    } catch (e) {
        console.error('Error fetching Pokémon data:', e);
        return null;
    }
}
