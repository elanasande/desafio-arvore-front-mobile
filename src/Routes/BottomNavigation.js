import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Login from '../Pages/Perfil';
import Register from '../Pages/Cadastro';


import Perfil from '../Pages/Perfil'
import Biblioteca from '../Pages/Biblioteca'
import Tesouros from '../Pages/Tesouros'

const Tabs = createBottomTabNavigator();

const iconsName = {
  Login: 'user',
  Register: 'user-plus'
}

const TabIcon = (props) => {
  const name = iconsName[props.route.name];

  return <Feather name={name || 'info'} color={props.color} size={18} />
}

const AuthRouter = () => {
  return (
    <Tabs.Navigator 
      screenOptions={(p) => ({
        tabBarIcon: (props) => <TabIcon {...props} {...p} />,
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#313638',
        inactiveTintColor: '#797979',
        style: {
          backgroundColor: '#FCFCFC',
          borderTopWidth: 0
        }
      }}>
      <Tabs.Screen name="Biblioteca" component={Biblioteca} />
      <Tabs.Screen name="Estante" component={Register} />
      <Tabs.Screen name="Profile" component={Register} />
      <Tabs.Screen name="Conquistas" component={Register} />
      <Tabs.Screen name="Tesouros" component={Register} />
    </Tabs.Navigator>
  );
}

export default AuthRouter;