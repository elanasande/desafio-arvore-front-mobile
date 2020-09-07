import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Texto, 
    Avatar, Answer, ScrollView, Arrow, ImgArrow, Titulo, Capa, Ilustra} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgCapa from '../../Assets/Imagem.png';
import ImgCabelo1 from '../../Assets/cabelo1.png';
import ImgCabelo2 from '../../Assets/cabelo2.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { CheckBox, Text} from "react-native";

const Leitura = () => {
    const navigation = useNavigation();

    function handleErros() {
        navigation.navigate('Erros');
      }
      function handleTutorial() {
        navigation.navigate('Tutorial');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Titulo>Cabelo Bom é o Quê?</Titulo>
            <ScrollView>
                <Capa source={ImgCapa}/>
                <Texto>Este livro foi feito com todo amor para todas as meninas cacheadas do Brasil.</Texto>
                <Ilustra source={ImgCabelo1}/>
                <Texto>
                Um dia me falaram que existia cabelo ruim... Mas por quê? Cabelo bom é o quê?
                </Texto>
                <Ilustra source={ImgCabelo2}/>
                <Texto>
                CABELO BOM É O QUE NASCE, CRESCE E CAI,
NASCE DE NOVO E POR AÍ VAI...
                </Texto>
              
                   
                <Texto></Texto>
            <Button title="É hora da diversão!"
            onPress={handleErros}
            />     
            </ScrollView>
            <Texto></Texto>
          
        </View>
    )

}

export default Leitura