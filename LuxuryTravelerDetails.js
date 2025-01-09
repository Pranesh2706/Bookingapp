
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { getDetailsByPhone } from '../api/LuxuryTravelerDetails';

const LuxuryTravelerDetails = () => {
  const [data, setData] = useState([]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState(null);

  // GET Method
  const handleGetData = async () => {
    // if (!mobileNumber.trim()) {
    //   Alert.alert('Validation Error', 'Mobile number cannot be empty.');
    //   return;
    // }

    // const url = `http://192.168.90.47:4001/api/booking_details/${mobileNumber}`; // Replace with your API endpoint

    // try {
    //   const response = await axios.get(url);
    //   setData(response.data); // Expecting an array of objects with required fields
    //   setError(null);
    // } catch (err) {
    //   console.error('Error fetching data:', err.message);
    //   setError('Failed to fetch data. Check your API and network.');
    //   setData([]);
    // }
    try{
      const data = await getDetailsByPhone(mobileNumber)
      console.log(data,"datatatata");
      
      setData(data)
    }
    catch(e){
      console.log(e);
      
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luxury Traveler Details</Text>
  
      {/* Input for Mobile Number */}
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
      />

      {/* Fetch Data Button */}
      <Button title="Fetch Data (GET)" onPress={handleGetData} />

      {/* Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Data Display */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Display passenger details */}
            {item.passenger && item.passenger.length > 0 ? (
              item.passenger.map((passenger, index) => (
                <View key={index} style={styles.passengerDetails}>
                  <Text style={styles.cardTitle}>Name: {passenger.user_name}</Text>
                  <Text>Age: {passenger.age}</Text>
                  <Text>Gender: {passenger.gender}</Text>
                  <Text>Seat: {passenger.seat}</Text>
                </View>
              ))
            ) : (
              <Text>No passenger details available.</Text>
            )}
          </View>
        )}
        ListEmptyComponent={<Text>No data available..</Text>}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginVertical: 10,
  },
});

export default LuxuryTravelerDetails;
