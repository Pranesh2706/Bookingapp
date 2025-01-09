import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CountryModal from '../Screens/Countrymodal'; // Import the modal component

const Country = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.buttonText}>{selectedCountry}</Text>
      </TouchableOpacity>

      <CountryModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectCountry={handleSelectCountry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5fff1',
  },
  selectButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Country;
