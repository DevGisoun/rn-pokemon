import { Tabs } from 'expo-router';
import {
    BookMarkedIcon,
    CrownIcon,
    HomeIcon,
    LayoutDashboardIcon,
    UserIcon,
} from 'lucide-react-native';
import React from 'react';

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        paddingTop: 4,
                        paddingBottom: 4,
                    },
                    tabBarLabelStyle: { marginTop: 2 },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: '홈',
                        tabBarIcon: ({ color }) => (
                            <HomeIcon size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="pokedex"
                    options={{
                        title: '도감',
                        tabBarIcon: ({ color }) => (
                            <BookMarkedIcon size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="rank"
                    options={{
                        title: '랭킹',
                        tabBarIcon: ({ color }) => (
                            <CrownIcon size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: '대시보드',
                        tabBarIcon: ({ color }) => (
                            <LayoutDashboardIcon size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: '프로필',
                        tabBarIcon: ({ color }) => (
                            <UserIcon size={20} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
