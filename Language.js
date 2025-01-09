import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Ensure this is installed

const Language = () => {
  const [modalVisible, setModalVisible] = useState(false); // Manage modal visibility
  const [checked, setChecked] = useState(null); // Track selected radio button value (language)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ் (TAMIL)' },
    { code: 'es', label: 'español (SPANISH)' },
    { code: 'fr', label: '(français) French' }
  ];

  const openModal = () => {
    setModalVisible(true); // Show modal when "Language" is clicked
  };

  const closeModal = () => {
    setModalVisible(false); // Hide modal
  };

  const handleLanguageSelect = (languageCode) => {
    setChecked(languageCode); // Set the selected language code
    closeModal(); // Close the modal
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.languageText}>Language</Text>
      </TouchableOpacity>

      {/* Modal for language selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>

            {languages.map((language, index) => (
              <View key={index} style={styles.radioContainer}>
                <RadioButton
                  value={language.code}
                  status={checked === language.code ? 'checked' : 'unchecked'}
                  onPress={() => handleLanguageSelect(language.code)} // Select the language and close modal
                />
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => handleLanguageSelect(language.code)}
                >
                  <Text>{language.label}</Text>
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 18,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageOption: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    fontSize: 18,
    color: 'red',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
});

export default Language;
