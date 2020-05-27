import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './Styles/HomeScreenStyles'
const HomeScreen = ({navigation}) => {

const { colors } = useTheme();

const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text
         style={{color: colors.text}}>
           Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      </View>
    );
};

export default HomeScreen;
