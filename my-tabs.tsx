import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Feed() {
    return <Text>Feed !</Text>;
}

function Notifications() {
    return <Text>Notifications !</Text>;
}

export function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Feed">
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
}
