import React ,{Component} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/ButtonStyle'


const Button =({onPress,children})=>{
    return( 
     <TouchableOpacity 
     onPress={onPress}
     style={styles.view1}  >
         <Text style={styles.text11}>{children}</Text>
       </TouchableOpacity>
     
    )
};
export {Button};