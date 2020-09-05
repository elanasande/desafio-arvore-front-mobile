import React from 'react'
import { Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {  View, Container, LogoApp, ImgIni, Texto, Redes, Row, Line, Title, Textobtn} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';


const Exemple = () => {

    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('Perfil');
      }
    function handleCadastro() {
        navigation.navigate('Cadastro');
      }
    return (
        <View>
            <LogoApp source={ImgLogo}></LogoApp>
            
            <Input name="email" color= "#9B9B9B" placeholder="E-mail"/>
            <Input name="password" color= "#9B9B9B" placeholder="Senha" secureTextEntry={true}/>
            <Button title="Entrar"
                onPress={handlePerfil}
            />
            <TouchableOpacity onPress={handleCadastro}>
                <Texto>Não possui uma conta? Cadastre-se.</Texto>
            </TouchableOpacity>
            
            <Row>
                <Line/>
                <Title>ou</Title>
                <Line/>
                </Row>
                <Row>
                <Redes color="#EB5760"><Textobtn>Google</Textobtn></Redes>
           <Redes color="#18B1F2"><Textobtn>Facebook</Textobtn></Redes>
           </Row>
           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Exemple