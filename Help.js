import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button, CheckBox } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you are using Ionicons for the chevron

const Help = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.helpText}>Help & Support</Text>
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
        <View style={styles.contentWrapper}> {/* Added wrapper to adjust the content position */}
          <Text style={styles.touch}>Get in Touch</Text>
          <Text style={styles.inquiry}>
            If you have any inquiries, get in touch with us. We'll be happy to help you.
          </Text>

          {/* Phone Input */}
          <TextInput
            style={[styles.input, styles.whiteBackground]} // Added white background
            placeholder='Phone number'
            keyboardType='phone-pad'
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />

          {/* Email Input */}
          <TextInput
            style={[styles.input, styles.whiteBackground]} // Added white background
            placeholder='Enter email'
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Text style={styles.feel}>Feel free to ask your query :)</Text>

          {/* Card Section */}
          <View style={styles.card}>
            <TextInput
              style={styles.cardInput}
              placeholder='Name'
            />
            <TextInput
              style={styles.cardInput}
              placeholder='Email'
              keyboardType='email-address'
            />
            <TextInput
              style={[styles.cardInput, styles.messageInput]}
              placeholder='Message'
              multiline={true}
            />

            {/* Checkbox and Submit */}
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>I accept the terms and conditions</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f487c',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  helpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 32,
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
    alignItems: 'center',
    position: 'relative',
    paddingTop: 20,
  },
  bottomImage: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    opacity: 0.05, // Reduced opacity
    transform: [{ scale: 0.5 }],
    marginTop:-390,
  },
  contentWrapper: {  // Added wrapper to shift content upwards
    marginTop: -20,  // Moves the content upwards
    width: '100%',
    alignItems: 'center',
  },
  inquiry: {
    fontSize: 18,
    color: '#1f487c',
    marginBottom: 20,
    marginLeft: 18,
  },
  touch: {
    fontSize: 24,
    color: '#1f487c',
    marginLeft: 17,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  whiteBackground: {  // Added style for white background
    backgroundColor: 'white',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardInput: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
  },
  messageInput: {
    height: 80,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    color: 'red',
  },
  submitButton: {
    backgroundColor: '#1f487c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 350,
    justifyContent: 'center', // Added to center the content vertically
    alignItems: 'center', // Added to center the content horizontally
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  feel: {
    fontSize: 25,
    color: '#1f487c',
  },
});

export default Help;
