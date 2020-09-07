import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Texto, 
    Avatar, Answer, Textobtn, Arrow, ImgArrow, Titulo, ImgAvatar} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { CheckBox, Text} from "react-native";

const Adicionar = () => {
    const navigation = useNavigation();

    function handleCrianca() {
        navigation.navigate('Crianca');
      }
      function handleTutorial() {
        navigation.navigate('Perfil');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Titulo>Perfil da Criança</Titulo>
                   
            <Texto>Gostaria de adicionar outro perfil?</Texto>
            <Row>
            <Answer color="#45D0C1" onPress={handleCrianca}><Textobtn>Sim</Textobtn></Answer>
           <Answer color="#EB5760" onPress={handleTutorial}><Textobtn>Não</Textobtn></Answer>
           </Row>

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Adicionar