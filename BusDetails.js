import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from 'react-native';
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
import BusPlane from "../assets/Svg/BusPlane";
import BusRightLine from "../assets/Svg/BusRightLine";
import BlueTri from "../assets/Svg/BlueTri";
import BusLeftLine from "../assets/Svg/BusLeftLine";
import FirstcardPrice from "../assets/Svg/FirstcardPrice";
import DownBluerect from '../assets/Svg/DownBluerect';
import { TouchableOpacity } from 'react-native-web';
import ThirdGrayrect from '../assets/Svg/ThirdGrayrect';
import InbetweenLines from "../assets/Svg/InbetweenLines";
import ThirdAmenity from '../assets/Svg/ThirdAmenity';
import Dullbus from '../assets/Svg/Dullbus';
import BackGroundArrow from '../assets/Svg/BackGroundArrow';
import Line from '../assets/Svg/Line';


const BusDetails = ({ route, navigation }) => {
  const { source_name, destination_name, departure_date_time } = route.params;
  const [busData, setBusData] = useState(null);
  const [loading, setLoading] = useState(true);
  const formattedDate = format(new Date(departure_date_time), 'EEE dd MMM');
  const [modalVisible, setModalVisible] = useState(false);
  const [logoUrl, setLogoUrl] = useState();
  const formatTime = (dateTime) => {
    if (!dateTime) return ''; // Handle null or undefined values
    return format(new Date(dateTime), 'hh:mm '); // Example: 02:30 PM
  };
  const formatDateAndMonth = (dateTime) => {
    if (!dateTime) return ''; // Handle null or undefined values
    return format(new Date(dateTime), 'dd MMM'); // Example: "10 Jan"
  };


  // Function to handle opening the modal
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const cardOptions = [
    { label: 'Sort', icon: <SortIcon width={25} height={25} /> },
    { label: 'Luxury Coach', icon: <LuxuryCoachIcon width={25} height={25} /> },
    { label: 'Non AC', icon: <NonACIcon width={25} height={25} /> },
    { label: 'Seater', icon: <SeaterIcon width={25} height={25} /> },
    { label: 'SemiSleeper', icon: <SemiSleeperIcon width={25} height={25} /> },
    { label: 'Sleeper', icon: <SleeperIcon width={25} height={25} /> },
    { label: 'Day', icon: <DayIcon width={25} height={25} /> },
    { label: 'Night', icon: <NightIcon width={25} height={25} /> },
  ];

  const numberOfBuses = busData?.filter((item) => item.bus_info_id)?.length || 0;


  const baseUrl = "http://192.168.90.47:4001";

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await axios.post(`${baseUrl}/api/process-bus-info`, {
          source_name,
          destination_name,
          departure_date_time,
        });
        setBusData(response.data);

        if (response.data?.logos) {
          const fullLogoUrl = baseUrl + response.data.logos;
          setLogoUrl(fullLogoUrl);
        }
      } catch (error) {
        console.error("Error fetching bus data:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchBusData();
  }, [source_name, destination_name, departure_date_time]);
  console.log(busData);

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
          <Text style={styles.Sourcetext}>{source_name}</Text>
          <PlacesArrow style={styles.PlacesArrow} />
          <Text style={styles.Destinationtext}>{destination_name}</Text>
        </View>
        <View style={styles.RowContainerDateBus}>
          <Text style={styles.departureText}>{formattedDate}</Text>
          <Text style={styles.subHeaderText}> <Dullbus /> {numberOfBuses} Buses</Text>
        </View>

        <BackGroundArrow style={styles.BackGroundArrow} />

      </View>

      {/* Advertisement Section */}
      <View style={styles.advertisementSection}>
        <Image
          source={require('../assets/Pictures/hnm.gif')}
          style={styles.Dressimage}
          resizeMode="contain"
        />
      </View>

      {/* Static and Scrollable Cards */}
      <View style={styles.cardRow}>
        {/* Static Card */}
        <View style={styles.staticCard}>
          <FilterIcon width={25} height={25} style={styles.iconStyle} />
          <Text style={styles.cardText}>Filter</Text>
        </View>

        {/* Scrollable Cards */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}
        >
          {cardOptions.map((option, index) => (
            <View key={index} style={styles.cardRowContent}>

              {option.icon}
              <Text style={styles.cardText}>{option.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Scrollable Seat Container Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {busData?.map((item, index) => (
          <View style={styles.seatContainer} key={item.id || index}> {/* Fallback key */}

            <Bluerectangle style={styles.Bluerectangle} />
            <Text style={styles.BusOperatorText}>Bus Operator</Text>
            <Text style={styles.Operatorname}>{item.operator_name}</Text>
            {/* {logoUrl && <Image source={{ uri: logoUrl }} style={styles.logo} />} */}
            <Image source={`${baseUrl}${item.logos}`} style={styles.logo} />
            <StarOne style={styles.StarOne} />
            <Text style={styles.Totalseats}>
              <RedSemiSleeper style={styles.RedSemiSleeper} />
              {item.seat_availability?.total} Seats Left
            </Text>

            <Text style={styles.FemaleSeatsText}> {item?.seat_availability?.avlFemale} Female Seats</Text>

            <View style={styles.Durationcontainer}>
              <BusLeftLine style={styles.BusLeftLine} />
              <BusPlane style={styles.BusPlane} />
              <BusRightLine style={styles.BusRightLine} />
              <Text style={styles.DurationText}>{item.time_duration}</Text>
            </View>

            <Text style={styles.DepartureTime}>{formatTime(item?.departure_date_time)}</Text>
            <Text style={styles.ArrivalTime}>{formatTime(item?.arrival_date_time)}</Text>

            <Text style={styles.DepartureDate}> {formatDateAndMonth(item?.departure_date_time)}</Text>
            <Text style={styles.ArrivalDate}> {formatDateAndMonth(item?.arrival_date_time)}</Text>
            <FirstcardPrice style={styles.FirstcardPrice} />
            <DownBluerect style={styles.DownBlueRect} />


            <Pressable style={styles.PriceRow} onPress={() => navigation.navigate('JourneyDetails')}>
              <Text style={styles.StartingAt}>Starting @</Text>
              <Text style={styles.Price}>₹{item?.low_price.price}</Text>
              <Image
                source={require('../assets/Animation/arrow.gif')}
                style={[styles.RightArrowTwo, { transform: [{ rotate: '-90deg' }] }]}
                resizeMode="contain" />
            </Pressable>

            <BlueTri style={styles.BlueTri} />

            <ThirdGrayrect style={styles.ThirdGrayrect} />

            {/* <InbetweenLines style={styles.InbetweenLines} /> */}
            <ThirdAmenity style={styles.thirdAmenity} />
            <Line style={styles.Line} />
            <Text style={styles.BusType}>{item.bus_type}</Text>
            <Text style={styles.Price}>₹{item?.low_price.price}</Text>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 55,
    paddingVertical: 10,
    position: "absolute",
  },
  RowContainerDateBus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 10,
    position: "absolute",
    marginTop: 20,
  },
  Sourcetext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginLeft: -10,
  },
  Destinationtext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginLeft: 25,
  },
  PlacesArrow: {
    marginLeft: 50,
    marginTop: 10,
  },
  departureText: {
    fontSize: 16,
    color: '#FFFFFFB2',
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  Dressimage: {
    width: '95%',
    height: 200,
    // borderRadius: 40,
    marginLeft: -5,
    position: "absolute",
    marginTop: -60,
  },
  // cardRow: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 10,


  // },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
  },
  cardRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingTop: 2,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  iconStyle: {
    marginRight: 5,
  },
  staticCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingTop: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: 10,
    marginTop: 90,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1f487c',
    marginLeft: 5,
  },
  scrollView: {
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  seatContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    width: '95%',
    marginTop: 20,
  },
  Totalseats: {
    color: '#C62B2B',
    fontWeight: '700',
    backgroundColor: '#FFC1C1',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginLeft: 258,
    fontSize: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -14,

  },
  Bluerectangle: {
    marginLeft: -16,
    marginTop: -100,
    height: 170,
    width: 270,
  },
  Operatorname: {
    marginTop: -13,
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  BusOperatorText: {
    color: 'white',
    marginTop: -27,
    position: 'absolute',
    fontSize: 11,
  },
  StarOne: {
    marginLeft: 260,
    marginBottom: 5,
    marginTop: -75,
    width: 94,
    height: 55,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#FFFFFFB2',
    marginTop: 9,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 135,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: -10,
    marginTop: -20,
  },
  Durationcontainer: {
    position: 'relative',
    flexDirection: "row",
  },
  DurationText: {
    position: 'absolute',   // Use absolute positioning to place it above
    top: -38,               // Adjust the value to place it above the BusPlane
    left: '31%',            // Center the text horizontally if needed
    transform: [{ translateX: -25 }], // To truly center the text (50% width of the text)
    fontSize: 12,           // Adjust the font size as per your design
    fontWeight: 'bold',
    color: "white",
  },
  BusPlane: {
    width: 60,
    height: 70,
    marginTop: -60,
    marginLeft: 80,
  },
  BlueTri: {
    marginTop: -35,
    marginLeft: 252,
    position: "absolute",
  },
  BusRightLine: {
    //  position:"absolute",
    marginTop: -35,
    marginLeft: 2,
  },
  BusLeftLine: {
    marginTop: -35,
    marginLeft: 35,
    position: "absolute",
  },
  FemaleSeatsText: {
    color: "#1f487c",
    fontWeight: "700",
    marginLeft: 260,
    marginTop: 8,
    fontSize: 12,
  },
  RedSemiSleeper: {
    marginTop: 0,
  },
  ArrivalDate: {
    color: "#1f487c",
    fontWeight: "700",
    marginTop: 45,
    position: "absolute",
    marginLeft: -10,
  },
  DepartureDate: {
    color: "#1f487c",
    fontWeight: "700",
    position: "absolute",
    marginLeft: 180,
    marginTop: 45,
  },
  DepartureTime: {
    color: "#1f487c",
    fontWeight: "900",
    fontSize: 18,
    position: "absolute",
    marginTop: 65,
    marginLeft: -6,

  },
  ArrivalTime: {
    color: "#1f487c",
    fontWeight: "900",
    position: "absolute",
    fontSize: 18,
    marginLeft: 180,
    marginTop: 65,
  },
  FirstcardPrice: {
    marginLeft: -17,
    marginTop: -21,
  },
  DownBlueRect: {
    marginLeft: 29,
    marginTop: 107,
    zIndex: 0, // This will be the base layer
    position: 'absolute', // Make sure it's absolutely positioned
  },

  ThirdGrayrect: {
    marginLeft: 235,
    marginTop: 108,
    zIndex: 0, // This will be below the Price
    position: 'absolute', // Absolutely position it relative to the parent
    pointerEvents: 'none',//prevent this from blocking touch events
  },

  Price: {

    fontSize: 19,
    fontWeight: '400',
    color: 'white',
    marginLeft: 250,
    marginTop: 110,
    // zIndex: 1, // This should be above the gray rectangle
    position: 'absolute',  // Make sure it's absolutely positioned above the other elements
  },


  InbetweenLines: {
    marginTop: 160,
    position: "absolute",
    marginLeft: 280,
  },
  thirdAmenity: {
    position: "absolute",
    marginTop: 150,
    marginLeft: 50,
  },
  BackGroundArrow: {
    position: "relative",
  },
  logo: {
    width: 36, // Fixed width for the logo
    height: 36, // Fixed height for the logo
    // resizeMode: 'contain', // Ensures the image fits within the bounds without distortion
    marginBottom: 10,
    marginTop: -33,
    marginLeft: 200,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 2,
  },
  RightArrowTwo: {
    height: 70,
    width: 150,
    position: "absolute",
    marginLeft: 270,
    zIndex: 2,
    marginTop: -76,
  },
  StartingAt: {
    marginLeft: 105,
    position: "absolute",
    marginTop: -55,
    fontSize: 20,
    color: "white",
  },
  Line: {
    marginLeft: 252,
    position: "absolute",
    marginTop: 5,
  },
  BusType: {
    color: "#1f487C",
    position: "absolute",
    marginTop: 7,
    marginLeft: -3,
  },


  // scrollViewContent: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});

export default BusDetails;
