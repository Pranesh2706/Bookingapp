import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import JourneyGoldBg from '../assets/Svg/JourneyGoldenBg';  
import GoldenBackArrow from '../assets/Svg/GoldenBackArrow';
import BackGroundArrow from '../assets/Svg/BackGroundArrow';
import GoldenBigCard from '../assets/Svg/GoldenBigCard';
import JourneyTopWhite from '../assets/Svg/JourneyTopWhite';
import JourneyTopTri from '../assets/Svg/JourneyTopTri';
import JourneySecondCardLogo from '../assets/Svg/JourneySecondCardLogo';
import JourneyDetailsBus from '../assets/Svg/JourneyDetailsBus';
import JourneyDetailsLine from '../assets/Svg/JourneyDetailsLine';
import GoldenStar from '../assets/Svg/GoldenStar';
import GoldenSeatsLeft from '../assets/Svg/GoldenSeatsLeft';
import GoldenBrownRect from '../assets/Svg/GoldenBrownRect';
import JourneyBrowntri from '../assets/Svg/JourneyBrownTri';
import Whiteinfo from '../assets/Svg/WhiteInfo';
import SandalInnerCard from '../assets/Svg/SandalInnerCard';
import GoldLowerBerth from '../assets/Svg/GoldLowerBerth';
import GoldUpperBerth from '../assets/Svg/GoldUpperBerth';
import DemoSeat from '../assets/Svg/DemoSeat';
import LocationPic from '../assets/Svg/LocationPic';
import GoldenBottomCard from '../assets/Svg/GoldenBottomCard';
import GoldLowerDoor from '../assets/Svg/GoldLowerDoor';
import Steering from '../assets/Svg/Steering';
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
import DTen from '../assets/Svg/DTen';
import CNine from '../assets/Svg/CNine';
import CEight from '../assets/Svg/CEight';
import CSeven from '../assets/Svg/CSeven';
import CSix from '../assets/Svg/CSix';
import CFive from '../assets/Svg/CFive';
import CFour from '../assets/Svg/CFour';
import CThree from '../assets/Svg/CThree';
import CTwo from '../assets/Svg/CTwo';
import COne from '../assets/Svg/COne';
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
import LTwo from '../assets/Svg/LTwo';
import LPillowTwo from '../assets/Svg/LPillowTwo';
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
import GoldenContinue from '../assets/Svg/GoldenContinue';
import GoldBottomLine from '../assets/Svg/GoldBottomLine';
import BoardingPoint from '../assets/Svg/BoardingPoint';
import DropPoint from '../assets/Svg/DropPoint';
import GoldLowerLeftLight from '../assets/Svg/GoldLowerLeftLight';
import GoldLowerRightLight from '../assets/Svg/GoldUpperRightLight';
import GoldUpperLeftLight from '../assets/Svg/GoldUpperLeftLight';
import GoldUpperRightLight from '../assets/Svg/GoldUpperRightLight';







