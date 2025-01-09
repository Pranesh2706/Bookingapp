import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Jack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Jack's Page</Text>

      <Text style={styles.description}>
        This is a simple page for Jack.
      </Text>

      {/* Button to navigate to another page (optional) */}
      <Button 
        title="Go to Another Page" 
        onPress={() => navigation.navigate('AnotherPage')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Jack;
