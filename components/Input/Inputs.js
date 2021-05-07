import React from 'react';
import { Input} from "react-native-elements";

export const InputLogin = ({...props}) =>{
    return (
        <Input 
    placeholder={props.placeholder}
     maxLength={12} 
     style={{ margin: 15 }}
     leftIcon={props.icon}
     onChangeText={(text) => props.function(text)}
    ></Input>
    )
}

export const InputPassword = ({...props}) =>{
    return (
        <Input 
    placeholder={props.placeholder}
     maxLength={12} 
     style={{ margin: 15 }}
     leftIcon={props.icon}
     onChangeText={(text) => props.function(text)}
     secureTextEntry={true}
    ></Input>
    )
}