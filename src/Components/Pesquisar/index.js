import React from 'react'
import { Row, ViewInput, TextInput, TouchableOpacity, Img } from './styles'


export default function Pesquisar(props){
    return (
        
        <Row>
            <ViewInput {...props}>
                <TextInput {...props}/>
            <TouchableOpacity {...props}>
                <Img {...props}></Img>
            </TouchableOpacity>
            </ViewInput>
            
        </Row>
        
            )
}