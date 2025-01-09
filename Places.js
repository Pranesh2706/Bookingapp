import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Places = ({ navigation, route }) => {
  const [places, setPlaces] = useState([]);
  const [dat, setData] = useState([]);

  useEffect(() => {
    // Simulate local places
    const fetchedPlaces = [
      { id: '1', name: 'Chennai' },
      { id: '2', name: 'Bangalore' },
      { id: '3', name: 'Mumbai' },
    ];
    setPlaces(fetchedPlaces);

    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://192.168.90.47:4001/api/process-bus-info`, {
          places , // Send fetchedPlaces instead of initial empty state
        });
        setData(response.data); // Store the response in dat state
        console.log(response.data); // Log the API response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectPlace = (place) => {
    // Navigate back to Home with the selected place and field
    navigation.navigate('Home', {
      input: place.name, // Selected place name
      field: route.params.field, // Indicates whether it is source or destination
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Place</Text>
      {places.map((place) => (
        <TouchableOpacity
          key={place.id}
          style={styles.placeButton}
          onPress={() => handleSelectPlace(place)}
        >
          <Text style={styles.placeText}>{place.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Optional: Display fetched data */}
      <View>
        {dat.length > 0 && (
          <Text style={styles.apiResponseTitle}>Fetched Data from API:</Text>
        )}
        {dat.map((item, index) => (
          <Text key={index} style={styles.apiResponseText}>
            {JSON.stringify(item)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  placeButton: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  placeText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  apiResponseTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  apiResponseText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Places;
