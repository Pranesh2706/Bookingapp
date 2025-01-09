import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons

const TermsCondition = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Back Button */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.contentText}>
          {/* Add your Terms and Conditions text here */}
          Here you can display the terms and conditions for the app.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5fff1', // Light background color for the whole screen
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1f487c', // Header background color
    height: 60, // Adjust height based on your design
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentSection: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#1f487c', // Text color
  },
});

export default TermsCondition;
