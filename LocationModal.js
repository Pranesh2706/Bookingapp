import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LocationModal = ({ visible, onSelectLocation, onClose, title }) => {
  const locations = ['Chennai', 'Bangalore', 'Bangkok', 'Miami', 'Dallas'];

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        {/* Slide animation from the right */}
        <Animatable.View animation="slideInRight" duration={300} style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>

          <ScrollView>
            {/* Recent Searches / Select Destination Section */}
            {locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={styles.locationItem}
                onPress={() => {
                  onSelectLocation(location);
                  onClose();
                }}>
                <Text style={styles.locationText}>{location}</Text>
              </TouchableOpacity>
            ))}

            {/* Popular Boarding Points */}
            <Text style={styles.sectionTitle}>Popular Boarding Points</Text>
            {locations.map((location, index) => (
              <TouchableOpacity key={`boarding-${index}`} style={styles.locationItem}>
                <Text style={styles.locationText}>{location}</Text>
              </TouchableOpacity>
            ))}

            {/* Popular Cities */}
            <Text style={styles.sectionTitle}>Popular Cities</Text>
            {locations.map((location, index) => (
              <TouchableOpacity key={`city-${index}`} style={styles.locationItem}>
                <Text style={styles.locationText}>{location}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animatable.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#E5FFF1', // Full-screen background color
    justifyContent: 'center',
    alignItems: 'flex-end', // Align content to the right side
  },
  modalContent: {
    width: '80%', // Adjust width of modal
    height: '100%', // Full height for a sliding panel effect
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: "#1F487C",
    marginLeft:-170,
    marginTop:10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F487C',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  locationItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LocationModal;

