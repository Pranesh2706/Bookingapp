import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView,Image } from 'react-native';
import Bluerectangle from "../assets/Svg/Bluerectangle";
import { format } from 'date-fns';
import PlacesArrow from "../assets/Svg/PlacesArrow";
import { TouchableOpacity } from 'react-native-web';




const BusDetails = ({ route, navigation }) => {
  const { source_name, destination_name, departure_date_time } = route.params;
  const [busData, setBusData] = useState(null); // State to hold the bus data
  const [loading, setLoading] = useState(true); // Loading state for the API request
  const formattedDate = format(new Date(departure_date_time), 'EEE dd MMM');

  // Fetch bus details when the component mounts
  useEffect(() => {
    const fetchBusData = async () => {
      console.log("Fetching bus data...");
      console.log("Source:", source_name);
      console.log("Destination:", destination_name);
      console.log("Departure:", departure_date_time);

      try {
        const response = await axios.post("http://192.168.90.47:4001/api/process-bus-info", {
          source_name,
          destination_name,
          departure_date_time,
        });
        console.log("Bus Data:", response.data); // Log the response to the console
        setBusData(response.data); // Set the bus data
      } catch (error) {
        console.error("Error fetching bus data:", error.response?.data || error.message); // Log error details
      } finally {
        setLoading(false); // Set loading to false after the request is complete
      }
    };

    fetchBusData();
  }, [source_name, destination_name, departure_date_time]);

  // Show a loading spinner while data is being fetched
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Display the bus data once it's fetched
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}> {source_name}</Text>
        <PlacesArrow style={styles.PlacesArrow} />
        <Text style={styles.text}>{destination_name}</Text>

      </View>
      <Text style={styles.departureText}>{formattedDate}</Text>



      {/* Render bus details */}
      {/* <View style={styles.detailsContainer}>
        <Text style={styles.subHeader}>Bus Details</Text>
        <Text>Bus Type: {busData?.bus_type}</Text>
        <Text>Departure Time: {busData?.departure_time}</Text>
        <Text>Arrival Time: {busData?.arrival_time}</Text>
      </View> */}

      {/* Render seat availability */}


      <View style={styles.BottomSection}>
        <View>
          <Image
            source={require('../assets/Pictures/hnm.gif')}
            // style={styles.Dressimage}
            resizeMode="contain"
          />
        </View>
        {busData?.map((item) => (
          <View style={styles.seatContainer} key={item.id}>
            <Bluerectangle style={styles.Bluerectangle} />
            {/* <Text style={styles.subHeader}>Seat Availability</Text> */}
            <Text style={styles.BusOperatorText}>Bus Operator</Text>
            <Text style={styles.Operatorname}>{item.operator_name}</Text>
            <Text style={styles.Totalseats}>Total Seats: {item.seat_availability?.total}</Text>
            <Text>Available Female Seats: {item?.seat_availability?.avlFemale}</Text>
            <Text>Amenities: {item?.amenities}</Text>
            <Text>Duration: {item.time_duration}</Text>
            <Text>Departure Time: {item?.departure_date_time}</Text>
            <Text>Arrival Time: {item?.arrival_date_time}</Text>
            <TouchableOpacity>
              <Text style={styles.Price} onPress={() => navigation.navigate('JourneyDetails')}>{item?.low_price.price}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '120%',
    marginBottom: 10,
    backgroundColor: "#1f487c",
    paddingHorizontal: 35,
    flex: 0.1,
    textAlign: "center",
    marginTop: -20,
    marginLeft: -15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: "white",
  },
  departureText: {
    fontSize: 16,
    marginTop: -50,
    color: 'white',
    textAlign: 'center', // Align the date in the center
    marginLeft: -10,
  },

  seatContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
    borderColor: "gray", // Changed to gray
    borderWidth: 2,
    marginBottom: 5,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
  Totalseats: {
    color: "#C62B2B",
    fontWeight: "700",
    backgroundColor: "#FFC1C1",
    borderRadius: 5,
    paddingHorizontal: 10, // Add padding around the text
    paddingVertical: 5,

  },
  Bluerectangle: {
    marginLeft: -12,
    marginTop: -25,
  },
  Operatorname: {
    marginTop: -11,
    position: "absolute",
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  BusOperatorText: {
    color: "white",
    marginTop: -25,
    position: "absolute",
    fontSize: 11,
  },
  BottomSection: {
    flex: 1.3,
    backgroundColor: '#e5fff1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 20,
    marginTop: 20,
    width: "107%",
    paddingHorizontal: 5,
    marginLeft: -10,
  },
  PlacesArrow: {
    marginTop: 10,
  },
});

export default BusDetails;
