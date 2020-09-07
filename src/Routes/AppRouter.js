
import React from 'react'

import Exemple from '../Pages/Exemple'
import Cadastro from '../Pages/Cadastro'
import Crianca from '../Pages/Crianca'
import Perfil from '../Pages/Perfil'
import Adicionar from '../Pages/Adicionar'
import Tutorial from '../Pages/Tutorial'
import Inicio from '../Pages/Inicio'
import Biblioteca from '../Pages/Biblioteca'
import Livro from '../Pages/Livro'
import Leitura from '../Pages/Leitura'
import Erros from '../Pages/7Erros'
import Descoberta from '../Pages/Descoberta'
import Parabens from '../Pages/Parabens'
import Moedas from '../Pages/Moedas'
import Escolher from '../Pages/Escolher'
import Tesouros from '../Pages/Tesouros'

import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}> 
       
                      
            <Stack.Screen name="Exemple" component={Exemple}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Perfil" component={Perfil}/> 
            <Stack.Screen name="Crianca" component={Crianca}/> 
            <Stack.Screen name="Adicionar" component={Adicionar}/> 
            <Stack.Screen name="Inicio" component={Inicio}/> 
            <Stack.Screen name="Tutorial" component={Tutorial}/>
            <Stack.Screen name="Biblioteca" component={Biblioteca}/>  
            <Stack.Screen name="Livro" component={Livro}/> 
            <Stack.Screen name="Leitura" component={Leitura}/> 
            <Stack.Screen name="Erros" component={Erros}/> 
            <Stack.Screen name="Descoberta" component={Descoberta}/> 
            <Stack.Screen name="Parabens" component={Parabens}/> 
            <Stack.Screen name="Moedas" component={Moedas}/> 
            <Stack.Screen name="Escolher" component={Escolher}/> 
            <Stack.Screen name="Tesouros" component={Tesouros}/> 
            
            
        </Stack.Navigator>
    )
}
