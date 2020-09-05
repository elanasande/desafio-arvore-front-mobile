import React from 'react'
import { TouchableOpacity, Text } from './styles'

export default function Button(props){
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}