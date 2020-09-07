import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , H2, H3, Texto, 
    Avatar, Answer, ScrollView, Arrow, ImgArrow, Titulo, Capa, Ilustra} from './styles'

import Button from '../../Components/Button'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgCapa from '../../Assets/Imagem.png';
import ImgCoracao from '../../Assets/Frame.png';
import ImgCabelo2 from '../../Assets/cabelo2.png';
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgAvatarRoxo from '../../Assets/avatar.png';

import { TextInput} from "react-native";

const Parabens = () => {
    const navigation = useNavigation();

    function handleMoedas() {
        navigation.navigate('Moedas');
      }
      function handleTutorial() {
        navigation.navigate('Tutorial');
      }
    return (
        <View>   
            <Arrow onPress={() => navigation.goBack()}>
            <ImgArrow source={ImgArrowLeft}></ImgArrow>
            </Arrow>
            <Titulo></Titulo>
            <ScrollView>
            <Ilustra source={ImgCoracao}/>
            <H2 color="#D298C7">
                Parabéns!
            </H2>
                <H3 color="#FF995A">
                Vocês são incríveis juntos!
                </H3>
                <Texto>
                Essa história nos trouxe aprendizados muito valiosos. O que vocês acham de agora conversar sobre eles e depois anotarem com carinho aqui? Assim poderão ler sempre que sentirem 
saudade dessa aventura maravilhosa!
                </Texto>
                <TextInput style={{borderWidth: 1, borderColor: '#D298C7'}}/>
                <Texto></Texto>
            <Button title="Salvar"
            onPress={handleMoedas}
            />     
            </ScrollView>
            <Texto></Texto>
          
        </View>
    )

}

export default Parabens