import React ,{Component} from 'react';
import {View, Text,TextInput, ShadowPropTypesIOS } from 'react-native';
import styles from './Styles/InputStyle'



const Input =({label,onChangeText,value,placeholder,secureTextEntry})=>{
    return( 
       <View style={styles.view1}>
            <Text style={styles.text11}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            placeholder={placeholder}
            style={styles.textinput11}
            value={value}
            onChangeText={onChangeText}
            />
       </View>
    )
};
export { Input};