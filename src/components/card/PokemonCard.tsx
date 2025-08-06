import { getPokemonData } from '@/src/api';
import { Pokemon } from '@/src/types';
import { generateUUIDv4 } from '@/src/utils';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { PokemonTypeBadge } from '../badge';
import { PokeText } from '../common';
import PokemonDetailModal from '../modal/PokemonDetailModal';

interface PokemonCardProps {
    number: number;
}

export function PokemonCard({ number }: PokemonCardProps) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(false);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            const data = await getPokemonData(number);

            if (data) setPokemon(data);
            else setError(true);

            setLoading(false);
        };

        fetchInitialData();
    }, []);

    if (loading) {
        return (
            <>
                <ActivityIndicator
                    size="large"
                    className="flex-1 items-center justify-center"
                />
            </>
        );
    }

    if (error || !pokemon) {
        return (
            <>
                <PokeText className="flex-1 items-center justify-center">
                    데이터를 불러오는 데 실패했습니다.
                </PokeText>
            </>
        );
    }

    return (
        <>
            <Pressable
                className="flex-1 p-4 bg-white rounded-2xl elevation-sm"
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Image
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                    }}
                    className="w-full aspect-square object-contain"
                />
                <View className="gap-4 -mt-4">
                    <View>
                        <Text className="text-2xl font-bold">
                            {pokemon.name}
                        </Text>
                        <PokeText className="text-neutral-500">
                            0 owned
                        </PokeText>
                    </View>
                    <View className="flex-row gap-2">
                        {pokemon.types.map((type) => (
                            <PokemonTypeBadge
                                key={generateUUIDv4()}
                                type={type.type}
                            />
                        ))}
                    </View>
                </View>
            </Pressable>
            <PokemonDetailModal
                pokemon={pokemon}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </>
    );
}
