import React from 'react'
import { TouchableOpacity, Title, Row, ImgIcone, Img } from './styles'

export default function Tesouro(props){
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Img {...props}></Img>
            <Row>
                <ImgIcone {...props}></ImgIcone>
                <Title>{props.valor}</Title>
            </Row>   
        </TouchableOpacity>
    )
}
