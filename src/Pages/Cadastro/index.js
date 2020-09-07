import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Texto, LogoApp} from './styles'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/juntim.png';

import { CheckBox, Text} from "react-native";

const Cadastro = () => {
    const navigation = useNavigation();

    function handleExemple() {
        navigation.navigate('Exemple');
      }

    const [isSelected, setSelection] = useState(false);

    return (
        <View>   
             <LogoApp source={ImgLogo}></LogoApp>

            <Input name="nome" color="#FF995A" placeholder="Nome e Sobrenome" placeholderTextColor="#FF995A"/>
            <Input name="apelido" color="#FF995A" placeholder="Como a criança te chama" placeholderTextColor="#FF995A"/>
            <Input name="nascimento" color="#FF995A" placeholder="Data de Nascimento" placeholderTextColor="#FF995A"/>
            <Input name="genero" color="#FF995A" placeholder="Gênero" placeholderTextColor="#FF995A"/>
            <Input name="email" color="#FF995A" placeholder="E-mail" placeholderTextColor="#FF995A"/>
            <Input name="telefone" color="#FF995A" placeholder="Numero de Telefone" placeholderTextColor="#FF995A"/>
            <Input name="password" color="#FF995A" placeholder="Senha" placeholderTextColor="#FF995A" secureTextEntry={true}/>
            
            
            <Row>
        <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        />
        <Texto>Li e concordo com os termos de uso.</Texto>
      </Row>
      <Button title="Cadastrar"
            onPress={handleExemple}
      />
           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Cadastro