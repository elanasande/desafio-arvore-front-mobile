import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import BookcaseScreen from './screens/Bookcase';
import FeedScreen from './screens/Feed';
import ProfileScreen from './screens/Profile';
import StoreScreen from './screens/Store';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Bookcase: {
        lib: MaterialCommunityIcons,
        name: 'library-books',
    },
    Feed: {
        lib: AntDesign,
        name: 'file1',
    },
    Profile: {
        lib: AntDesign,
        name: 'user',
    },
    Store: {
        lib: MaterialIcons,
        name: 'store',
    },
};
export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions = {(route)=>({
                tabBarIcon: ({ color, size}) => {
                    const { lib: Icon, name} = icons[route.name];
                    return <Icon name ={name} size={size} color={color}/>;
                },

            })}
            >
            <Tab.Screen
            name = "Home"
            component ={HomeScreen}
            options={{
                title: 'Início',
            }}/>

            <Tab.Screen
            name = "Bookcase"
            component ={BookcaseScreen}
            options={{
                title: 'Estante'
            }}/>

            <Tab.Screen
            name = "Feed"
            component ={FeedScreen}
            options={{
                title: 'Feed'
            }}/>

            <Tab.Screen
            name = "Profile"
            component ={ProfileScreen}
            options={{
                title: 'Perfil'
            }}/>

            <Tab.Screen
            name = "Store"
            component ={StoreScreen}
            options={{
                title: 'Loja'
            }}/>
        </Tab.Navigator>

    );
}