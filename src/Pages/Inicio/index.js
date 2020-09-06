import React from 'react'
import { Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {  View, Container, LogoApp, ImgIni} from './styles'

import Button from '../../Components/Button'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogoJuntim from '../../Assets/Logo.png';



const Inicio = () => {
    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('Perfil');
      }
    function handleCadastro() {
        navigation.navigate('Cadastro');
      }
    return (
        <View>
            <LogoApp source={ImgLogoJuntim}></LogoApp>
            
           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>     
        </View>
        
    )

}

export default Inicio