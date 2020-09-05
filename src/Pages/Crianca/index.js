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

const Crianca = () => {
    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('Perfil');
      }
      function handleAdicionar() {
        navigation.navigate('Adicionar');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Titulo>Perfil da Criança</Titulo>
            <Avatar>
                <ImgAvatar source={ImgAvatarRoxo}>
                </ImgAvatar>
            </Avatar>

            <Input name="nome" color="#FF995A" placeholder="Nome e Sobrenome" placeholderTextColor="#FF995A"/>
            <Input name="apelido" color="#FF995A" placeholder="Apelido" placeholderTextColor="#FF995A"/>
            <Input name="nascimento" color="#FF995A" placeholder="Data de Nascimento" placeholderTextColor="#FF995A"/>
            <Input name="genero" color="#FF995A" placeholder="Gênero" placeholderTextColor="#FF995A"/>
        
            
            <Button title="Cadastrar"
                    onPress={handleAdicionar}
            />

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Crianca