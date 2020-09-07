import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Texto, 
            ScrollView, Arrow, ImgArrow, 
            Titulo, Ilustra, H2,
        Acessibilidade, ImgAcesso} from './styles'

import Button from '../../Components/Button'
import ImgArrowLeft from '../../Assets/arrow-left.png';
import ImgErros from '../../Assets/7erros.png';
import ImgErros2 from '../../Assets/7erros2.png';
import ImgAcessibilidade from '../../Assets/icon-acessibilidade-2.png';

const Erros = () => {
    const navigation = useNavigation();

    function handleDescoberta() {
        navigation.navigate('Descoberta');
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
                <H2>
                É hora da diversão!
                </H2>
                <Texto>A Filó e sua mamãe estão precisando da ajuda de vocês
                     para encontrar alguns itens que estão faltando na segunda 
                     imagem e que são muito importantes na hora de cuidar de seus cachinhos.
                      Antes de continuarem com a leitura, que tal mostrar para ela onde estão?
                       Lembrem-se de procurar com bastante atenção!</Texto>
                <Ilustra source={ImgErros}/>
                <Ilustra source={ImgErros2}/>
                <Texto></Texto>
              
                   
         
            <Button title="Continuar"
            onPress={handleDescoberta}
            />     
            </ScrollView>
            <Texto></Texto>
            
          
        </View>
    )

}

export default Erros