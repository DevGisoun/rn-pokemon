import { Pokemon } from '@/src/types';
import { generateUUIDv4 } from '@/src/utils';
import React from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokemonTypeBadge } from '../badge';
import { PokeText } from '../common';

interface PokemonDetailModalProps {
    pokemon: Pokemon | null;
    visible: boolean;
    onClose: () => void;
}

export default function PokemonDetailModal({
    pokemon,
    visible,
    onClose,
}: PokemonDetailModalProps) {
    if (!pokemon) return null;

    return (
        <Modal visible={visible} animationType="slide">
            <SafeAreaView className="p-4 gap-4">
                <View className="flex-row">
                    <View className="items-center pr-4">
                        <Image
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                            }}
                            className="w-2/5 aspect-square object-contain border"
                        />
                        <View className="gap-4 items-center">
                            <Text className="text-4xl font-bold">
                                {pokemon.koreanName}
                            </Text>
                            <View className="flex-row items-center gap-2">
                                <View className="flex-row gap-2">
                                    {pokemon.types.map((type) => (
                                        <PokemonTypeBadge
                                            key={generateUUIDv4()}
                                            type={type.type}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="w-[1px] h-full bg-neutral-200 mx-2" />
                    <View className="flex-1 pl-4">
                        <View className="flex-row flex-wrap">
                            <View className="w-1/2 items-center p-1">
                                <Text className="text-sm font-bold text-neutral-300">
                                    HEIGHT
                                </Text>
                                <Text className="text-sm font-bold text-black">
                                    1.7
                                </Text>
                            </View>
                            <View className="w-1/2 items-center p-1">
                                <Text className="text-sm font-bold text-neutral-300">
                                    HEIGHT
                                </Text>
                                <Text className="text-sm font-bold text-black">
                                    1.7
                                </Text>
                            </View>
                            <View className="w-1/2 items-center p-1">
                                <Text className="text-sm font-bold text-neutral-300">
                                    HEIGHT
                                </Text>
                                <Text className="text-sm font-bold text-black">
                                    1.7
                                </Text>
                            </View>
                            <View className="w-1/2 items-center p-1">
                                <Text className="text-sm font-bold text-neutral-300">
                                    HEIGHT
                                </Text>
                                <Text className="text-sm font-bold text-black">
                                    1.7
                                </Text>
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
                        onPress={onClose}
                    >
                        <PokeText>Close</PokeText>
                    </Pressable>
                </View>
            </SafeAreaView>
        </Modal>
    );
}
