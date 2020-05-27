import React ,{Component} from 'react';
import {View, Text, ShadowPropTypesIOS } from 'react-native';
import Styles from './Styles/HeaderStyle'


const Header =(props)=>{
    return( 
        <View style={Styles.view1}>
<Text  style={Styles.text11}>{props.headerText} </Text>
        </View>
    )
};
export { Header};