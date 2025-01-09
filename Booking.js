import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Booking = ({ navigation }) => {
  const [selectedSection, setSelectedSection] = useState('Upcoming'); // State to track selected section

  useEffect(() => {
    // Hide the header when the component mounts
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const renderContent = () => {
    switch (selectedSection) {
      case 'Upcoming':
        return (
          <View style={styles.sectionContainer}>
            {/* Container to hold both the Rect image and the small bus image */}
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
                 <View style={styles.number} >
                <Text style={styles.tNumber}>27</Text>
                 </View>
                 <View style={styles.day} >
                <Text style={styles.daytext}>Monday</Text>
                 </View>
                 <View style={styles.confirm} >
                <Text style={styles.confirmText}>CONFIRM</Text>
                 </View>
                 <Image
                 source={require('../assets/Line 68.png')}
                 style={styles.line}
                 resizeMode="contain"
                 />
            </View>
            
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
                 <View style={styles.number} >
                <Text style={styles.tNumber}>27</Text>
                 </View>
                 <View style={styles.day} >
                <Text style={styles.daytext}>Monday</Text>
                 </View>
                 <View style={styles.confirm} >
                <Text style={styles.confirmText}>CONFIRM</Text>
                 </View>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
                 <View style={styles.number} >
                <Text style={styles.tNumber}>27</Text>
                 </View>
                 <View style={styles.day} >
                <Text style={styles.daytext}>Monday</Text>
                 </View>
                     
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
                 <View style={styles.number} >
                <Text style={styles.tNumber}>27</Text>
                 </View>
                 <View style={styles.day} >
                <Text style={styles.daytext}>Monday</Text>
                 </View>
                
            </View>
            <Text style={styles.sectionContent}>Upcoming Booking Content</Text>
          </View>
        );
      case 'Completed':
        return (
          <View style={styles.sectionContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Completed' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
                  <View style={styles.confirm} >
                <Text style={styles.confirmText}>CONFIRM</Text>
                 </View>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Completed' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <Text style={styles.sectionContent}>Completed Booking Content</Text>
          </View>
        );
      case 'Cancelled':
        return (
          <View style={styles.sectionContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Cancelled' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Cancelled' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Rect.png')} // Replace with your 'Upcoming' image
                style={styles.sectionImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/smallbus.png')} // Small bus image inside the Rect image
                style={styles.smallBusImage}
                resizeMode="contain"
              />
              <Image
                 source={require('../assets/toybus.png')}
                 style={styles.toybus}
                 resizeMode="contain"
                 />
            </View>
            <Text style={styles.sectionContent}>Cancelled Booking Content</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.headerText}>Booking History</Text>
        <Image
          source={require('../assets/Header.png')} // Replace with your header image
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../assets/back.png')} // Replace with your bottom background image
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <View style={styles.navButtonContainer}>
          <TouchableOpacity onPress={() => setSelectedSection('Upcoming')}>
            <View style={styles.navButton}>
              <Text
                style={[
                  styles.navButtonText,
                  selectedSection === 'Upcoming' && styles.boldText, // Bold if selected
                ]}
              >
                Upcoming
              </Text>
              {selectedSection === 'Upcoming' && (
                <View style={styles.customUnderline} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedSection('Completed')}>
            <View style={styles.navButton}>
              <Text
                style={[
                  styles.navButtonText,
                  selectedSection === 'Completed' && styles.boldText, // Bold if selected
                ]}
              >
                Completed
              </Text>
              {selectedSection === 'Completed' && (
                <View style={styles.customUnderline} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedSection('Cancelled')}>
            <View style={styles.navButton}>
              <Text
                style={[
                  styles.navButtonText,
                  selectedSection === 'Cancelled' && styles.boldText, // Bold if selected
                ]}
              >
                Cancelled
              </Text>
              {selectedSection === 'Cancelled' && (
                <View style={styles.customUnderline} />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* Scrollable Content for the selected section */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.contentContainer}>{renderContent()}</View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.2,
    backgroundColor: '#1f487c',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  topImage: {
    position: 'absolute',
    width: '200%',
    height: '100%',
    opacity: 0.3,
    transform: [{ scale: 0.5 }],
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#e5fff1',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bottomImage: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    opacity: 0.1,
    transform: [{ scale: 0.5 }],
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 18,
    color: '#1f487c',
    fontWeight: 'bold',
    marginHorizontal: 10,
    paddingVertical: 10,
    marginTop: -20,
  },
  boldText: {
    fontWeight: 'bold', // Bold text for the selected section
  },
  customUnderline: {
    height: 4, // Thickness of the underline
    backgroundColor: '#1f487c', // Color of the underline
    width: '100%', // Full width underline
    marginTop: 5, // Space between the text and the underline
  },
  scrollContainer: {
    flex: 1, // Allow scrollable content to take up remaining space
    width: '100%',
  },
  contentContainer: {
    marginTop: 20,
  },
  sectionContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageWrapper: {
    width: 390, // Container width to match the Rect image
    height: 150, // Container height to match the Rect image
    position: 'relative', // To allow absolute positioning of the small bus
    marginBottom: 10,
  },
  sectionImage: {
    width: '100%',
    height: '100%', // Make sure it fills the container
  },
  smallBusImage: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '40%', // Adjust the position of the bus image as needed
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    marginLeft:-60,
  },
  sectionContent: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  toybus: {
    width:30,
    height:30,
    position:"absolute",
    top:'10%',
    left:'23%',


  },
  tNumber:{
    color: '#1F487C', // changed to match the 'Refer and Earn' color
    fontWeight:"bold",
    fontSize: 16,
    marginBottom: 20,
    marginTop:-95,
    marginLeft:95,
  },
  daytext:{
    color: '#1F487C', // changed to match the 'Refer and Earn' color
    fontWeight:"bold",
    fontSize: 16,
    marginBottom: 20,
    marginTop:-80,
    marginLeft:75,
 
  },
  confirmText:{
    color: '#2CA103', // changed to match the 'Refer and Earn' color
    fontWeight:"bold",
    fontSize: 15,
    marginBottom: 20,
    marginTop:-130,
    marginLeft:300,
  },
  line:{
       marginTop:-50,
       

  },
  
});

export default Booking;
