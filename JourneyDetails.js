import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import BackArrow from '../assets/Svg/Backarrow';
import BackGroundArrow from '../assets/Svg/BackGroundArrow';
import JourneyOrdCard from '../assets/Svg/JourneyOrdCard';
import JourneyTopBlue from '../assets/Svg/JourneyTopBlue';
import StarOne from '../assets/Svg/StarOne';
import Line from '../assets/Svg/Line';
import VrlTimeBus from '../assets/Svg/VrlTimeBus';
import SeatOne from '../assets/Svg/SeatOne';
import JourneyMiddleBlue from '../assets/Svg/JourneyMiddleBlue';
import BlueTri from '../assets/Svg/BlueTri';
import OrdJourneyInnerCard from '../assets/Svg/OrdJourneyInnerCard';
import MiddleBottomTri from '../assets/Svg/MiddleBottomTri';
import InfoLogo from '../assets/Svg/InfoLogo';
import OrdBoardingPoint from '../assets/Svg/OrdBoardingPoint';
import OrdDropPoint from '../assets/Svg/OrdDropPoint';
import DemoSeat from '../assets/Svg/DemoSeat';
import LocationPic from '../assets/Svg/LocationPic';
import OrdBottomcard from '../assets/Svg/OrdBottomCard';
import OrdJourneyContinue from '../assets/Svg/OrdJourneyContinue';
import BottomcardLine from '../assets/Svg/BottomcardLine';
import LowerBerth from '../assets/Svg/LowerBerth';
import UpperBerth from '../assets/Svg/UpperBerth';
import Steering from '../assets/Svg/Steering';
import LowerLeftLight from '../assets/Svg/LowerLeftLight';
import LowerRightLight from '../assets/Svg/LowerRightLight';
import UpperLeftLight from '../assets/Svg/UpperLeftLight';
import UpperRightLight from '../assets/Svg/UpperRightLight';
import LowerBerthDoor from '../assets/Svg/LowerBerthDoor';
import Aone from '../assets/Svg/AOne';
import ATwo from '../assets/Svg/ATwo';
import AThree from '../assets/Svg/AThree';
import AFour from '../assets/Svg/AFour';
import AFive from '../assets/Svg/AFive';
import ASix from '../assets/Svg/ASix';
import ASeven from '../assets/Svg/ASeven';
import AEight from '../assets/Svg/AEight';
import ANine from '../assets/Svg/ANine';
import ATen from '../assets/Svg/ATen';
import BTen from '../assets/Svg/BTen';
import CTen from '../assets/Svg/CTen';
import CNine from '../assets/Svg/CNine';
import CEight from '../assets/Svg/CEight';
import CSeven from '../assets/Svg/CSeven';
import CSix from '../assets/Svg/CSix';
import CFive from '../assets/Svg/CFive';
import CFour from '../assets/Svg/CFour';
import CThree from '../assets/Svg/CThree';
import CTwo from '../assets/Svg/CTwo';
import COne from '../assets/Svg/COne';
import DTen from '../assets/Svg/DTen';
import DNine from '../assets/Svg/DNine';
import DEight from '../assets/Svg/DEigth';
import DSeven from '../assets/Svg/DSeven';
import DSix from '../assets/Svg/DSix';
import DFive from '../assets/Svg/DFive';
import DFour from '../assets/Svg/DFour';
import DThree from '../assets/Svg/DThree';
import DTwo from '../assets/Svg/DTwo';
import DOne from '../assets/Svg/DOne';
import LOne from '../assets/Svg/LOne';
import LPillowOne from '../assets/Svg/LPillowOne';
import LPillowTwo from '../assets/Svg/LPillowTwo';
import LTwo from '../assets/Svg/LTwo';
import LThree from '../assets/Svg/LThree';
import LPillowThree from '../assets/Svg/LPillowThree';
import LFour from '../assets/Svg/LFour';
import LPillowFour from '../assets/Svg/LPillowFour';
import LFive from '../assets/Svg/LFive';
import LPillowFive from '../assets/Svg/LPillowFive';
import MFive from '../assets/Svg/MFive';
import NFive from '../assets/Svg/NFive';
import MFour from '../assets/Svg/MFour';
import MThree from '../assets/Svg/MThree';
import MTwo from '../assets/Svg/MTwo';
import MOne from '../assets/Svg/MOne';
import MPillowOne from '../assets/Svg/MPillowOne';
import NFour from '../assets/Svg/NFour';
import NThree from '../assets/Svg/NThree';
import NPillowThree from '../assets/Svg/NPillowThree';
import NTwo from '../assets/Svg/NTwo';
import NOne from '../assets/Svg/NOne';






