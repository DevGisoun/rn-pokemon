import { pokemonTypeColors } from '@/src/constants';
import React from 'react';
import { View } from 'react-native';
import { PokeText } from '../common';

interface PokemonTypeBadgeProps {
    type: {
        name: string;
        koreanName: string;
    };
}

export function PokemonTypeBadge({ type }: PokemonTypeBadgeProps) {
    const colors =
        pokemonTypeColors[type.name.toLowerCase()] || pokemonTypeColors.default;

    return (
        <>
            <View
                className="px-3 py-[6px] rounded-md"
                style={{ backgroundColor: colors.background }}
            >
                <PokeText style={{ color: colors.text }}>
                    {type.koreanName}
                </PokeText>
            </View>
        </>
    );
}
