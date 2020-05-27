import React ,{Component} from 'react';
import {View, Text,  } from 'react-native';
import styles from './Styles/CardStyle'


const Card =(props)=>{
    return( 
        <View style={styles.view1} >
           {props.children}
        </View>
    )
};
export { Card};