const GoldenJourneyDetails = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedPlaceIds, setSelectedPlaceIds] = useState([]);
    const scrollRef = useRef(); // Reference for ScrollView
    const [selectedPlace2Ids, setSelectedPlace2Ids] = useState([]);





    const togglePlaceSelection = (id) => {
        setSelectedPlaceIds((prevSelectedPlaceIds) =>
            prevSelectedPlaceIds.includes(id)
                ? prevSelectedPlaceIds.filter((placeId) => placeId !== id)
                : [...prevSelectedPlaceIds, id]
        );
    };


    const toggleSeatsBold = () => {
        setActiveTab(activeTab === 'seats' ? null : 'seats');
    };

    const toggleBoardingBold = () => {
        setActiveTab(activeTab === 'boarding' ? null : 'boarding');
    };

    scrollRef.current?.scrollTo({
        y: index * 50, // Adjust 50 based on the height of your item  
        animated: true,
    });


    const handlePress = () => {
        if (navigation) {
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

    ]

    const renderContent = () => {
        if (activeTab === 'seats') {
            return (
                <View style={styles.seatsContent}>
                    {/* Seat content */}
                    {/* <Text style={styles.SeatsText}>Content for the seats section</Text> */}
                    <View style={styles.Berths}>
                        <GoldLowerBerth style={styles.GoldLowerBerth} />
                        <GoldUpperBerth style={styles.GoldUpperBerth} />
                    </View>
                    <GoldLowerDoor style={styles.GoldLowerDoor} />
                    <Text style={styles.InnerLowerBerthText}>LOWER BERTH (31)</Text>
                    <Steering style={styles.Steering} />
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
                    <LPillowOne style={styles.LPillowOne} />
                    <LTwo style={styles.LTwo} />
                    <LPillowTwo style={styles.LPillowTwo} />
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
                    <NTwo style={styles.NTwo} />
                    <NOne style={styles.NOne} />
                    <Text style={styles.UpperBerthText}>UPPER BERTH (15)</Text>
                    <GoldLowerLeftLight style={styles.GoldLowerLeftLight} />
                    <GoldLowerRightLight style={styles.GoldLowerRightLight} />
                    <GoldUpperLeftLight style={styles.GoldUpperLeftLight} />
                    <GoldUpperRightLight style={styles.GoldUpperRightLight} />





                    {/* Add all the seat-specific components */}
                </View>
            );
        }

        if (activeTab === 'boarding') {
            return (
                <View style={styles.boardingContent}>
                    {/* Placeholder for Boarding & Dropping Point */}

                    <View>
                        {/* Card for Places */}
                        <View style={styles.cardContainer}>
                            {/* First Card */}
                            <View style={styles.card}>
                                {/* <Text style={styles.sectionHeader}>Places</Text> */}
                                <ScrollView
                                    contentContainerStyle={styles.scrollViewContent}
                                    showsVerticalScrollIndicator={true}
                                    indicatorStyle="black"
                                    persistentScrollbar={true}
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
                                                    {item.time} ({item.date}{item.month})
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.placeName,
                                                        selectedPlaceIds.includes(item.id) && styles.selectedText,
                                                    ]}
                                                    numberOfLines={1} // Ensures the text stays on a single line
                                                >
                                                    {item.place}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            {/* Second Card */}
                            <View style={styles.Card2}>

                                {/* <Text style={styles.sectionHeader}>Places 2</Text> */}
                                <ScrollView
                                    contentContainerStyle={styles.scrollViewContent}
                                    showsVerticalScrollIndicator={true}
                                    indicatorStyle="black"
                                    persistentScrollbar={true}
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
                                                    {item.time} ({item.date}{item.month})
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.placeName,
                                                        selectedPlaceIds.includes(item.id) && styles.selectedText,
                                                    ]}
                                                    numberOfLines={1} // Ensures the text stays on a single line
                                                >
                                                    {item.place}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>

                            </View>
                        </View>

                    </View>




                    <BoardingPoint style={styles.BoardingPoint}
                        height={100}
                        width={180} />
                    <DropPoint style={styles.DropPoint}
                        height={100}
                        width={180} />
                </View>
            );
        }

        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.TopSection}>
                <JourneyGoldBg style={styles.JourneyGoldenBg} />
                <Image
                    style={styles.transparentImage}
                    source={require('../assets/Pictures/Trans111.png')}
                />
                <TouchableOpacity style={styles.UpGoldenArrow} onPress={handlePress}>
                    <GoldenBackArrow style={styles.GoldenBackArrow}
                        height={40}
                        width={50} />
                </TouchableOpacity>
                <Text style={styles.title}>Journey Details</Text>
                <BackGroundArrow style={styles.BackGroundArrow} />

            </View>
            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                <GoldenBigCard style={styles.GoldenBigCard} />
                <JourneyTopWhite style={styles.JourneyTopWhite} />
                <JourneyTopTri style={styles.JourneyTopTri} />
                <Image source={require('../assets/Pictures/cc.png')} style={styles.TransparentCard} />
                <Text style={styles.Actext}>A/C Sleeper (2+1)</Text>
                <Text style={styles.BusOperatorText}>Bus Operator</Text>
                <Text style={styles.SBLTTravelstext}>Parveen Travels</Text>
                <JourneySecondCardLogo style={styles.JourneySecondCardLogo} />
                <JourneyDetailsBus style={styles.JourneyDetailsBus}
                    width={255}
                    height={100}
                    resizeMode="contain" />
                <JourneyDetailsLine style={styles.JourneyDetailsLine} />
                <GoldenStar style={styles.GoldenStar} />
                <GoldenSeatsLeft style={styles.GoldenSeatsLeft} />
                <Text style={styles.WindowSeats}>5 Window Seats</Text>
                <SandalInnerCard style={styles.SandalCard}
                    width={392}
                    height={960}
                />
                {/* <View style={styles.GoldenInnerCard}></View> */}
                <GoldenBrownRect style={styles.GoldenBrownRect} />
                <JourneyBrowntri style={styles.JourneyBrowntri}
                    height={20}
                    width={15} />
                <Whiteinfo style={styles.WhiteInfo} />
                <DemoSeat style={styles.DemoSeat} />
                <LocationPic style={styles.LocationPic} />
                <GoldenBottomCard style={styles.GoldenBottomCard} />


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
                    <View style={[styles.LastSmallerCard]}>
                        <Text style={styles.cardText}>₹ 500</Text>
                    </View>

                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.SelectSeats}>
                        <TouchableOpacity onPress={toggleSeatsBold}>
                            <Text
                                style={[
                                    styles.SelectSeatsText,
                                    { fontWeight: activeTab === 'seats' ? 'bold' : 'normal' }
                                ]}
                            >
                                Select your Seats
                            </Text>
                            {activeTab === 'seats' && <View style={styles.thickUnderline} />}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Boarding}>
                        <TouchableOpacity onPress={toggleBoardingBold}>
                            <Text
                                style={[
                                    styles.BoardingPointText,
                                    { fontWeight: activeTab === 'boarding' ? 'bold' : 'normal' }
                                ]}
                            >
                                Boarding & Drop Point
                            </Text>
                            {activeTab === 'boarding' && <View style={styles.BoardingThickUnderline} />}
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.GoldenContinue} onPress={() => navigation.navigate('Jack')}>
                    <GoldenContinue />
                </TouchableOpacity> */}

                <GoldBottomLine style={styles.GoldBottomLine}/>
                <Text style={styles.Rupee}  >₹ 800</Text>
                <Text style={styles.LEighteen}>L18</Text>
                <Text style={styles.Selectedseat}>Selected Seat</Text>
                <Text style={styles.Price}>Price</Text>




                {/* Render dynamic content */}
                {renderContent()}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("LuxuryTravelerDetails")}>
                <View style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5fff1', // Overall background color
    },
    TopSection: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    bottomSection: {
        flex: 2,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    rowContainer: {
        flexDirection: 'row', // Align children horizontally
        justifyContent: 'space-between', // Space between items
        alignItems: 'center', // Align items vertically
        marginBottom: 20, // Space between the row and the content below
        zIndex: 7,
        // position:'absolute' 
    },
    SelectSeats: {
        flex: 1, // Distribute space equally
        marginRight: 5, // Space between "Seats" and "Boarding"
        zIndex: 7,
        // position:'absolute' 
        marginTop: '50%',
    },
    SelectSeatsText: {
        fontSize: 13,
        color: '#393939',
        textAlign: 'center',
        marginTop: -469,
        marginLeft: 30,
        zIndex: 7,
        // position:'absolute' 


    },
    thickUnderline: {
        height: 2,
        backgroundColor: '#393939',
        marginTop: -449,
        marginLeft: 30,
        width: '55%',
        alignSelf: 'center',
        zIndex: 7,
        position: 'absolute'
    },
    Boarding: {
        flex: 1, // Distribute space equally
    },
    BoardingPointText: {
        fontSize: 13,
        color: '#393939',
        textAlign: 'center',
        marginTop: -373,
        marginLeft: 35,
        zIndex: 7,
        position: 'absolute'
    },
    BoardingThickUnderline: {
        height: 2,
        backgroundColor: '#393939',
        marginTop: -352,
        marginLeft: 18,
        width: '74%',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 7,
    },
    seatsContent: {
        flex: 1,                   // Fill available space
        // backgroundColor: 'transparent', // Match the parent background
        padding: 10,               // Internal padding
        borderRadius: 10,          // Rounded corners
        marginTop: 260,
        position: 'absolute',
        zIndex: 7,        // Spacing above content
    },
    boardingContent: {
        flex: 1,                   // Fill available space
        // backgroundColor: 'transparent', // Match the parent background
        padding: 10,               // Internal padding
        borderRadius: 10,          // Rounded corners
        marginTop: 20,
        marginTop: 260,
        zIndex: 7,
        position: 'absolute'           // Spacing above content
    },
    SeatsText: {
        fontSize: 16,              // Font size for placeholder text
        color: '#666',             // Muted color for placeholder text
        textAlign: 'center',
        position: 'absolute',
        zIndex: 7,
    },
    placeholderText: {
        fontSize: 16,              // Font size for placeholder text
        color: '#666',             // Muted color for placeholder text
        textAlign: 'center',       // Centered text
    },
    JourneyGoldenBg: {
        position: 'absolute',
        width: '125%',
        height: '110%',
        left: '-25%',
        top: '-20%',
        zIndex: 1,
    },
    transparentImage: {
        position: 'absolute',
        width: '125%',
        height: '110%',
        left: '-25%',
        top: '-20%',
        zIndex: 2,
    },
    UpGoldenArrow: {
        position: 'absolute',
        top: 50,
        left: 10,
        zIndex: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 5,
    },
    BackGroundArrow: {
        position: 'absolute',
        top: 42,
        zIndex: 3,
        marginLeft: 22,
    },
    GoldenBigCard: {
        position: 'absolute',
        top: 30,
        marginLeft: -367,
        zIndex: 0,
        overflow: 'visible',
    },
    JourneyTopWhite: {
        position: 'absolute',
        marginTop: -5,
        marginLeft: -14,
        zIndex: 3,
    },
    JourneyTopTri: {
        position: 'absolute',
        marginTop: -1,
        marginLeft: 264,
        zIndex: 3,
    },
    TransparentCard: {
        position: 'absolute',
        width: 405,
        height: 209,
        top: 32,
        marginLeft: -12,
        zIndex: 1,
        borderTopRightRadius: 20,
    },
    Actext: {
        position: 'absolute',
        fontSize: 14,
        top: 54,
        right: 220,
        color: 'black',
        zIndex: 4,
    },
    BusOperatorText: {
        position: 'absolute',
        top: 12,
        left: 20, // Moved within the screen bounds
        color: '#393939',
        fontSize: 12, // Slightly larger for better visibility
        fontWeight: 'bold', // Bolder font for emphasis
        zIndex: 5, // Ensures it is on top of other components
    },
    SBLTTravelstext: {
        position: 'absolute',
        top: 25,
        left: 20,
        fontSize: 18,
        color: '#393939',
        zIndex: 5,
        fontWeight: '500',
    },
    JourneySecondCardLogo: {
        position: 'absolute',
        top: 15,
        right: 150,
        zIndex: 5,
    },
    JourneyDetailsBus: {
        position: 'absolute',
        top: 56,
        left: 18,
        zIndex: 5,
    },
    JourneyDetailsLine: {
        position: 'absolute',
        top: 45,
        right: 140,
    },
    GoldenStar: {
        position: 'absolute',
        top: 46,
        right: 40,
        zIndex: 5,
    },
    GoldenSeatsLeft: {
        position: 'absolute',
        top: 80,
        right: 40,
        zIndex: 5,
    },
    WindowSeats: {
        position: 'absolute',
        top: 118,
        right: 44,
        color: '#393939',
        fontSize: 12,
        fontWeight: '600',
        zIndex: 5,
    },
    // GoldenInnerCard: {
    //     backgroundColor: '#FFEEC9',
    //     borderRadius: 25,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 10,
    //     elevation: 7,
    //     borderColor: '#393939',
    //     borderWidth: 2,
    //     width: '101%',
    //     height: 610,
    //     position: 'relative',
    //     bottom: 36,
    //     zIndex: 3,
    //     marginLeft:-9,
    //     marginTop:190,

    // },
    GoldenBrownRect: {
        position: 'absolute',
        bottom: 13,
        zIndex: 4,
        transform: [{ translateY: -615 }],
        marginLeft: -10,
        borderTopRightRadius: 6,
    },
    JourneyBrowntri: {
        position: 'absolute',
        zIndex: 3,
        marginTop: 172,
        marginLeft: 383,
    },
    SmallCardContainer: {
        flexDirection: 'row', // Align cards horizontally
        justifyContent: 'flex-start', // Align items to the start with no space between them
        position: 'absolute',
        bottom: 635,
        left: 55,
        width: '80%', // Container width
        zIndex: 5,
        margin: 0, // Remove any margin that could space the cards
        padding: 0, // Ensure no padding in the container
    },

    SmallerCard: {
        backgroundColor: '#FFF',
        borderRadius: 0, // Flat edges for all cards
        padding: 0, // No padding to avoid space inside the card
        width: '33.33%', // Adjust width to make sure they fit next to each other without space
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },

    FirstSmallerCard: {
        backgroundColor: '#aaaaaa',
        width: 53,
        height: 27,
        borderTopLeftRadius: 7, // Rounded top-left corner
        borderBottomLeftRadius: 7, // Rounded bottom-left corner
        margin: 0, // No margin
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    MiddleCard: {
        width: 53, // Ensure equal width for the middle card
        height: 27,
        backgroundColor: 'white',
        borderColor: '#393939',
        borderWidth: 1,
        borderRadius: 0, // Flat edges for middle cards
        margin: 0, // No margin
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },

    LastSmallerCard: {
        backgroundColor: 'white',
        width: 53,
        height: 27,
        borderColor: '#1F487C',
        borderWidth: 1,
        borderTopRightRadius: 7, // Rounded top-right corner
        borderBottomRightRadius: 7, // Rounded bottom-right corner
        margin: 0, // No margin
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        elevation: 2,
    },

    cardText: {
        color: '#393939',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center', // Ensures text is centered in all cards
    },

    FirstSmallerCardText: {
        color: 'white',
        fontSize: 14,
    },
    SandalCard: {
        marginLeft: -8,
        // marginTop:120,
        zIndex: 3,
        // position:'absolute',
        marginBottom: -500,
        position: 'relative',
    },
    GoldLowerBerth: {
        height: 460,
        width: 530,
        marginLeft: -183,
        marginTop: -40,
    },
    Berths: {
        flexDirection: 'row',
    },
    GoldUpperBerth: {
        height: 460,
        width: 530,
        marginLeft: -338,
        marginTop: -40,
    },
    WhiteInfo: {
        marginTop: 143,
        zIndex: 5,
        position: 'absolute',
    },
    DemoSeat: {
        zIndex: 5,
        marginTop: 185,
        marginLeft: 30,
        position: 'absolute',
    },
    LocationPic: {
        zIndex: 5,
        position: 'absolute',
        marginTop: 185,
        marginLeft: 210,
    },
    GoldenBottomCard: {
        zIndex: 5,
        position: 'absolute',
        marginTop: 656,
    },
    GoldLowerDoor: {
        zIndex: 5,
        position: 'absolute',
        marginLeft: -8,
        marginTop: -15,
    },
    Steering: {
        zIndex: 4,
        position: 'absolute',
        marginLeft: 130,
        marginTop: -20,
    },
    InnerLowerBerthText: {
        zIndex: 4,
        fontSize: 11,
        marginTop: -455,
        marginLeft: 33,
    },

    scrollViewContent: {
        flexGrow: 1,
        scrollbarStyle: 'always-visible',
    },
    placeName: {
        fontSize: 16,
        color: "#393939",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    hoveredPlaceName: {
        backgroundColor: "#FFE5AB",
        borderRadius: 5,
    },
    selectedPlaceName: {
        backgroundColor: "#FFE5AB",
        borderRadius: 5,
        color: "#000", // Ensures text color stays black even when selected
    },
    Aone: {
        zIndex: 4,
        marginTop: 40,
        marginLeft: 8,
    },
    ATwo: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    AThree: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    AFour: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    AFive: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    ASix: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    ASeven: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    AEight: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    ANine: {
        zIndex: 4,
        marginTop: 9,
        marginLeft: 8,
    },
    ATen: {
        zIndex: 4,
        marginTop: 7,
        marginLeft: 8,
    },
    BTen: {
        zIndex: 4,
        marginTop: -32,
        marginLeft: 50,
    },
    CTen: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -32,
    },
    DTen: {
        zIndex: 4,
        marginLeft: 123,
        marginTop: -37,
    },
    CNine: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -81,
    },
    CEight: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -72,
    },
    CSeven: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -72,
    },
    CSix: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -72,
    },
    CFive: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -72,
    },
    CFour: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -70,
    },
    CThree: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -70,
    },
    CTwo: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -72,
    },
    COne: {
        zIndex: 4,
        marginLeft: 90,
        marginTop: -73,
    },
    DNine: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: 290,
    },
    DEight: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -73,
    },
    DSeven: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -72,
    },
    DSix: {
        zIndex: 4,
        marginLeft: 123,
        marginTop: -75,
    },
    DFive: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -84,
    },
    DFour: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -70,
    },
    DThree: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -70,
    },
    DTwo: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -72,
    },
    DOne: {
        zIndex: 4,
        marginLeft: 130,
        marginTop: -73,
    },
    LOne: {
        zIndex: 4,
        marginTop: -30,
        marginLeft: 200,
    },
    LPillowOne: {
        zIndex: 4,
        marginLeft: 204,
        marginTop: -14,
    },
    LTwo: {
        zIndex: 4,
        marginTop: 20,
        marginLeft: 200,
    },
    LPillowTwo: {
        zIndex: 4,
        marginLeft: 204,
        marginTop: -14,
    },
    LThree: {
        zIndex: 4,
        marginLeft: 200,
        marginTop: 20,
    },
    LPillowThree: {
        zIndex: 4,
        marginLeft: 204,
        marginTop: -14,
    },
    LFour: {
        zIndex: 4,
        marginLeft: 200,
        marginTop: 25,
    },
    LPillowFour: {
        zIndex: 4,
        marginLeft: 204,
        marginTop: -14,
    },
    LFive: {
        zIndex: 4,
        marginLeft: 200,
        marginTop: 25,

    },
    LPillowFive: {
        zIndex: 4,
        marginLeft: 204,
        marginTop: -14,
    },
    MFive: {
        zIndex: 4,
        marginLeft: 290,
        marginTop: -57,
    },
    NFive: {
        zIndex: 4,
        marginLeft: 328,
        marginTop: -65,
    },
    MFour: {
        zIndex: 4,
        marginLeft: 290,
        marginTop: -147,
    },
    MThree: {
        zIndex: 4,
        marginLeft: 290,
        marginTop: -147,
    },
    MTwo: {
        zIndex: 4,
        marginLeft: 290,
        marginTop: -145,
    },
    MOne: {
        zIndex: 4,
        marginLeft: 290,
        marginTop: -145,
    },
    MPillowOne: {
        zIndex: 4,
        marginLeft: 295,
        marginTop: -14,
    },
    NFour: {
        zIndex: 4,
        marginLeft: 328,
        marginTop: 185,
    },
    NThree: {
        zIndex: 4,
        marginLeft: 328,
        marginTop: -148,
    },
    NPillowThree: {
        zIndex: 4,
        marginLeft: 333,
        marginTop: -13,
    },
    NTwo: {
        zIndex: 4,
        marginLeft: 328,
        marginTop: -138,
    },
    NOne: {
        zIndex: 4,
        marginLeft: 328,
        marginTop: -148,
    },
    UpperBerthText: {
        zIndex: 4,
        fontSize: 11,
        marginTop: -122,
        marginLeft: 228,
    },
    GoldenContinue: {
        zIndex: 7,
        marginTop: 28,
        marginLeft: 250,
    },
    GoldBottomLine: {
        zIndex: 7,
        marginTop: 705,
        marginLeft: 225,
        position:'absolute',
    },
    Rupee: {
        zIndex: 7,
        color: 'black',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 22,
        marginLeft: 160,
    },
    LEighteen: {
        zIndex: 7,
        color: 'black',
        fontWeight: '700',
        fontSize: 20,
        marginTop: -28,
        marginLeft: 20,
    },
    Selectedseat: {
        zIndex: 7,
        color: 'black',
        fontSize: 18,
        marginLeft: 20,
        fontWeight: '400',
    },
    Price: {
        zIndex: 7,
        color: 'black',
        fontSize: 18,
        marginTop: -25,
        marginLeft: 160,
        fontWeight: '400',
    },
    BoardingPoint: {
        zIndex: 7,
        marginTop: -30,
        position: 'absolute',
        marginTop: -83,
        marginLeft: -5,
    },
    DropPoint: {
        zIndex: 7,
        position: 'absolute',
        marginLeft: 190,
        marginTop: -82,
        marginLeft: 183,
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
        backgroundColor: "#FFEEC9",
    },
    timeDate: {
        fontSize: 16,

        color: "black",
        marginBottom: 5, // Adds space between time/date and place name
    },
    placeName: {
        fontSize: 18,
        fontWeight: '450',
        color: "black",
        flexWrap: 'nowrap', // Prevent text wrapping
        overflow: 'hidden', // Hide overflowed text if it's too long
        width: '100%',  // Ensure the parent has enough space for text

    },
    selectedText: {
        color: "black",
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row', // Arrange children in a horizontal row
        justifyContent: 'space-between',
        padding: 10,
        // backgroundColor: '#f0f0f0', // Optional background
    },
    card: {
        height: 436, // Fixed height for scrollable content
        width: "52%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        overflow: "hidden", // Prevents overflow of content
        marginTop: -28,
        marginLeft: -15,
        // position:'absolute',
    },
    Card2: {
        height: 436, // Fixed height for scrollable content
        width: "52%",
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
        marginTop: -28,
        // position:'absolute',

    },
    GoldLowerLeftLight: {
        zIndex: 5,
        marginTop: -32,
        marginLeft: 23,
    },
    GoldLowerRightLight: {
        zIndex: 5,
        marginTop: -13,
        marginLeft: 120,

    },
    GoldUpperLeftLight: {
        zIndex: 5,
        marginTop: -13,
        marginLeft: 220,
    },
    GoldUpperRightLight: {
        zIndex: 5,
        marginTop: -10,
        marginLeft: 310,
    },
    continueButton: {
        backgroundColor: "#393939", // Brown color
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignItems: "center",
        position:"absolute",
        marginTop:-102,
        marginLeft:255,
      },
      continueText: {
        color: "#fff", // White text for contrast
        fontSize: 20,
        fontWeight: "500",
      },

});

export default GoldenJourneyDetails;
