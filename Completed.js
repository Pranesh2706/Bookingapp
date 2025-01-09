import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon

const ticketsData = [
  { id: '1', place: 'Place A', busName: 'Bus A' },
  { id: '2', place: 'Place B', busName: 'Bus B' },
  { id: '3', place: 'Place C', busName: 'Bus C' },
  { id: '4', place: 'Place D', busName: 'Bus D' },
];

const Completed = ({ navigation }) => {
  useEffect(() => {
    // Hide the header when the component mounts
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const renderTicket = ({ item }) => (
    <View style={styles.ticket}>
      <Text style={styles.confirmText}>Confirm</Text>
      <Text style={styles.placeName}>{item.place}</Text>
      <Text style={styles.busName}>{item.busName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Booking History</Text>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.pageName}>Completed Tickets</Text>
      </View>

      <View style={styles.bottomSection}>
        <FlatList
          data={ticketsData}
          renderItem={renderTicket}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.footerSection}>
        <Text style={styles.pageName}>End of Completed Tickets</Text>
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
    backgroundColor: '#1f487c',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Make sure the back button is positioned correctly
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
    zIndex: 1, // Ensure the back button is above other elements
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  middleSection: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e5fff1',
    alignItems: 'center',
  },
  pageName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f487c',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#e5fff1',
    padding: 10, // Adjust padding as needed
  },
  ticket: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative', // Ensure positioning for the confirm text
  },
  confirmText: {
    color: '#28a745', // Green color
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f487c',
  },
  busName: {
    fontSize: 16,
    color: '#1f487c',
  },
  footerSection: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e5fff1',
    alignItems: 'center',
  },
});

export default Completed;
