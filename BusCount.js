import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const BusCount = ({ from, to }) => {
  const [busCount, setBusCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        // Construct API URL
        const apiUrl = `http://192.168.90.47:4001/api/process-bus-info?source_name=${from}&destination_name=${to}`;
        
        // Fetch the bus data
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }

        const data = await response.json();
        
        // Check if buses data exists and calculate bus count
        if (data && Array.isArray(data)) {
          // Count the buses with available seats
          setBusCount(data.length);
        } else {
          setBusCount(0);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusData();
  }, [from, to]);

  // Display loading indicator while fetching data
  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  // Display error if there was an issue
  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  // Display the bus count
  return (
    <View>
      <Text style={styles.text}>
        Number of Buses Available from {from} to {to}: {busCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default BusCount;
