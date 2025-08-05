import { getPokemonData } from '@/src/api';
import { Pokemon } from '@/src/types';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Modal,
    Pressable,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokeText } from '../common';

interface PokemonCardProps {
    number: number;
}

export function PokemonCard({ number }: PokemonCardProps) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [error, setError] = useState(false);

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
                className="w-1/2 p-4 bg-white rounded-2xl elevation-sm"
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
                        <View className="bg-neutral-100 px-4 py-1 rounded-md">
                            <PokeText className="text-neutral-400">
                                노말
                            </PokeText>
                        </View>
                        <View className="bg-sky-100 px-4 py-1 rounded-md">
                            <PokeText className="text-sky-400">물</PokeText>
                        </View>
                    </View>
                </View>
            </Pressable>
            <Modal visible={modalVisible} animationType="slide">
                <SafeAreaView className="p-4 gap-4">
                    <View className="items-center">
                        <Image
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                            }}
                            className="w-3/4 aspect-square object-contain"
                        />
                        <View className="gap-4 items-center">
                            <Text className="text-4xl font-bold">
                                {pokemon.name}
                            </Text>
                            <View className="flex-row items-center gap-2">
                                <View className="flex-row gap-2">
                                    <View className="bg-neutral-100 px-4 py-[6px] rounded-md">
                                        <PokeText className="text-neutral-400">
                                            Normal
                                        </PokeText>
                                    </View>
                                    <View className="bg-rose-100 px-4 py-[6px] rounded-md">
                                        <PokeText className="text-rose-400">
                                            Fire
                                        </PokeText>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="h-[1px] w-full bg-neutral-200" />
                    <View className="w-full flex-row gap-4">
                        <Pressable
                            className="flex-1 flex-row items-center justify-center gap-2 bg-amber-200 py-3 px-6 rounded-lg"
                            onPress={() => alert('포획 버튼을 클릭하였습니다.')}
                        >
                            <Image
                                source={require('@/assets/images/pokeball.png')}
                                className="w-6 aspect-square"
                            />
                            <PokeText>Catch !!</PokeText>
                        </Pressable>
                        <Pressable
                            className="bg-neutral-200 py-4 px-6 rounded-lg"
                            onPress={() => setModalVisible(false)}
                        >
                            <PokeText>Close</PokeText>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    );
}
