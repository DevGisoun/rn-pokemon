import PokeText from '@/src/components/PokeText';
import { Text, View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <PokeText>야생의 ㅇㅇ이 나타났따</PokeText>
        </View>
    );
}
