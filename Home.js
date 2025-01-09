import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon package

const Home = ({ navigation }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false); // Toggle calendar visibility

  const handleDateSelect = (date) => {
    setDepartureDate(date.dateString); // Set the selected date in YYYY-MM-DD format
    setShowCalendar(false); // Hide the calendar after selection
  };

  const handleNavigate = () => {
    if (from && to && departureDate) {
      navigation.navigate('BusDetails', {
        source_name: from,
        destination_name: to,
        departure_date_time: departureDate,
      });
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Booking</Text>

      {/* From Input */}
      <Text style={styles.label}>From</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter departure location"
        value={from}
        onChangeText={setFrom}
      />

      {/* To Input */}
      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={to}
        onChangeText={setTo}
      />

      {/* Departure Date */}
      <Text style={styles.label}>Departure Date</Text>
      
      {/* Calendar Button */}
      <TouchableOpacity onPress={() => setShowCalendar(true)} style={styles.calendarButton}>
        <Icon name="calendar-today" size={30} color="#4CAF50" />
        <Text style={styles.dateText}>
          {departureDate ? departureDate : 'Select Date'}
        </Text>
      </TouchableOpacity>

      {/* Show calendar if showCalendar is true */}
      {showCalendar && (
        <Calendar
          markedDates={{
            [departureDate]: { selected: true, selectedColor: 'blue' },
          }}
          onDayPress={handleDateSelect}
          style={styles.calendar}
        />
      )}

      {/* Button to navigate to BusDetails */}
      <Button title="Search Buses" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  calendar: {
    marginTop: 10,
    width: '100%',
  },
});

export default Home;
