import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgLivro, ImgIni, Row, Col, Arrow, ImgArrow, 
    Titulo, Info, Sinopse, Icones, SinopseTitulo} from './styles'

import Button from '../../Components/Button';
import LivroComponent from '../../Components/Livro';
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import Imgbook from '../../Assets/Imagem.png';
import Favorito from '../../Assets/favorito.png';
import Add from '../../Assets/add.png';
import Download from '../../Assets/download.png';

import { CheckBox, Text} from "react-native";

const Livro = () => {
    const navigation = useNavigation();

    function handleLeitura() {
        navigation.navigate('Leitura');
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
            <Row>
            <ImgLivro source={Imgbook}>
                    </ImgLivro>
                    <Col>
                     <Info>
                         Autor: Rodrigo Goecks.
                        Editora: Independente.
                        Gênero: Autocuidado.
                        Ano: 2016.
                     </Info>
                    <Row>
                        <Icones source={Favorito}></Icones>
                        <Icones source={Add}></Icones>
                        <Icones source={Download}></Icones>
                    </Row>
                    </Col>
                   
            </Row>
            
            <SinopseTitulo>Sinopse:</SinopseTitulo>
            <Sinopse>Essa é a história da Maria Filó. 
                Ela é uma garotinha alegre e esperta, 
                que curte seus cabelos cacheados de montão!
                 Sabe o que ela descobriu? 
                 Que cada um nasce de um jeito, 
                 com diversos tipos de cabelo, 
                 e que ser cacheada é muito legal! 
                 Como são lindos os cachinhos da Maria Filó.</Sinopse>
                   
            <Button title="Iniciar Leitura Juntos"
            onPress={handleLeitura}
      />

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Livro