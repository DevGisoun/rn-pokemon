import { pokemonTypeColors } from '@/src/constants';
import React from 'react';
import { View } from 'react-native';
import { PokeText } from '../common';

interface PokemonTypeBadgeProps {
    typeName: string;
}

export function PokemonTypeBadge({ typeName }: PokemonTypeBadgeProps) {
    const colors =
        pokemonTypeColors[typeName.toLowerCase()] || pokemonTypeColors.default;

    return (
        <>
            <View
                className="px-4 py-[6px] rounded-md"
                style={{ backgroundColor: colors.background }}
            >
                <PokeText style={{ color: colors.text }}>{typeName}</PokeText>
            </View>
        </>
    );
}
