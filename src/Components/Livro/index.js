import React from 'react'
import { TouchableOpacity, Title, Text, Img } from './styles'

export default function Livro(props){
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Img {...props}></Img>
            <Title>{props.title}</Title>
            <Text>{props.autor}</Text>
        </TouchableOpacity>
    )
}