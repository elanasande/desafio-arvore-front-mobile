import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Texto, 
    Avatar, Answer, Textobtn, Arrow, ImgArrow, Titulo, ImgAvatar, ViewPular ,Pular} from './styles'

import Button from '../../Components/Button';
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { TouchableOpacity} from "react-native";

const Tutorial = () => {
    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('Crianca');
      }
      function handleAdicionar() {
        navigation.navigate('Adicionar');
      }
    return (
        <View>   
            
            <Titulo>Tutorial</Titulo>
            <Row>
            <Texto>
            Aqui será colocado um exemplo de funcionalidade 1 do aplicativo.
            </Texto>
            <Texto>
            Aqui será colocado um exemplo de funcionalidade 2 do aplicativo.
            </Texto>
            </Row>


            
            <Button title="Próximo"
                    onPress={handlePerfil}
            />
            <ViewPular>
            <TouchableOpacity onPress={handlePerfil}>
                <Pular>Pular</Pular>
            </TouchableOpacity>
            </ViewPular>

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Tutorial