const JourneyDetails = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(null);
  const scrollRef = useRef();
  const [selectedPlaceIds, setSelectedPlaceIds] = useState([]);


  const toggleSeatsBold = () => {
    setActiveTab(activeTab === 'seats' ? null : 'seats');
  };

  const toggleBoardingBold = () => {
    setActiveTab(activeTab === 'boarding' ? null : 'boarding');
  };

  const toggleSection = (section) => {
    setActiveTab(activeTab === section ? null : section);
  };

  const togglePlaceSelection = (id) => {
    setSelectedPlaceIds((prevSelectedPlaceIds) =>
      prevSelectedPlaceIds.includes(id)
        ? prevSelectedPlaceIds.filter((placeId) => placeId !== id)
        : [...prevSelectedPlaceIds, id]
    );
  };

  const handlePress = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  const places = [
    { id: 1, place: "Vijaymangalam Toll", time: "4:45", date: "05", month: "Jun" },
    { id: 2, place: "Vijaymangalam Toll", time: "2:00", date: "15", month: "Dec" },
    { id: 3, place: "Vijaymangalam Toll", time: "8:45", date: "03", month: "Jan" },
    { id: 4, place: "Vijaymangalam Toll", time: "5:15", date: "09", month: "Feb" },
    { id: 5, place: "Vijaymangalam Toll", time: "11:00", date: "25", month: "Mar" },
    { id: 6, place: "Vijaymangalam Toll", time: "6:30", date: "12", month: "Apr" },
    { id: 7, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
    { id: 8, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
    { id: 9, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
    { id: 10, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
    { id: 11, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
    { id: 12, place: "Vijaymangalam Toll", time: "7:00", date: "19", month: "May" },
  ];

  const places2 = [
    { id: 13, place: "Vijaymangalam Toll", time: "9:00", date: "06", month: "Jun" },
    { id: 14, place: "Vijaymangalam Toll", time: "3:00", date: "05", month: "May" },
    { id: 15, place: "Vijaymangalam Toll ", time: "4:00", date: "07", month: "Feb" },
    { id: 16, place: "Vijaymangalam Toll", time: "1:00", date: "17", month: "Apr" },
    { id: 17, place: "Vijaymangalam Toll", time: "3:00", date: "22", month: "Aug" },
    { id: 18, place: "Vijaymangalam Toll", time: "4:00", date: "27", month: "Jan" },
    { id: 19, place: "Vijaymangalam Toll", time: "2:00", date: "21", month: "May" },
    { id: 20, place: "Vijaymangalam Toll", time: "1:00", date: "08", month: "Jul" },
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'seats':
        return (
          <View style={styles.seatsSection}>


            {<View style={styles.seatsContent}>

              <LowerBerth style={styles.LowerBerth}
                height={480}
                width={530} />

              <UpperBerth style={styles.UpperBerth}
                height={480}
                width={530} />


              <Text style={styles.InnerLowerBerthText}>LOWER BERTH (31)</Text>
              <Steering style={styles.Steering}
                height={30}
                width={20} />
              <LowerLeftLight style={styles.LowerLeftLight} />
              <LowerRightLight style={styles.LowerRightLight} />
              <UpperLeftLight style={styles.UpperLeftLight} />
              <UpperRightLight style={styles.UpperRightLight} />

              <LowerBerthDoor style={styles.LowerBerthDoor} />

              <Aone style={styles.Aone} />
              <ATwo style={styles.ATwo} />
              <AThree style={styles.AThree} />
              <AFour style={styles.AFour} />
              <AFive style={styles.AFive} />
              <ASix style={styles.ASix} />
              <ASeven style={styles.ASeven} />
              <AEight style={styles.AEight} />
              <ANine style={styles.ANine} />
              <ATen style={styles.ATen} />
              <BTen style={styles.BTen} />
              <CTen style={styles.CTen} />
              <DTen style={styles.DTen} />
              <CNine style={styles.CNine} />
              <CEight style={styles.CEight} />
              <CSeven style={styles.CSeven} />
              <CSix style={styles.CSix} />
              <CFive style={styles.CFive} />
              <CFour style={styles.CFour} />
              <CThree style={styles.CThree} />
              <CTwo style={styles.CTwo} />
              <COne style={styles.COne} />
              <DNine style={styles.DNine} />
              <DEight style={styles.DEight} />
              <DSeven style={styles.DSeven} />
              <DSix style={styles.DSix} />
              <DFive style={styles.DFive} />
              <DFour style={styles.DFour} />
              <DThree style={styles.DThree} />
              <DTwo style={styles.DTwo} />
              <DOne style={styles.DOne} />
              <LOne style={styles.LOne} />
              <Text style={styles.UpperBerthText}>UPPER BERTH (15)</Text>
              <LPillowOne style={styles.LPillowOne} />
              <LPillowTwo style={styles.LPillowTwo} />
              <LTwo style={styles.LTwo} />
              <LThree style={styles.LThree} />
              <LPillowThree style={styles.LPillowThree} />
              <LFour style={styles.LFour} />
              <LPillowFour style={styles.LPillowFour} />
              <LFive style={styles.LFive} />
              <LPillowFive style={styles.LPillowFive} />
              <MFive style={styles.MFive} />
              <NFive style={styles.NFive} />
              <MFour style={styles.MFour} />
              <MThree style={styles.MThree} />
              <MTwo style={styles.MTwo} />
              <MOne style={styles.MOne} />
              <MPillowOne style={styles.MPillowOne} />
              <NFour style={styles.NFour} />
              <NThree style={styles.NThree} />
              <NPillowThree style={styles.NPillowThree} />
              <NTwo style={styles.NTwo}/>
              <NOne style={styles.NOne}/>
            </View>}
          </View>
        );
      case 'boarding':
        return (
          <View style={styles.boardingContent}>
            <View style={styles.cardContainer}>
              <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={true}
                persistentScrollbar={true}
                indicatorStyle="black"
                style={styles.card}
              >
                {places.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => togglePlaceSelection(item.id)}
                  >
                    <View
                      style={[
                        styles.placeCard,
                        selectedPlaceIds.includes(item.id) && styles.selectedPlaceCard,
                      ]}
                    >
                      <Text
                        style={[
                          styles.timeDate,
                          selectedPlaceIds.includes(item.id) && styles.selectedText,
                        ]}
                      >
                        {item.time} ({item.date} {item.month})
                      </Text>
                      <Text
                        style={[
                          styles.placeName,
                          selectedPlaceIds.includes(item.id) && styles.selectedText,
                        ]}
                        numberOfLines={1}
                      >
                        {item.place}
                      </Text>

                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={true}
                persistentScrollbar={true}
                style={styles.card2}
              >
                {places2.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => togglePlaceSelection(item.id)}
                  >
                    <View
                      style={[
                        styles.placeCard,
                        selectedPlaceIds.includes(item.id) && styles.selectedPlaceCard,
                      ]}
                    >
                      <Text
                        style={[
                          styles.timeDate,
                          selectedPlaceIds.includes(item.id) && styles.selectedText,
                        ]}
                      >
                        {item.time} ({item.date} {item.month})
                      </Text>
                      <Text
                        style={[
                          styles.placeName,
                          selectedPlaceIds.includes(item.id) && styles.selectedText,
                        ]}
                        numberOfLines={1}
                      >
                        {item.place}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <OrdBoardingPoint style={styles.OrdBoardingPoint}
                height={100}
                width={185} />
              <OrdDropPoint style={styles.OrdDropPoint}
                height={130}
                width={220} />
            </View>
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
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handlePress}>
          <BackArrow style={styles.BackArrow} width={40} height={55} />
        </TouchableOpacity>
        <BackGroundArrow style={styles.BackGroundArrow} />
        {/* Title */}
        <Text style={styles.title}>Journey Details</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <JourneyOrdCard style={styles.JourneyOrdcard} height={1100} width={415} />
        <JourneyTopBlue style={styles.JourneyTopBlue}
          width={280}
          height={180}
          resizeMode="contain" />

        <Text style={styles.JourneyBusOperatorText}>Bus Operator</Text>
        <Text style={styles.VrlTravelsText}>VRL Travels</Text>
        <StarOne style={styles.FirstStar}
          width={107}
          height={65}
          resizeMode="contain" />
        <Text style={styles.ACText}>A/C Sleeper (2+1) </Text>
        <Line style={styles.FirstCardLine}
          width={50}
          height={90}
          resizeMode="contain" />
        <VrlTimeBus style={styles.VrlFirstBus}
          width={260}
          height={100}
          resizeMode="contain"
        />
        <SeatOne style={styles.SeatOne}
          width={107}
          height={70}
          resizeMode="contain"
        />
        <Text style={styles.Windowseattext}
          width={91}
          height={90}
          resizeMode="contain"
        >5 Window Seats</Text>
        <JourneyMiddleBlue style={styles.JourneyMiddleBlue}
          width={414}
          height={50} />
        <BlueTri style={styles.BlueTri}
          width={23}
          height={25} />
        <OrdJourneyInnerCard
          style={styles.OrdJourneyInnerCard}
          width={400}
          height={720}
        />
        <MiddleBottomTri style={styles.MiddleBottomTri}
          width={28}
          height={28} />

        <View style={styles.SmallCardContainer}>
          {/* First card with top-left and bottom-left rounded corners */}
          <View style={[styles.SmallerCard, styles.FirstSmallerCard]}>
            <Text style={styles.FirstSmallerCardText}>ALL</Text>
          </View>

          {/* Middle flat cards */}
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={styles.MiddleCard}>
              <Text style={styles.cardText}>₹ 500 </Text>
            </View>
          ))}

          {/* Last card with top-right and bottom-right rounded corners */}
          <View style={[styles.SmallerCard, styles.LastSmallerCard]}>
            <Text style={styles.cardText}>₹ 500</Text>
          </View>
        </View>
        <InfoLogo style={styles.InfoLogo}
          height={25}
          width={25}
        />
        <DemoSeat style={styles.DemoSeat} />
        <LocationPic style={styles.LocationPic} />
        <OrdBottomcard style={styles.OrdBottomcard}
          width={390}
          height={100} />
          <TouchableOpacity style={styles.OrdJourneyContinue} onPress={() => navigation.navigate('TravellerDetails')} >
        <OrdJourneyContinue />
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          {/* Seats Section */}
          <TouchableOpacity onPress={() => toggleSection('seats')} style={styles.rowItem}>
            <Text
              style={[styles.rowText, activeTab === 'seats' && styles.activeRowText]}
            >
              Select Your Seats
            </Text>
            {activeTab === 'seats' && <View style={styles.underline} />}
          </TouchableOpacity>

          {/* Boarding Section */}
          <TouchableOpacity onPress={() => toggleSection('boarding')} style={styles.rowItem}>
            <Text
              style={[styles.BoardingrowText, activeTab === 'boarding' && styles.activeRowText]}
            >
              Boarding & Drop Point
            </Text>
            {activeTab === 'boarding' && <View style={styles.Dropunderline} />}
          </TouchableOpacity>
        </View>

        {/* Render Content Based on Active Tab */}
        {renderContent()}
        <Text style={styles.Rupee}>₹ 800</Text>
        <Text style={styles.LEighteen}>L18</Text>
        <Text style={styles.Selectedseat}>Selected Seat</Text>
        <Text style={styles.Price}>Price</Text>
        <BottomcardLine style={styles.BottomcardLine} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5fff1',
  },
  topSection: {
    width: '100%',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F487C',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    marginTop: 10,
    left: 10,
    zIndex: 7,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -50,
  },
  bottomSection: {
    flex: 2,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 7,
    marginTop: -640,
    marginLeft: 40,
  },
  rowItem: {
    flex: 1,
    padding: 0,
  },
  rowText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#1F487C',
    marginLeft: 30,
    marginTop: -125,
  },
  BoardingrowText: {
    marginLeft: 18,
    color: '#1F487C',
    marginTop: -125,
  },
  activeRowText: {
    color: '#1F487C',
    fontWeight: '600',
  },
  underline: {
    height: 2,
    backgroundColor: '#1F487C',
    marginTop: 5,
    width: '58%',
    marginLeft: 30,
  },
  Dropunderline: {
    height: 2,
    backgroundColor: '#1F487C',
    marginTop: 5,
    width: '78%',
    marginLeft: 20,

  },
  seatsSection: {
    marginTop: 20,
    zIndex: 3,
  },
  seatsContent: {
    fontSize: 16,

  },
  boardingContent: {
    marginTop: 20,
    zIndex: 3,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  card: {
    height: 440, // Fixed height for scrollable content
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    overflow: "hidden", // Prevents overflow of content
    marginTop: -70,
    marginLeft: -1,
  },
  card2: {
    height: 440, // Fixed height for scrollable content
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    overflow: "hidden", // Prevents overflow of content
    marginLeft: 10,
    marginTop: -68,
  },
  placeCard: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedPlaceCard: {
    backgroundColor: '#1F487C33',

  },
  timeDate: {
    fontSize: 14,
  },
  placeName: {
    fontSize: 16,
    fontWeight: '450',
    color: "black",
    flexWrap: 'nowrap', // Prevent text wrapping
    overflow: 'hidden', // Hide overflowed text if it's too long
    width: '100%',
  },
  selectedText: {
    color: 'black',
  },
  JourneyOrdcard: {
    marginTop: -146,
    zIndex: 0,
    marginLeft: -14,
  },
  JourneyTopBlue: {
    marginTop: -70,
    zIndex: 1,
    position: 'absolute',
    marginLeft: -13,
  },
  JourneyBusOperatorText: {
    color: 'white',
    fontSize: 12,
    zIndex: 2,
    position: 'absolute',
    marginTop: 1,
    marginLeft: -2,
  },
  VrlTravelsText: {
    zIndex: 2,
    color: 'white',
    fontSize: 19,
    fontWeight: "550",
    position: 'absolute',
    marginTop: 12,
    marginLeft: -2,
  },
  FirstStar: {
    zIndex: 2,
    position: 'absolute',
    marginLeft: 285,
    marginTop: 18,
  },
  ACText: {
    zIndex: 2,
    position: 'absolute',
    color: '#1f487c',
    marginTop: 45,
    marginLeft: 85,
  },
  FirstCardLine: {
    zIndex: 3,
    position: 'absolute',
    marginLeft: 245,
    marginTop: 40,
  },
  VrlFirstBus: {
    // marginTop:-110,
    zIndex: 3,
    position: 'absolute',
    marginTop: 45,
    marginLeft: -4,
  },
  SeatOne: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 53,
    marginLeft: 283,
  },
  Windowseattext: {
    zIndex: 2,
    position: 'absolute',
    color: '#1f487c',
    fontWeight: "603",
    fontSize: 14,
    marginTop: 112,
    marginLeft: 283,
  },
  JourneyMiddleBlue: {
    zIndex: 3,
    position: 'absolute',
    marginTop: 130,
    marginLeft: -5,
  },
  OrdJourneyInnerCard: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 120,
    marginLeft: -5,
  },
  BlueTri: {
    zIndex: 3,
    position: 'absolute',
    marginLeft: 266,
    marginTop: -2,
  },
  MiddleBottomTri: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 168,
    marginLeft: 386,
  },
  SmallCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 142,
    zIndex: 4,
    marginLeft: 50,
    padding: 0,
    margin: 0,
  },
  FirstSmallerCard: {
    backgroundColor: '#8EA3BD',
    width: 53,
    height: 27,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    marginHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,

  },
  MiddleCard: {
    width: 53,
    height: 27,
    backgroundColor: 'white',
    borderColor: '#1F487C',
    borderWidth: 1,
    borderRadius: 0, // Flat edges for middle cards
    marginHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Reduced elevation
    // Removed shadow properties temporarily
  },
  LastSmallerCard: {
    backgroundColor: 'white',
    width: 50,
    height: 27,
    borderColor: '#1F487C',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    marginHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Reduced elevation
    // Removed shadow properties temporarily
  },
  cardText: {
    color: '#1F487C',
    fontSize: 14,
    fontWeight: '700',
  },
  FirstSmallerCardText: {
    color: 'white',
    fontSize: 14,
  },
  InfoLogo: {
    zIndex: 3,
    position: 'absolute',
    marginTop: 143,
    marginLeft: 10,
  },
  OrdBoardingPoint: {
    zIndex: 3,
    position: 'absolute',
    marginTop: -140,
  },
  OrdDropPoint: {
    zIndex: 3,
    position: 'absolute',
    marginTop: -155,
    marginLeft: 200,
  },
  DemoSeat: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 190,
    marginLeft: 35,
  },
  LocationPic: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 190,
    marginLeft: 210,
  },
  OrdBottomcard: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 695,
  },
  OrdJourneyContinue: {
    zIndex: 3,
    position: 'absolute',
    marginTop: 725,
    marginLeft: 260,
  },
  Rupee: {
    zIndex: 7,
    position: 'absolute',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 720,
    marginLeft: 180,
  },
  BottomcardLine: {
    zIndex: 7,
    position: 'absolute',
    marginTop: 725,
    marginLeft: 245,
  },
  LEighteen: {
    zIndex: 7,
    position: 'absolute',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 720,
    marginLeft: 18,
  },
  Selectedseat: {
    zIndex: 7,
    position: 'absolute',
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 745,
    marginLeft: 17,
  },
  Price: {
    zIndex: 7,
    position: 'absolute',
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 745,
    marginLeft: 180,
  },
  LowerBerth: {
    zIndex: 3,
    position: 'absolute',
    marginTop: -105,
    marginLeft: -170,
  },
  UpperBerth: {
    zIndex: 3,
    position: 'absolute',
    marginTop: -105,
    marginLeft: 30,
  },
  InnerLowerBerthText: {
    zIndex: 3,
    marginTop: -100,
    marginLeft: 40,
    fontSize: 12,


  },
  Steering: {
    zIndex: 3,
    marginLeft: 140,
  },
  LowerLeftLight: {
    zIndex: 3,
    marginTop: -62,
    marginLeft: 35,
  },
  LowerRightLight: {
    zIndex: 3,
    marginTop: -17,
    marginLeft: 130,
  },
  UpperLeftLight: {
    zIndex: 3,
    marginTop: -18,
    marginLeft: 240,
  },
  UpperRightLight: {
    zIndex: 3,
    marginTop: -16,
    marginLeft: 330,
  },
  LowerBerthDoor: {
    zIndex: 3,
    marginLeft: 2,
    marginTop: 20,
  },
  Aone: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 15,
  },
  ATwo: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  AThree: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  AFour: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  AFive: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  ASix: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  ASeven: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  AEight: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  ANine: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  ATen: {
    zIndex: 3,
    marginLeft: 15,
    marginTop: 10,
  },
  BTen: {
    zIndex: 3,
    marginLeft: 60,
    marginTop: -31,
  },
  CTen: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -32,
  },
  DTen: {
    zIndex: 3,
    marginLeft: 139,
    marginTop: -37,
  },
  CNine: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -85,
  },
  CEight: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -72,
  },
  CSeven: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -73,
  },
  CSix: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -72,
  },
  CFive: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -72,
  },
  CFour: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -72,
  },
  CThree: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -73,
  },
  CTwo: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -74,
  },
  COne: {
    zIndex: 3,
    marginLeft: 105,
    marginTop: -73,

  },
  DNine: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: 297,
  },
  DEight: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -72,
  },
  DSeven: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -72,
  },
  DSix: {
    zIndex: 3,
    marginLeft: 140,
    marginTop: -77,
  },
  DFive: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -83,
  },
  DFour: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -73,
  },
  DThree: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -73,
  },
  DTwo: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -73,
  },
  DOne: {
    zIndex: 3,
    marginLeft: 147,
    marginTop: -73,
  },
  LOne: {
    zIndex: 3,
    marginLeft: 215,
    marginTop: -32,
  },
  UpperBerthText: {
    zIndex: 3,
    fontSize: 12,
    marginLeft: 250,
    marginTop: -127,
  },
  LPillowOne: {
    zIndex: 3,
    marginLeft: 219,
    marginTop: 96,
  },
  LTwo: {
    zIndex: 3,
    marginLeft: 215,
    marginTop: 25,
  },
  LPillowTwo: {
    zIndex: 4,
    marginLeft: 219,
    marginTop: 90,
    position: 'absolute',
  },
  LThree: {
    zIndex: 3,
    marginLeft: 215,
    marginTop: 18,
  },
  LPillowThree: {
    zIndex: 3,
    marginLeft: 219,
    marginTop: -15,
  },
  LFour: {
    zIndex: 3,
    marginLeft: 215,
    marginTop: 25,
  },
  LPillowFour: {
    zIndex: 3,
    marginLeft: 219,
    marginTop: -15,
  },
  LFive: {
    zIndex: 3,
    marginLeft: 215,
    marginTop: 25,
  },
  LPillowFive: {
    zIndex: 3,
    marginLeft: 219,
    marginTop: -15,
  },
  MFive: {
    zIndex: 3,
    marginLeft: 310,
    marginTop: -55,
  },
  NFive: {
    zIndex: 3,
    marginLeft: 350,
    marginTop: -65,
  },
  MFour: {
    zIndex: 3,
    marginLeft: 310,
    marginTop: -147,
  },
  MThree: {
    zIndex: 3,
    marginLeft: 310,
    marginTop: -150,
  },
  MTwo: {
    zIndex: 3,
    marginLeft: 310,
    marginTop: -148,
  },
  MOne: {
    zIndex: 3,
    marginLeft: 310,
    marginTop: -149,
  },
  MPillowOne: {
    zIndex: 3,
    marginLeft: 315,
    marginTop: -15,
  },
  NFour: {
    zIndex: 3,
    marginLeft: 350,
    marginTop: 195,
  },
  NThree: {
    zIndex: 3,
    marginLeft: 350,
    marginTop: -150,
  },
  NPillowThree: {
    zIndex: 3,
    marginLeft: 355,
    marginTop:-12,
  },
  NTwo:{
    zIndex: 3,
    marginLeft: 351,
    marginTop:-142,
  },
  NOne:{
    zIndex: 3,
    marginLeft: 351,
    marginTop:-150,
  },
});

export default JourneyDetails;
