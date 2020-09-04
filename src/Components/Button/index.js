import React from 'react'
import { TouchableOpacity, Text } from './styles'

export default function Button(props){
    return (
        <TouchableOpacity>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}