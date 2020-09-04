import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';

import Exemple from './src/Pages/Exemple'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default ({navigation}) => {
    return(
      <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="Exemple" component={Exemple}/>
            
        </Stack.Navigator>
      </NavigationContainer>
       
    )
}