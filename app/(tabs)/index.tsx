import { PokemonCard } from '@/src/components/card';
import { AppHeader, PokeText } from '@/src/components/common';
import { FlatList, View } from 'react-native';

export default function HomeScreen() {
    const pokemonIds = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

    return (
        <View className="w-full h-full bg-white">
            <AppHeader />
            <View className="p-4 gap-4">
                <PokeText className="text-2xl">
                    Gotta catch &apos;em all
                </PokeText>
                {/* <View className="flex flex-row flex-wrap -mx-2">
                    <PokemonCard number={1} />
                    <PokemonCard number={2} />
                    <PokemonCard number={3} />
                </View> */}
                <FlatList
                    data={pokemonIds}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <>
                            <PokemonCard number={item.id} />
                        </>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
