import { PokemonCard } from '@/src/components/card';
import { AppHeader, PokeText } from '@/src/components/common';
import { FlatList, View } from 'react-native';

export default function HomeScreen() {
    const pokemonIds = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

    return (
        <View className="flex-1 p-4 bg-white">
            <View className="p-0 gap-4">
                <AppHeader />
                <PokeText className="text-2xl">
                    Gotta catch &apos;em all
                </PokeText>
            </View>
            <FlatList
                data={pokemonIds}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{ gap: 16 }}
                ItemSeparatorComponent={({ item }) => <View className="h-4" />}
                renderItem={({ item }) => <PokemonCard number={item.id} />}
            />
        </View>
    );
}
