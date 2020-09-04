import React from 'react'
import { TextInput } from './styles'

export default function Input(props){
    return (
        <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}} {...props}/>
    )
}