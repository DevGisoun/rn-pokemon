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
                className="flex-1 p-4 bg-white border rounded-2xl elevation-sm"
                onPress={() => setModalVisible(!modalVisible)}
            >
                <View className="flex-row gap-2">
                    {pokemon.types.map((type) => (
                        <PokemonTypeBadge
                            key={generateUUIDv4()}
                            type={type.type}
                        />
                    ))}
                </View>
                <Image
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                    }}
                    className="w-full aspect-square object-contain"
                />
                <View className="-mt-4">
                    <View className="gap-1">
                        <View className="flex-row items-end gap-1">
                            <Text className="text-xl font-bold">
                                {pokemon.koreanName}
                            </Text>
                            <Text className="text-sm font-bold text-neutral-400">
                                {pokemon.name}
                            </Text>
                        </View>
                        <PokeText className="text-neutral-500">
                            0 owned
                        </PokeText>
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
