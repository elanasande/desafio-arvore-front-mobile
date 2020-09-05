import React from 'react'
import { Text, Header, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {  View, Container, ImgIni, Profile, ImgProfile, Nome,
     ViewPerfil, Adicionar, AdicionarText, Arrow, ImgArrow} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';


const Perfil = () => {

    const navigation = useNavigation();

    function handleAdicionar() {
        navigation.navigate('Exemple');
      }

    return (
        <View>
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
       <Adicionar onPress={handleAdicionar}>
                <AdicionarText>Adicionar</AdicionarText>
            </Adicionar>
        
            <Text>Quem está usando?</Text>  
            
           <ViewPerfil>
            <Profile>
            <ImgProfile source={ImgInicio}></ImgProfile>
                <Nome>Elana</Nome>
            </Profile>
            <Profile>
            <ImgProfile source={ImgInicio}></ImgProfile>
                <Nome>Maria</Nome>
            </Profile>
            <Profile>
            <ImgProfile source={ImgInicio}></ImgProfile>
                <Nome>Joao</Nome>
            </Profile>
            </ViewPerfil>
           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
        
    )

}

export default Perfil