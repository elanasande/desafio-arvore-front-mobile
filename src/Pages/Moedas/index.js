import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , H2, H3, Texto, 
    Avatar, Answer, ScrollView, Arrow, ImgArrow, Titulo, Capa, Ilustra} from './styles'

import Button from '../../Components/Button'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgCapa from '../../Assets/Imagem.png';
import ImgCoracao from '../../Assets/moeda.png';
import ImgCabelo2 from '../../Assets/cabelo2.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { TextInput} from "react-native";

const Moedas = () => {
    const navigation = useNavigation();

      function handleEscolher() {
        navigation.navigate('Escolher');
      }
      function handleTesouros() {
        navigation.navigate('Tesouros');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Ilustra source={ImgCoracao}/>
            <H2 color="#D298C7">
                Uhul!
            </H2>
            <H3 color="#FF995A">
                Você ganhou 10J!
            </H3>
            <Titulo>  </Titulo>
            <Button title="Ir Para Meus Tesouros"
            onPress={handleTesouros}
            />
            
            <Button title="Ver Depois"
            onPress={handleEscolher}
            /> 
            
            <Texto></Texto>
          
        </View>
    )

}

export default Moedas
