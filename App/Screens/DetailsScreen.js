import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './Styles/DetailsScreen'
const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("DetailsScreen")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("HomeScreen")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DetailsScreen;

