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
  ImageBackground
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
// import InbetweenLines from "../assets/Svg/InbetweenLines";
import ThirdAmenity from '../assets/Svg/ThirdAmenity';
import Dullbus from '../assets/Svg/Dullbus';
import BackGroundArrow from '../assets/Svg/BackGroundArrow';
import Line from '../assets/Svg/Line';
import MiddleWhiteRect from '../assets/Svg/MiddleWhiteRect';
import BrownPlaneBus from '../assets/Svg/BrownPlaneBus';
import BrownRightArow from '../assets/Svg/BrownRightArrow';
import BrownLeftArrow from '../assets/Svg/BrownLeftArrow';
import CenterWhite from '../assets/Svg/CenterWhite';
import SbltAmenities from '../assets/Svg/SbltAmenities';
import TopGrayTri from '../assets/Svg/TopGrayTri';
import MiddleDark from '../assets/Svg/MiddleDark';
import MiddleBottomTri from '../assets/Svg/MiddleBottomTri';
import ParveenDowntri from '../assets/Svg/ParveenDownTri';



const BusDetails = ({ route, navigation }) => {
  const { source_name, destination_name, departure_date_time } = route.params;
  const [busData, setBusData] = useState(null);
  const [loading, setLoading] = useState(true);
  const formattedDate = format(new Date(departure_date_time), 'EEE dd MMM');
  const [modalVisible, setModalVisible] = useState(false);
  const [logoUrl, setLogoUrl] = useState();
  const formatTime = (dateTime) => {
    if (!dateTime) return '';
    return format(new Date(dateTime), 'hh:mm ');
  };
  const formatDateAndMonth = (dateTime) => {
    if (!dateTime) return '';
    return format(new Date(dateTime), 'dd MMM');
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {busData?.map((item, index) => (
          <View key={item.id || index} style={[styles.seatContainer, item.bus_type_status === 'luxury' ? styles.luxuryCard : styles.regularCard]}>


            {item.bus_type_status === 'luxury' ? (
              <>

                <View style={styles.LuxuryContent}>
                  <MiddleWhiteRect style={styles.MiddleWhiteRect} />
                  <BrownPlaneBus style={styles.BrownPlaneBus} />
                  <BrownRightArow style={styles.BrownRightArow} />
                  <BrownLeftArrow style={styles.BrownLeftArrow} />
                  <CenterWhite style={styles.CenterWhite} />
                  <Text style={styles.LuxuryBusOperatorText}>Bus Operator</Text>
                  <SbltAmenities style={styles.LuxurySbltAmenities} />
                  <Text style={styles.LuxuryStartingAt}>Starting @</Text>
                  <Text style={styles.LuxuryOperatorname}>{item.operator_name}</Text>
                  <View style={styles.LuxuryDurationcontainer}>
                    <Text style={styles.LuxuryDurationText}>{item.time_duration}</Text>
                  </View>
                  <TopGrayTri style={styles.TopGrayTri} />
                  <Text style={styles.LuxuryBusType}>{item.bus_type}</Text>
                  <Text style={styles.LuxuryDepartureTime}>{formatTime(item?.departure_date_time)}</Text>
                  <Text style={styles.LuxuryArrivalTime}>{formatTime(item?.arrival_date_time)}</Text>
                  <Text style={styles.LuxuryDepartureDate}>{formatDateAndMonth(item?.departure_date_time)}</Text>
                  <Text style={styles.LuxuryArrivalDate}>{formatDateAndMonth(item?.arrival_date_time)}</Text>
                  <FirstcardPrice style={styles.LuxuryFirstcardPrice} />
                  <Text style={styles.LuxuryFemaleSeatsText}>{item?.seat_availability?.avlFemale} Female Seats</Text>
                  <Text style={styles.LuxuryTotalseats}>
                    <RedSemiSleeper style={styles.RedSemiSleeper} />
                    {item.seat_availability?.total} Seats Left
                  </Text>
                  <Line style={styles.LuxuryLine} />
                  <Pressable style={styles.LuxuryPriceRow} onPress={() => navigation.navigate('JourneyDetails')}>
                    <Text style={styles.LuxuryPrice}>₹{item?.low_price.price}</Text>
                    <Image
                      source={require('../assets/Animation/arrow.gif')}
                      style={[styles.LuxuryRightArrowTwo, { transform: [{ rotate: '-90deg' }] }]}
                      resizeMode="contain"
                    />
                  </Pressable>
                  <MiddleDark style={styles.MiddleDark} />
                  <StarOne style={styles.LuxuryStarOne} />
                  <Image source={`${baseUrl}${item.logos}`} style={styles.Luxurylogo} />
                  <MiddleBottomTri style={styles.MiddleBottomTri}/>

                </View>


                {/* Transparent Image (it stays behind everything) */}
                <View style={styles.TransparentCard}>
                  <Image source={require('../assets/Pictures/cc.png')} style={styles.Transparent} resizeMode="contain" />
                </View>

              </>
            ) : (
              <>
                {/* Regular Card Content */}
                <Bluerectangle style={styles.Bluerectangle} />
                <StarOne style={styles.StarOne} />
                <BusPlane style={styles.BusPlane} />
                <BusLeftLine style={styles.BusLeftLine} />
                <BusRightLine style={styles.BusRightLine} />
                <Text style={styles.BusOperatorText}>Bus Operator</Text>
                <DownBluerect style={styles.DownBlueRect} />
                <ThirdAmenity style={styles.thirdAmenity} />
                <Text style={styles.StartingAt}>Starting @</Text>
                <Text style={styles.Operatorname}>{item.operator_name}</Text>
                <View style={styles.Durationcontainer}>
                  <Text style={styles.DurationText}>{item.time_duration}</Text>
                </View>
                <BlueTri style={styles.BlueTri} />
                <Text style={styles.BusType}>{item.bus_type}</Text>
                <Text style={styles.DepartureTime}>{formatTime(item?.departure_date_time)}</Text>
                <Text style={styles.ArrivalTime}>{formatTime(item?.arrival_date_time)}</Text>
                <Text style={styles.DepartureDate}>{formatDateAndMonth(item?.departure_date_time)}</Text>
                <Text style={styles.ArrivalDate}>{formatDateAndMonth(item?.arrival_date_time)}</Text>
                <FirstcardPrice style={styles.FirstcardPrice} />
                <Text style={styles.FemaleSeatsText}>{item?.seat_availability?.avlFemale} Female Seats</Text>
                <Text style={styles.Totalseats}>
                  <RedSemiSleeper style={styles.RedSemiSleeper} />
                  {item.seat_availability?.total} Seats Left
                </Text>
                <Line style={styles.Line} />
                <Pressable style={styles.PriceRow} onPress={() => navigation.navigate('JourneyDetails')}>
                  <Text style={styles.Price}>₹{item?.low_price.price}</Text>
                  <Image
                    source={require('../assets/Animation/arrow.gif')}
                    style={[styles.RightArrowTwo, { transform: [{ rotate: '-90deg' }] }]}
                    resizeMode="contain"
                  />
                </Pressable>
                <Image source={`${baseUrl}${item.logos}`} style={styles.logo} />
                <ThirdGrayrect style={styles.ThirdGrayrect} />
                <ParveenDowntri style={styles.ParveenDowntri}/>
              </>
            )}

            {/* Contents above the transparent card */}
            <View style={styles.ContentAboveTransparentCard}>

              {/* Price Row */}





            </View>
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
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    width: '95%',
    marginTop: 20,
  },

  luxuryCard: {
    backgroundColor: '#ffdb58',
    zIndex: 0,
    position: 'relative',
    padding: 10,
  },
  LuxuryContent: {
    zIndex: 11, // This ensures the content appears above the transparent card
    position: 'relative', // Keeps the content in the normal flow above the transparent card
    paddingTop: 10,
  },
  regularCard: {
    backgroundColor: 'white', // White background for regular buses
  },
  LuxuryTotalseats: {
    color: '#C62B2B',
    fontWeight: '700',
    backgroundColor: '#FFC1C1',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginLeft: 265,
    fontSize: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    position: "absolute",
  },
  Totalseats: {
    color: '#C62B2B',
    fontWeight: '700',
    backgroundColor: '#FFC1C1',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginLeft: 268,
    fontSize: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    position: "absolute",

  },
  Bluerectangle: {
    marginLeft: -16,
    marginTop: -100,
    height: 170,
    width: 270,
  },
  LuxuryOperatorname: {
    position: 'absolute',
    color: '#393939',
    fontWeight: '900',
    fontSize: 12,
    marginTop: -17,
    zIndex: 8,
  },
  Operatorname: {
    marginTop: -13,
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  LuxuryBusOperatorText: {
    color: "#393939",
    position: "absolute",
    marginTop: -33,
    fontSize: 11,
    fontWeight: "400",
    zIndex: 8,

  },
  BusOperatorText: {
    color: 'white',
    marginTop: -27,
    position: 'absolute',
    fontSize: 11,
    fontWeight: "400",
  },
  LuxuryStarOne: {
    width: 94,
    height: 55,
    position: "absolute",
    marginLeft: 270,
    marginTop: -20,
  },
  StarOne: {
    marginLeft: 270,
    marginBottom: 5,
    marginTop: -80,
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
  LuxuryDurationcontainer: {
    position: 'relative',
    flexDirection: "row",
    marginTop: 85,
    marginLeft: 67,
    zIndex: 11,
  },
  LuxuryDurationText: {
    position: 'absolute',   // Use absolute positioning to place it above
    top: -33,               // Adjust the value to place it above the BusPlane
    left: 73,            // Center the text horizontally if needed
    transform: [{ translateX: -25 }], // To truly center the text (50% width of the text)
    fontSize: 12,           // Adjust the font size as per your design
    fontWeight: 'bold',
    color: "white",
    zIndex: 11,
  },
  DurationText: {
    position: 'absolute',   // Use absolute positioning to place it above
    top: -47,               // Adjust the value to place it above the BusPlane
    left: '31%',            // Center the text horizontally if needed
    transform: [{ translateX: -25 }], // To truly center the text (50% width of the text)
    fontSize: 12,           // Adjust the font size as per your design
    fontWeight: 'bold',
    color: "white",
  },
  BusPlane: {
    width: 60,
    height: 70,
    marginTop: -20,
    marginLeft: 80,
  },
  BlueTri: {
    marginTop: -35,
    marginLeft: 252,
    position: "absolute",
  },
  BusRightLine: {
    //  position:"absolute",
    marginTop: 56,
    marginLeft: 140,
    position: "absolute",
  },
  BusLeftLine: {
    marginTop: 57,
    marginLeft: 48,
    position: "absolute",
  },
  LuxuryFemaleSeatsText: {
    fontWeight: "700",
    marginLeft: 270,
    marginTop: 68,
    fontSize: 12,
    color: "#393939",
    position: "absolute",
  },
  FemaleSeatsText: {
    color: "#1f487c",
    fontWeight: "700",
    marginLeft: 270,
    marginTop: 75,
    fontSize: 12,
    position: "absolute",
  },

  RedSemiSleeper: {
    marginTop: -10,
  },
  ArrivalDate: {
    color: "#1f487c",
    fontWeight: "700",
    marginTop: 45,
    position: "absolute",
    marginLeft: 180,
  },
  LuxuryArrivalDate: {
    fontWeight: "700",
    marginTop: 45,
    position: "absolute",
    color: "#393939",
    marginLeft: 215,
  },
  LuxuryDepartureDate: {
    color: "#393939",
    fontWeight: "700",
    position: "absolute",
    marginLeft: 10,
    marginTop: 45,
  },
  DepartureDate: {
    color: "#1f487c",
    fontWeight: "700",
    position: "absolute",
    marginLeft: -6,
    marginTop: 45,
  },
  LuxuryDepartureTime: {
    fontWeight: "900",
    fontSize: 18,
    position: "absolute",
    color: "#393939",
    marginTop: 60,
    marginLeft: 10,
  },
  DepartureTime: {
    color: "#1f487c",
    fontWeight: "900",
    fontSize: 18,
    position: "absolute",
    marginTop: 65,
    marginLeft: -7,

  },
  LuxuryArrivalTime: {
    fontWeight: "900",
    position: "absolute",
    fontSize: 18,
    color: "#393939",
    marginLeft: 210,
    marginTop: 60,
  },
  ArrivalTime: {
    color: "#1f487c",
    fontWeight: "900",
    position: "absolute",
    fontSize: 18,
    marginLeft: 180,
    marginTop: 65,
  },
  LuxuryFirstcardPrice: {
    marginLeft: -10,
    marginTop: -10,
  },
  FirstcardPrice: {
    marginLeft: -19,
    marginTop: -19,
  },
  DownBlueRect: {
    marginLeft: 29,
    marginTop:41,
    zIndex: 0,
    position: 'absolute',
    height:170,
    width:360,
  },

  ThirdGrayrect: {
    marginLeft: 240,
    marginTop:40,
     zIndex: 1,
     position: 'absolute', // this ensures the gray rectangle stays in place
    pointerEvents: 'none',
    width:150,
    height:170,
  },
  LuxuryPrice: {
    fontSize: 19,
    fontWeight: '400',
    color: 'white',
    marginLeft: 269,
    position: 'absolute',
    marginTop: 68,
  },

  Price: {
    fontSize: 19,
    fontWeight: '400',
    color: 'white',
    marginLeft: 255,
    marginTop: -55,
    zIndex: 12, // This should be above the gray rectangle
    position: 'absolute',  // Make sure it's absolutely positioned above the other elements
  },



  InbetweenLines: {
    marginTop: 160,
    position: "absolute",
    marginLeft: 280,
  },
  thirdAmenity: {
    position: "absolute",
    marginTop: 140,
    marginLeft: 50,
    zIndex: 2,
  },
  BackGroundArrow: {
    position: "relative",
  },
  Luxurylogo: {
    width: 37,
    height: 37,
    marginBottom: 10,
    position: "absolute",
    top: -28,
    left: 210,
    zIndex: 10,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 25,
  },

  logo: {
    width: 37,
    height: 37,
    marginBottom: 10,
    position: "absolute",
    top: -20,
    left: 220,
    zIndex: 10,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 25,
  },
  LuxuryRightArrowTwo: {
    height: 70,
    width: 150,
    position: "absolute",
    marginLeft: 288,
    marginTop: 47,

  },
  RightArrowTwo: {
    height: 70,
    width: 150,
    position: "absolute",
    marginLeft: 280,
    marginTop: -76, // adjust this as needed
    zIndex: 5,
  },
  StartingAt: {
    marginLeft: 140,
    position: "absolute",
    marginTop: 109,
    fontSize: 20,
    color: "white",
  },
  LuxuryStartingAt: {
    marginTop: 100,
    marginLeft: 80,
    position: "absolute",
    zIndex: 12,
    fontSize: 20,
  },
  LuxuryLine: {
    marginLeft: 260,
    position: "absolute",
    marginTop: 5,
  },
  Line: {
    marginLeft: 258,
    position: "absolute",
    marginTop: 5,
  },
  LuxuryBusType: {
    color: "#393939",
    position: "absolute",
  },
  BusType: {
    color: "#1f487C",
    position: "absolute",
    marginTop: 7,
    marginLeft: -3,
  },
  MiddleWhiteRect: {
    marginTop: -105,
    position: "absolute",
    marginLeft: -10,
    height: 170,
    width: 270,
    zIndex: 7,
  },
  BrownPlaneBus: {
    marginTop: 30,
    marginLeft: 110,
    position: "absolute",
    width: 60,
    height: 70,
    zIndex: 7,

  },
  CenterWhite: {
    marginTop: 100,
    marginLeft: 40,
    position: "absolute",
    zIndex: 7,
  },
  LuxurySbltAmenities: {
    marginTop: 135,
    position: "absolute",
    marginLeft: 55,
  },
  BrownLeftArrow: {
    marginLeft: 80,
    marginTop: 55,
    position: "absolute",
  },
  BrownRightArow: {
    marginLeft: 172,
    marginTop: 55,
    position: "absolute",


  },
  TransparentCard: {
    zIndex: 0, // This stays in the background
    position: 'absolute', // Position it absolutely, so it's placed behind other content
    top: -150,
    left: 0,
    width: '100%',
    height: '100%',

  },
  Transparent: {
    width: 392,
    height: 498,
    position: 'absolute',
    left: 0,

  },

  ContentAboveTransparentCard: {
    zIndex: 11,
    position: 'relative',
    paddingTop: 10,
  },
  TopGrayTri: {
    marginTop: -38,
    position: 'absolute',
    zIndex: 11,
    marginLeft: 260,
  },
  LuxuryPriceRow: {
    zIndex: 10,
    marginTop: 35,
    position: "absolute",
  },
  PriceRow:{
    zIndex:2,
  },
  MiddleDark: {
    position: "absolute",
    marginTop: 100,
    zIndex: 9,
    marginLeft: 251,
    height:35,
    width:150,
  },
  MiddleBottomTri:{
    position:"absolute",
    marginLeft:370,
    marginTop:132,
    width:30,
    height:30,
  },
  ParveenDowntri:{
    position:"absolute",
    marginLeft:370,
    marginTop:144,
    width:20,
    height:20,
  },



  // scrollViewContent: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});

export default BusDetails;
