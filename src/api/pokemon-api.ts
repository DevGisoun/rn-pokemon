import axios from 'axios';
import { Pokemon } from '../types';

export async function getPokemonData(id: number): Promise<Pokemon | null> {
    try {
        const resPokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const data: Pokemon = resPokemon.data;

        const resSpecies = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );

        const koreanName = (resSpecies.data.names as [])
            .filter((obj: any) => obj.language.name === 'ko')
            .map((obj: any) => obj.name);

        if (koreanName.length > 0) data.name = koreanName[0];

        for (let i = 0; i < data.types.length; i++) {
            const resType = await axios.get(data.types[i].type.url);

            const koreanType = (resType.data.names as [])
                .filter((obj: any) => obj.language.name === 'ko')
                .map((obj: any) => obj.name);
            if (koreanType.length > 0)
                data.types[i].type.koreanName = koreanType[0];
        }

        return data;
    } catch (e) {
        console.error('Error fetching Pokémon data:', e);
        return null;
    }
}
