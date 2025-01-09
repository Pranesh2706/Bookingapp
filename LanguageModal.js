import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const LanguageModal = ({ visible, onClose }) => {
  return (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={visible}
    //   onRequestClose={() => onClose()}
    // >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Your Language</Text>
          <TouchableOpacity onPress={() => { /* Handle selection */ }}>
            <Text style={styles.option}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle selection */ }}>
            <Text style={styles.option}>தமிழ் (TAMIL)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle selection */ }}>
            <Text style={styles.option}>हिन्दी (HINDI)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  option: {
    fontSize: 18,
    marginVertical: 10,
  },
  closeButton: {                                       
    backgroundColor: '#ddd',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LanguageModal;
