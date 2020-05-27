import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PackagesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default PackagesScreen;

