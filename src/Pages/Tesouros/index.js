import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni,  Titulo, LogoApp, ScrollView} from './styles'

import Tesouro from '../../Components/Tesouro';
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/juntim.png';
import ImgMoeda from '../../Assets/moeda.png';

const Tesouros = () => {
    const navigation = useNavigation();

    function handleLivro() {
        navigation.navigate('Livro');
      }


    return (
        <View>   
             <LogoApp source={ImgLogo}></LogoApp>
            <Titulo>Tesouros</Titulo>
            <ScrollView>
                <Tesouro title="Cabelo Bom é o Quê?" source={ImgMoeda}  onPress={handleLivro}>
                </Tesouro>
                <Tesouro title="Cabelo Bom é o Quê?" source={ImgMoeda}  onPress={handleLivro}>
                </Tesouro>
                <Tesouro title="Cabelo Bom é o Quê?" source={ImgMoeda}  onPress={handleLivro}>
                </Tesouro>
                <Tesouro title="Cabelo Bom é o Quê?" source={ImgMoeda}  onPress={handleLivro}>
                </Tesouro>
                <Tesouro title="Cabelo Bom é o Quê?" source={ImgMoeda}  onPress={handleLivro}>
                </Tesouro>
                     
                </ScrollView>

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Tesouros
