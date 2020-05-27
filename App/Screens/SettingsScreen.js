import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './Styles/SettingsScreen'
const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SettingsScreen;

