import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Texto, 
    ScrollView, Arrow, ImgArrow, 
    Titulo,  Ilustra, H2,
    Acessibilidade, ImgAcesso} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgDescoberta from '../../Assets/descoberta.png';
import ImgAcessibilidade from '../../Assets/icon-acessibilidade-2.png';

const Descoberta = () => {
    const navigation = useNavigation();

    function handleParabens() {
        navigation.navigate('Parabens');
      }

    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Acessibilidade onPress={() => navigation.goBack()}>
            <ImgAcesso source={ImgAcessibilidade}></ImgAcesso>
            </Acessibilidade>
            <Titulo></Titulo>
            <ScrollView>
                <H2 color="#D298C7">
                    Descoberta!
                </H2>
                <Ilustra source={ImgDescoberta}/>
                <Texto>
                    Que o cabelinho da Filó é todo enroladinho,
                    você já descobriu, mas olha só que palavra diferente... 
                </Texto>
                <H2 color="#FF995A">
                    Enrolar.
                </H2>
                <Texto>
                    Ela serve para vários momentos! Você sabia que pode utilizá-la
                    não só para falar de cachinhos, mas também quando alguém demora muito para fazer algo ou até mesmo quando uma coisa é colocada ao redor de outra?
                </Texto>
                <Texto>
                    Então aproveita para enrolar os bracinhos na mamãe e dar um abraço bem apertadão nela!
                </Texto>
                <Texto>
                    Depois desse abraço quentinho, vamos mostrar para a Filó que você também é muito inteligente? 
                </Texto>
                <Texto>
                    Com a ajuda da mamãe, digite na caixa abaixo como separar as sílabas da palavra enrolar.</Texto>
                <Texto></Texto>
                <Input name="resposta" color="#FF995A" placeholder="Resposta" placeholderTextColor="#FF995A"/>
                   
         
            <Button title="Enviar"
            onPress={handleParabens}
            />     
            </ScrollView>
            <Texto></Texto>
        </View>
    )

}

export default Descoberta