import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image, ScrollView, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LocationModal from './LocationModal';
import FromBus from '../assets/Svg/FromBus';
import ToBus from '../assets/Svg/ToBus';
import Calender from '../assets/Svg/Calender';
import UpDown from '../assets/Svg/UpDown';
import PinkWomen from '../assets/Svg/PinkWomen';  // Assuming this is an SVG component
import GrayWomen from '../assets/Svg/GrayWomen'; // Assuming this is an SVG component
import Women from '../assets/Svg/Woman';
import HomebackImg from '../assets/Svg/HomeBackImg';
import LocationIcon from "../assets/Svg/LocationIcon";
import DistanceBookLine from "../assets/Svg/DistanceBookLine";
import HomeBus from "../assets/Svg/HomeBus";


const { width: screenWidth } = Dimensions.get("window"); // Get the screen width
const Home = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(''); // State to store selected date
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // State for calendar visibility
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);
  const [formError, setFormError] = useState(''); // State to handle form validation error
  const [isActive, setIsActive] = useState(false);
  const [toggleBackgroundColor, setToggleBackgroundColor] = useState('#D0D5DD');
  const [circleTranslate] = useState(new Animated.Value(0));
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];



  // const { width, height } = Dimensions.get('window');
  // const { width: screenWidth } = Dimensions.get("window");


  const handleToggle = () => {
    setIsActive(!isActive);

    // Update background color
    setToggleBackgroundColor(isActive ? '#D0D5DD' : '#FF409C'); // Change color based on state

    // Animate the toggle circle
    Animated.spring(circleTranslate, {
      toValue: isActive ? 0 : 30, // Move circle to the opposite side
      useNativeDriver: true,
    }).start();
  };



  // const handleToggle = () => {
  //   setIsActive(!isActive);
  // };

  // const toggleBackgroundColor = isActive ? 'green' : 'gray';



  const handleDayPress = (day) => {
    const formattedDate = new Date(day.dateString).toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
    setSelectedDate(formattedDate); // Set the formatted date
    setDepartureDate(day.dateString); // Set the raw date
    setIsCalendarVisible(false); // Close calendar after date is selected
  };

  const handleToday = () => {
    const today = new Date().toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
    setSelectedDate(today); // Set today's date
    setDepartureDate(new Date().toISOString().split('T')[0]); // Set raw date in YYYY-MM-DD format
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Add one day to today's date
    const formattedTomorrow = tomorrow.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
    setSelectedDate(formattedTomorrow); // Set tomorrow's date
    setDepartureDate(tomorrow.toISOString().split('T')[0]); // Set raw date in YYYY-MM-DD format
  };

  const handleNavigate = () => {
    if (from && to && departureDate) {
      setFormError(''); // Clear error if all fields are filled
      navigation.navigate('BusDetails', {
        source_name: from,
        destination_name: to,
        departure_date_time: departureDate,
      });
    } else {
      setFormError('Please fill in all the details.'); // Show error if fields are not filled
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Tickets</Text>

      <View style={styles.LocationCard}>
        {/* From Section */}
        <Text style={styles.FromText}>From</Text>
        <View style={styles.inputContainer}>
          <FromBus width={24} height={24} style={styles.FromIcon} />
          <TouchableOpacity onPress={() => setShowFromModal(true)}>
            <TextInput
              style={styles.input}
              value={from}
              editable={false} // Disable manual editing
            />
          </TouchableOpacity>
          <View style={styles.underline} />
        </View>

        {/* To Section */}
        <Text style={styles.ToText}>To</Text>
        <View style={styles.inputContainer}>
          <ToBus width={24} height={24} style={styles.ToIcon} />
          <TouchableOpacity onPress={() => setShowToModal(true)}>
            <TextInput
              style={styles.input}
              value={to}
              editable={false} // Disable manual editing
            />
          </TouchableOpacity>
          <View style={styles.underline} />
        </View>
        <View style={styles.UpDownContainer}>
          <UpDown style={styles.UpDown} />
        </View>

        {/* Date Selection */}
        <View style={styles.Row}>
          <TouchableOpacity onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
            <Calender style={styles.Calender} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: -5, alignSelf: 'flex-end', marginTop: 50, }}>
          <TouchableOpacity style={[styles.TodayButton, { marginRight: 0 }]} onPress={handleToday}>
            <Text style={styles.Today}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TomorrowButton, { marginLeft: 5 }]} onPress={handleTomorrow}>
            <Text style={styles.Tomorrow}>Tomorrow</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.JourneyText}>Date of Journey</Text>






        {/* Display Selected Date Inside LocationCard */}
        {selectedDate && <Text style={styles.selectedDateText}>{selectedDate}</Text>}
      </View>

      {/* Show the calendar when visible */}
      {isCalendarVisible && (
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [departureDate]: { selected: true, selectedColor: 'blue' },
            }}
            style={styles.calendar}
          />
        </View>
      )}

      {/* Form Error Message */}
      {formError && <Text style={styles.errorText}>{formError}</Text>}

      <View style={[styles.WomenCard, isCalendarVisible && styles.hideWomenCard]}>


        <Women style={styles.WomenImage} />

        <Text style={styles.BookingText}>Booking for WOMEN</Text>

        <TouchableOpacity onPress={handleToggle}>
          <Animated.View
            style={[
              styles.toggleBar,
              { backgroundColor: toggleBackgroundColor }, // Apply background color
            ]}
          >
            {isActive ? (
              <Text style={[styles.toggleText, { left: 10, color: 'white' }]}>Yes</Text>
            ) : (
              <Text style={[styles.toggleText, { right: 10, color: '#667085' }]}>No</Text>
            )}

            <Animated.View
              style={[
                styles.toggleCircle,
                {
                  transform: [{ translateX: circleTranslate }],
                },
              ]}
            >
              {isActive ? (
                <PinkWomen style={styles.icon} />
              ) : (
                <GrayWomen style={styles.icon} />
              )}
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>

      </View>

      {/* Search Button */}
      <View style={[styles.SearchBuses, isCalendarVisible && styles.hideSearchBuses]}>
        <TouchableOpacity onPress={handleNavigate} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="search" size={20} color="#fff" />
          <Text style={styles.SearchBusesText}>Search buses</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.scrollableWrapper, isCalendarVisible && styles.hidescrollableWrapper]}>
        <ScrollView contentContainerStyle={styles.scrollableContainer}>
          {/* Advertisement Section */}
          <View
            style={[
              styles.advertisement,
              isCalendarVisible && styles.hideAdvertisementImage,
            ]}
          >
            <Image
              source={require("../assets/JockeyAdd.gif")}
              style={[styles.AdvertisementImage, isCalendarVisible && styles.hideAdvertisementImage]}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.RecentlySearched}>Recently Searched</Text>
          <View style={styles.TravelCardContainer}>
            <View style={styles.TravelCardOne}>
              <HomebackImg style={styles.TravelOneBack} />
              <Image
                source={require("../assets/Pictures/ChennaiImage.png")}
                style={styles.ChennaiImg}
                resizeMode="contain"
              />
              <LocationIcon style={styles.LocationOne} />
              <LocationIcon style={styles.LocationTwo} />
              <DistanceBookLine style={styles.DistanceBookLineOne} />
              <HomeBus style={styles.HomeBusOne}/>
              <Text style={styles.BookText}>Book</Text>

            </View>
            <View style={styles.TravelCardTwo}>
              <HomebackImg style={styles.TravelTwoBack} />
              <Image
                source={require("../assets/Pictures/HyderabadImage.png")}
                style={styles.HydImag}
                resizeMode="contain"
              />

              <LocationIcon style={styles.LocationThree}/>
              <LocationIcon style={styles.LocationFour}/>
              <DistanceBookLine style={styles.DistanceBookLineTwo}/>
              <HomeBus style={styles.HomeBusTwo}/>
              <Text style={styles.BookText}>Book</Text>

            </View>
            <View style={styles.TravelCardThree}>
              <HomebackImg style={styles.TravelThreeBack} />
              <Image
                source={require("../assets/Pictures/PuducherryImage.png")}
                style={styles.PuducherryImg}
                resizeMode="contain"
              />
              <LocationIcon style={styles.LocationFive} />
              <LocationIcon style={styles.LocationSix}/>
              <DistanceBookLine style={styles.DistanceBookLineThree}/>
              <HomeBus style={styles.HomeBusThree}/>
              <Text style={styles.BookText}>Book</Text>

            </View>

          </View>


        </ScrollView>
      </View>



      {/* Location Modals */}
      <LocationModal
        visible={showFromModal}
        onSelectLocation={(location) => {
          setFrom(location);
          setShowFromModal(false);
        }}
        title="Recent Searches"

        
      />
      <LocationModal
        visible={showToModal}
        onSelectLocation={(location) => {
          setTo(location);
          setShowToModal(false);
        }}
        title="Select Destination"
      />

      
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e5fff1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f487c',
    // textAlign: 'center',
    marginBottom: 16,
    marginLeft: 20,
  },
  LocationCard: {
    width: '95%',
    borderRadius: 8,
    borderColor: '#1F487C',
    padding: 16,
    alignSelf: 'center',
    marginBottom: 16,
    borderTopWidth:0.5,
    borderBottomWidth:3,
    borderLeftWidth:0.5,
    borderRightWidth:3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  FromIcon: {
    marginRight: 10,
    marginTop: -20,
  },
  ToIcon: {
    marginRight: 10,
    marginTop: -20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 23,
    color: '#1f487c',
    backgroundColor: 'transparent',
  },
  underline: {
    height: 1,
    backgroundColor: '#1f487c',
    width: '95%',
    marginLeft: 20,
    marginTop: 35,
    position: "absolute",
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  ButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
    marginLeft: 50,
  },
  Today: {
    color: '#1f487c',
    fontSize: 17,
    fontWeight: "700",
  },
  Tomorrow: {
    color: '#1f487c',
    fontSize: 17,
    fontWeight: "700",
  },
  calendarContainer: {
    marginTop: 16,
  },
  calendar: {
    borderRadius: 8,
    backgroundColor: '#fff',

  },
  selectedDateText: {
    // textAlign: 'center',
    color: '#1f487c',
    fontSize: 16,
    fontWeight: "700",
    marginTop: -30,
    marginLeft: 40,
  },

  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: -12,
    fontSize: 16,
    fontWeight: "500",
  },
  SearchBuses: {
    backgroundColor: '#1F487C',
    paddingVertical: 12,
    paddingHorizontal: 122,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    flexDirection: "row",
    marginTop: 380,
    marginLeft: 10,
  },
  SearchBusesText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "700",
  },
  FromText: {
    color: "#778899",
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 30,
  },
  ToText: {
    color: "#778899",
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 30,
  },
  UpDown: {
    backgroundColor: "#1F487C",
    borderColor: "#1F487C",
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
    marginTop: -8,
    position: "absolute",
  },
  UpDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginTop: -100,
    marginLeft: 310,
  },
  hideSearchBuses: {
    zIndex: -1,
  },
  // Button: {
  //   backgroundColor: "#67DCFF",
  //   paddingVertical: 10,
  //   paddingHorizontal: 5,
  //   borderRadius: 15,
  //   marginTop: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: 20, // Add spacing between each button


  // },
  TomorrowButton: {
    backgroundColor: "#67DCFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  TodayButton: {
    backgroundColor: "#67DCFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  JourneyText: {
    color: "#7393B3",
    fontSize: 12,
    marginTop: 130,
    marginLeft: 40,
    position: "absolute",
  },
  Calender: {
    marginTop: 50,
    position: "absolute",
  },
  WomenCard: {
    width: '88%',
    height: 70,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#1F487C",
    position: "absolute",
    marginTop: 300,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  toggleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    height: 40,
    borderRadius: 20,
    padding: 5,
    marginLeft: 250,
  },
  toggleText: {
    fontSize: 16,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  toggleCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    fontSize: 20,
    color: '#4CAF50',
  },
  inactiveText: {
    fontSize: 20,
    color: '#808080',
  },
  icon: {
    width: 20,
    height: 20, // Adjust icon size if needed
  },
  WomenImage: {
    position: "absolute",
    zIndex: 2,
    left: 10, // Negative value moves the image to the left
    marginTop: -5,
  },
  hideWomenCard: {
    zIndex: -1,
  },
  BookingText: {
    color: "#1F487C",
    fontSize: 17,
    fontWeight: "700",
    marginTop: -5,
    marginLeft: -40,
    position: "absolute",
  },
  hideAdvertisementImage: {
    zIndex: -1,
  },
  scrollableWrapper: {
    // width: screenWidth, // Use the screen width dynamically
    height: 370,
    alignSelf: "center", // Centers the container
    overflow: "hidden", // Prevents overflow issues
    paddingHorizontal: 10, // Adds spacing inside if needed
    marginLeft: -95,
    width: 600,
    marginTop: 150,
    zIndex: -1,
  },
  hidescrollableWrapper: {
    zIndex: -1,
  },
  scrollableContainer: {
    paddingBottom: 20,

  },
  advertisement: {
    position: "relative",
    top: 380,
    left: 140,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  hideAdvertisementImage: {
    zIndex: -1,
  },
  AdvertisementImage: {
    height: 250,
    width: 350,
    borderRadius: 10,
    position: 'absolute',
    top: -370,
    left: 10,
    overflow: 'hidden',
    width: screenWidth - 50,
  },
  TravelCardContainer: {
    justifyContent: "center", // Vertically center the card
    alignItems: "center",     // Horizontally center the card
    flex: 1,                  // Take up full screen height for centering
  },
  TravelCardOne: {
    height: 80,
    width: "67%",             // Adjust width as per your need
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1F487C",
    borderRadius: 12,
    flexDirection: "row",       // Optional: Add rounded corners
    marginLeft: 92,
    marginTop: 320,
  },
  TravelCardTwo: {
    height: 80,
    width: "67%",             // Adjust width as per your need
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1F487C",
    borderRadius: 12,
    flexDirection: "row",
    marginLeft: 92,
    marginTop: 10,
  },
  TravelCardThree: {
    height: 80,
    width: "67%",             // Adjust width as per your need
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1F487C",
    borderRadius: 12,
    flexDirection: "row",
    marginLeft: 92,
    marginTop: 10,
  },
  RecentlySearched: {
    color: "#1F487C",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 150,
    marginTop: 270,
    position: "absolute",


  },
  TravelOneBack: {
    marginTop: 10,
    marginLeft: 35,
  },
  TravelTwoBack: {
    marginTop: 10,
    marginLeft: 35,
  },
  TravelThreeBack: {
    marginTop: 10,
    marginLeft: 35,
  },
  ChennaiImg: {
    height: 65,
    width: 80,
    position: "absolute",
    marginTop: 5,
  },
  HydImag: {
    height: 65,
    width: 80,
    position: "absolute",
    marginTop: 5,
  },
  PuducherryImg: {
    height: 65,
    width: 80,
    position: "absolute",
    marginTop: 5,
  },
  LocationOne: {
    height: 15,
    width: 15,
    marginLeft: 95,
    position: "absolute",
    marginTop: 10,
  },
  LocationTwo: {
    height: 15,
    width: 15,
    marginLeft: 95,
    marginTop: 50,
    position: "absolute",

  },
  LocationThree:{
    height: 15,
    width: 15,
    marginLeft: 95,
    position: "absolute",
    marginTop:10,
  },
  LocationFour:{
    height: 15,
    width: 15,
    marginLeft: 95,
    position: "absolute",
    marginTop:50,
  },
  LocationFive:{
    height: 15,
    width:15,
    marginLeft:95,
    position:"absolute",
    marginTop:10,

  },
  LocationSix:{
    height:15,
    width:15,
    marginLeft:95,
    position:"absolute",
    marginTop:50,

  },
  DistanceBookLineOne: {
    marginTop: 12,
    height: 50,
    width: "50%",
    marginLeft: -280,
  },  
  DistanceBookLineTwo:{
    marginTop: 12,
    height:50,
    width:"50%",
    marginLeft:-280,

  },
  DistanceBookLineThree:{
    height:50,
    width:"50%",
    marginTop:12,
    marginLeft:-280,
  },
  HomeBusOne:{
    height:30,
    width:80,
    marginTop:25,
    marginLeft:-100,

  },
  HomeBusTwo:{
    marginTop:25,
    marginLeft:-100,
    height:30,
    width:80,
  },
  HomeBusThree:{
    height:30,
    width:80,
    marginLeft:-100,
    marginTop:25,
  },
  BookText: {
    color: "white",
    backgroundColor: "#1F487C",
    paddingVertical: 8, // Increase padding for better coverage
    paddingHorizontal: 17,
    borderRadius: 8, // Add rounded corners for a neat look
    alignSelf: "flex-start", // Ensures it wraps only around the text
    overflow: "hidden", // Ensures text stays inside the background
    fontSize:16,
    marginTop:20,
    marginLeft:25,
  },
  });

export default Home;
