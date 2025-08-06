import { Text, type TextProps } from 'react-native';

export function PokeText(props: TextProps) {
    return (
        <Text {...props} style={[{ fontFamily: 'DungGeunMo' }, props.style]} />
    );
}
