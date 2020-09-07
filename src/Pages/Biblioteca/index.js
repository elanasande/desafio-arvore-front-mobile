import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Container, ImgIni, Row, Titulo, LogoApp, Tag, ScrollView} from './styles'


import Button from '../../Components/Button'
import Pesquisar from '../../Components/Pesquisar'
import ImgInicio from '../../Assets/logoArvore.png';
import ImgLogo from '../../Assets/juntim.png';
import ImgLupa from '../../Assets/lupa.png';
import ImgUp from '../../Assets/chevron-up.png';
import Imgbook from '../../Assets/Imagem.png';
import Livro from '../../Components/Livro';


const Biblioteca = () => {
    const navigation = useNavigation();

    function handleLivro() {
        navigation.navigate('Livro');
      }

    const [isSelected, setSelection] = useState(false);

    return (
        <View>   
             <LogoApp source={ImgLogo}></LogoApp>
            <Titulo>Biblioteca</Titulo>
            <Pesquisar name="pesquisar" colorI="#D298C7" placeholder="Pesquisar" placeholderTextColor="#FFF" source={ImgLupa}/>
            <Pesquisar name="filtrar" colorI="#dcdcdc" placeholder="Filtrar" placeholderTextColor="#9B9B9B" source={ImgUp}/>
            <ScrollView>
                <Tag>Recomendados</Tag>
                <ScrollView horizontal={true}>
                     <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook} onPress={handleLivro}>
                    </Livro>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
                </ScrollView>
                   
            
                <Tag>Autocuidado</Tag>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
                <Tag>Ação</Tag>
                    <Livro title="Cabelo Bom é o Quê?" autor="Rodrigo Goecks" source={Imgbook}>
                    </Livro>
            </ScrollView>
                

           <Container>
                <ImgIni source={ImgInicio}></ImgIni>
            </Container>      
        </View>
    )

}

export default Biblioteca