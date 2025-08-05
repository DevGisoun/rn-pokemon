import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#121212',
        background: '#f9f9f9',
    },
};

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        DungGeunMo: require('../assets/fonts/DungGeunMo.otf'),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <ThemeProvider value={appTheme}>
                <SafeAreaView className="w-full h-full">
                    <Slot />
                </SafeAreaView>
            </ThemeProvider>
        </>
    );
}
