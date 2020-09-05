import React from 'react'
import { Text, ImageBackground } from 'react-native'

import {  View, Container, LogoApp, ImgIni, Texto, Redes, Row, Line, Title, Textobtn} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/quadrada.png';

const Exemple = () => {

    return (
        <View>
            <LogoApp source={ImgLogo}></LogoApp>
            
            <Input name="email" placeholder="E-mail"/>
            <Input name="password" placeholder="Senha" secureTextEntry={true}/>
            <Button title="Entrar"/>
            <Texto>Não possui uma conta? Cadastre-se.</Texto>
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