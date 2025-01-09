import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import Bluerectangle from "../assets/Svg/Bluerectangle";
import { format } from 'date-fns';
import PlacesArrow from "../assets/Svg/PlacesArrow";
import RedSemiSleeper from "../assets/Svg/RedSemiSleeper";
import StarOne from "../assets/Svg/StarOne";
import FilterIcon from '../assets/Svg/FilterIcon';
import LuxuryCoachIcon from '../assets/Svg/LuxuryCoachIcon';
import NonACIcon from '../assets/Svg/NonACIcon';
import SortIcon from '../assets/Svg/SortIcon';
import SeaterIcon from '../assets/Svg/SeaterIcon';
import SemiSleeperIcon from '../assets/Svg/SemiSleeperIcon';
import SleeperIcon from '../assets/Svg/SleeperIcon';
import DayIcon from '../assets/Svg/DayIcon';
import NightIcon from '../assets/Svg/NightIcon';

const BusDetails = ({ route, navigation }) => {
  const { source_name, destination_name, departure_date_time } = route.params;
  const [busData, setBusData] = useState(null); // State to hold the bus data
  const [loading, setLoading] = useState(true); // Loading state for the API request
  const formattedDate = format(new Date(departure_date_time), 'EEE dd MMM');

  const cardOptions = [
    { label: 'Filters', icon: <FilterIcon width={20} height={20} /> },
    { label: 'Sort', icon: <SortIcon width={30} height={30} /> },
    { label: 'Luxury Coach', icon: <LuxuryCoachIcon width={25} height={25} /> },
    { label: 'Non AC', icon: <NonACIcon width={25} height={25} /> },
    { label: 'Seater', icon: <SeaterIcon width={25} height={25} /> },
    { label: 'SemiSleeper', icon: <SemiSleeperIcon width={25} height={25} /> },
    { label: 'Sleeper', icon: <SleeperIcon width={25} height={25} /> },
    { label: 'Day', icon: <DayIcon width={25} height={25} /> },
    { label: 'Night', icon: <NightIcon width={25} height={25} /> },
  ];

  const numberOfBuses = busData?.filter((item) => item.bus_info_id)?.length || 0;

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await axios.post("http://192.168.90.47:4001/api/process-bus-info", {
          source_name,
          destination_name,
          departure_date_time,
        });
        setBusData(response.data); // Set the bus data
      } catch (error) {
        console.error("Error fetching bus data:", error.response?.data || error.message);
      } finally {
        setLoading(false); // Set loading to false after the request is complete
      }
    };

    fetchBusData();
  }, [source_name, destination_name, departure_date_time]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{source_name}</Text>
          <PlacesArrow style={styles.PlacesArrow} />
          <Text style={styles.text}>{destination_name}</Text>
        </View>
        <Text style={styles.departureText}>{formattedDate}</Text>
        <Text style={styles.subHeaderText}>Number of Buses Available: {numberOfBuses}</Text>
      </View>

      {/* Advertisement Section */}
      <View style={styles.advertisementSection}>
        <Image
          source={require('../assets/Pictures/hnm.gif')}
          style={styles.Dressimage}
          resizeMode="contain"
        />
      </View>

      {/* Cards Section - Horizontally Scrollable */}
      <View style={styles.cardsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {cardOptions.map((option, index) => (
            <View
              key={index}
              style={[styles.card, index === 0 && { borderLeftColor: 'transparent' }]}
            >
              <View style={styles.iconContainer}>{option.icon}</View>
              <Text style={styles.cardText}>{option.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Scrollable Seat Container Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {busData?.map((item) => (
          <View style={styles.seatContainer} key={item.id}>
            <Bluerectangle style={styles.Bluerectangle} />
            <Text style={styles.BusOperatorText}>Bus Operator</Text>
            <Text style={styles.Operatorname}>{item.operator_name}</Text>
            <StarOne style={styles.StarOne} />
            <Text style={styles.Totalseats}>
              <RedSemiSleeper />
              {item.seat_availability?.total} Seats Left
            </Text>
            <Text>Available Female Seats: {item?.seat_availability?.avlFemale}</Text>
            <Text>Amenities: {item?.amenities}</Text>
            <Text>Duration: {item.time_duration}</Text>
            <Text>Departure Time: {item?.departure_date_time}</Text>
            <Text>Arrival Time: {item?.arrival_date_time}</Text>
            <TouchableOpacity>
              <Text
                style={styles.Price}
                onPress={() => navigation.navigate('JourneyDetails')}
              >
                ₹{item?.low_price.price}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5fff1',
  },
  topSection: {
    padding: 20,
    backgroundColor: '#1f487c',
  },
  advertisementSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  cardsContainer: {
    marginVertical: 10,
    paddingLeft: 20,
  },
  scrollViewContent: {
    paddingRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  departureText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  Dressimage: {
    width: '100%',
    height: 200,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  iconContainer: {
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  seatContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    width: '95%',
  },
  Totalseats: {
    color: '#C62B2B',
    fontWeight: '700',
    backgroundColor: '#FFC1C1',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  Bluerectangle: {
    marginLeft: -12,
    marginTop: -25,
  },
  Operatorname: {
    marginTop: -11,
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  BusOperatorText: {
    color: 'white',
    marginTop: -25,
    position: 'absolute',
    fontSize: 11,
  },
  StarOne: {
    marginLeft: 280,
    marginBottom: 5,
  },

  subHeaderText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BusDetails;
