import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , H2, Texto, 
    Arrow, ImgArrow, Titulo, Capa, Ilustra} from './styles'

import Button from '../../Components/Button'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgCapa from '../../Assets/Imagem.png';
import ImgCoracao from '../../Assets/moeda.png';
import ImgCabelo2 from '../../Assets/cabelo2.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { TextInput} from "react-native";

const Escolher = () => {
    const navigation = useNavigation();

      function handleLeitura() {
        navigation.navigate('Leitura');
      }
      function handleBiblioteca() {
        navigation.navigate('Biblioteca');
      }
      function handleTesouros() {
        navigation.navigate('Tesouros');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <H2 color="#D298C7">
            O que deseja fazer?
            </H2>
            
            <Titulo>  </Titulo>
            <Button title="Continuar Leitura"
            onPress={handleLeitura}
            />
            
            <Button title="Continuar Depois"
            onPress={handleBiblioteca}
            /> 
            
            <Button title="Ir Para Meus Tesouros"
            onPress={handleTesouros}
            /> 

            <Texto></Texto>
          
        </View>
    )

}

export default Escolher
