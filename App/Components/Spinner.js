import React ,{Component} from 'react';
import {View, Text,ActivityIndicator } from 'react-native';




const Spinner =({size})=>{
    return( 
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <ActivityIndicator size={size || 'large'} />
       </View>
    )
};
export { Spinner};