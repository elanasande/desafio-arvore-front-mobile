
import React from 'react'

import Exemple from '../Pages/Exemple'
import Cadastro from '../Pages/Cadastro'
import Perfil from '../Pages/Perfil'

import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}> 
            
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Exemple" component={Exemple}/>
            <Stack.Screen name="Perfil" component={Perfil}/> 

        </Stack.Navigator>
    )
}
