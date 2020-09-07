import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Texto, 
    Avatar, Answer, ScrollView, Arrow, ImgArrow, Titulo, Capa, Ilustra, H2} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgCapa from '../../Assets/Imagem.png';
import ImgCabelo1 from '../../Assets/cabelo1.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgErros from '../../Assets/7erros.png';

import { CheckBox, Text} from "react-native";

const Erros = () => {
    const navigation = useNavigation();

    function handleLeitura() {
        navigation.navigate('Crianca');
      }
      function handleTutorial() {
        navigation.navigate('Tutorial');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Titulo></Titulo>
            <ScrollView>
                <H2>
                É hora da diversão!
                </H2>
                <Texto>A Filó e sua mamãe estão precisando da ajuda de vocês
                     para encontrar alguns itens que estão faltando na segunda 
                     imagem e que são muito importantes na hora de cuidar de seus cachinhos.
                      Antes de continuarem com a leitura, que tal mostrar para ela onde estão?
                       Lembrem-se de procurar com bastante atenção!</Texto>
                <Ilustra source={ImgErros}/>
                <Ilustra source={ImgErros}/>
                <Texto></Texto>
              
                   
         
            <Button title="Continuar Leitura"
            onPress={handleLeitura}
            />     
            </ScrollView>
            <Texto></Texto>
            
          
        </View>
    )

}

export default Erros