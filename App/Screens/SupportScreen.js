import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './Styles/SupportScreenStyles';
const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SupportScreen;

