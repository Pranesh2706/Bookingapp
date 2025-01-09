import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you are using Ionicons for the chevron

const Personal = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState(null); // State to track selected gender

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleGenderSelection = (selectedGender) => { 
    setGender(selectedGender);
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personal Information</Text>
        <Image
          source={require('../assets/Header.png')} // Add your image path here
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../assets/back.png')} // Add your image path here
          style={styles.bottomImage}
          resizeMode="cover"
        />

        {/* Personal Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <TextInput style={styles.input} placeholder="Name*" />
          <TextInput style={styles.input} placeholder="Date of Birth*" />
          
          {/* Gender Selection */}
          <Text style={styles.genderTitle}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelection('Male')}
            >
              <View style={styles.radioButton}>
                {gender === 'Male' && <View style={styles.radioButtonSelected} />}
              </View>
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelection('Female')}
            >
              <View style={styles.radioButton}>
                {gender === 'Female' && <View style={styles.radioButtonSelected} />}
              </View>
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Details</Text>
          <TextInput style={styles.input} placeholder="State of Residence" />
          <TextInput style={styles.input} placeholder="Mobile Number" />
          <TextInput style={styles.input} placeholder="Email" />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f487c',
    paddingHorizontal: 15,
    position: 'relative',
  },
  backButton: {
    position: 'absolute', 
    top: 20,
    left: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
  },
  topImage: {
    position: 'absolute',
    width: '200%',
    height: '100%',
    opacity: 0.3,
    transform: [{ scale: 0.5 }],
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#e5fff1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 20,
  },
  bottomImage: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    opacity: 0.1,
    transform: [{ scale: 0.5 }],
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#1f487c',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color:'#1f487c',
  },
  genderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#1f487c',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1f487c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#1f487c',
  },
  genderText: {
    fontSize: 16,
    color: '#1f487c',
  },
  saveButton: {
    backgroundColor: '#1f487c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Personal;
