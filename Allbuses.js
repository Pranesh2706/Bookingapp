
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import Dullbus from '../assets/Svg/Dullbus';
import Backarrow from '../assets/Svg/Backarrow';
import FilterIcon from '../assets/Svg/FilterIcon';
import LuxuryCoachIcon from '../assets/Svg/LuxuryCoachIcon';
import NonACIcon from '../assets/Svg/NonACIcon';
import SortIcon from '../assets/Svg/SortIcon';
import SeaterIcon from '../assets/Svg/SeaterIcon';
import SemiSleeperIcon from '../assets/Svg/SemiSleeperIcon';
import SleeperIcon from '../assets/Svg/SleeperIcon';
import DayIcon from '../assets/Svg/DayIcon';
import NightIcon from '../assets/Svg/NightIcon';
import DropDownIcon from '../assets/Svg/DropdownIcon';
import Topblue from '../assets/Svg/Topblue';
import TopVrl from '../assets/Svg/TopVrl';
import BlueTri from '../assets/Svg/BlueTri';
import StarOne from '../assets/Svg/StarOne';
import SeatOne from '../assets/Svg/SeatOne';
import VrlTimeBus from '../assets/Svg/VrlTimeBus';
import Line from '../assets/Svg/Line';
import Firstcardprice from '../assets/Svg/FirstcardPrice';
import DownBluerect from '../assets/Svg/DownBluerect';
import Grayrect from '../assets/Svg/Grayrect';
import Amenities from '../assets/Svg/Amenities';
import VrlDowntri from '../assets/Svg/VrlDowntri';
import SBLTcardbase from '../assets/Svg/SBLTcardbase';
import Thirdcardrect from '../assets/Svg/Thirdcardrect';
import ParveenLogo from '../assets/Svg/ParveenLogo';
import ParveenRighttri from '../assets/Svg/ParveenRighttri';
import ParveenBus from '../assets/Svg/ParveenBus';
import ThirdPrice from '../assets/Svg/ThirdPrice';
import ParveenLowPrice from '../assets/Svg/ParveenLowPrice';
import ParveenLine from '../assets/Svg/ParveenLine';
import ParveenStar from '../assets/Svg/ParveenStar';
import ParveenSeats from '../assets/Svg/ParveenSeats';
import ParveenBottomBluerect from '../assets/Svg/ParveenBottomBluerect';
import ThirdGrayrect from '../assets/Svg/ThirdGrayrect';
import ThirdAmenity from '../assets/Svg/ThirdAmenity';
import ParveenDowntri from '../assets/Svg/ParveenDownTri';
import MiddleWhiteRect from '../assets/Svg/MiddleWhiteRect';
import TopGrayTri from '../assets/Svg/TopGrayTri';
import SbltLogo from '../assets/Svg/SbltLogo';
import SbltBus from '../assets/Svg/SbltBus';
import SbltLowPrice from '../assets/Svg/SbltLowprice';
import CenterWhite from '../assets/Svg/CenterWhite';
import SbltAmenities from '../assets/Svg/SbltAmenities';
import Sbltline from '../assets/Svg/SbltLine';
import SbltStar from '../assets/Svg/SbltStar';
import SbltSeats from '../assets/Svg/SbltSeats';
import MiddleDark from '../assets/Svg/MiddleDark';
import Middlebottomtri from '../assets/Svg/MiddleBottomTri';
// import ParveenLowPrice '../assets/Svg/ParveenLowPrice';
// import Transparentcard from '../assets/Svg/Transparentcard'; 

const Allbuses = ({ navigation }) => {
     // const navigation = useNavigation();
     const handleBackPress = () => {
        navigation.goBack();
    };


    const cardOptions = [
        { label: 'Filters', icon: <FilterIcon width={20} height={20} /> },
        { label: 'Sort', icon: <SortIcon width={23} height={23} /> },
        { label: 'Luxury Coach', icon: <LuxuryCoachIcon width={25} height={24} /> },
        { label: 'Non AC', icon: <NonACIcon width={20} height={20} /> },
        { label: 'Seater', icon: <SeaterIcon width={20} height={20} /> }, // Already included
        { label: 'SemiSleeper', icon: <SemiSleeperIcon width={20} height={20} /> },
        { label: 'Sleeper', icon: <SleeperIcon width={29} height={25} /> },
        { label: 'Day', icon: <DayIcon width={20} height={20} /> },
        { label: 'Night', icon: <NightIcon width={20} height={20} /> },
    ];

 
  return (
    <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.backbutton} onPress={handleBackPress}>
                    <Backarrow style={styles.Backarrow} width={40} height={55} />
                </TouchableOpacity>
                <View style={styles.wholeTopSection}>
                    <Text style={styles.headerText1}>{from || 'Select From'}</Text> {/* Dynamically display 'from' */}
                    <Image
                        source={require('../assets/Pictures/Line 47.png')}
                        style={styles.line47}
                        resizeMode="contain"
                    />
                    <Text style={styles.headerText2}>{to || 'Select To'}</Text> {/* Dynamically display 'to' */}
                </View>

                <Image
                    source={require('../assets/Header.png')}
                    style={styles.topImage}
                    resizeMode="cover"
                />
                <View style={styles.Rightcontent}>
                    <Dullbus style={styles.Dullbus} width={20} height={20} />
                    <Text style={styles.Busnumber}>133 Buses</Text>
                </View>
                <View style={styles.Leftcontent}>
                    <Text style={styles.Dayndate}>Tue 20 Feb</Text>
                </View>
            </View>

            <View style={styles.BottomSection}>
                {/* Advertisement Image */}
                <Image
                    source={require('../assets/Pictures/hnm.gif')}
                    style={styles.Dressimage}
                    resizeMode="contain"
                />

                <View style={styles.cardContainer}>
                    {/* Static Card for Filter */}
                    <View style={styles.staticCard}>
                        <FilterIcon style={styles.filterIcon} width={17} height={17} />
                    </View>

                    {/* Scrollable Card Options */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[styles.scrollViewContent, { paddingLeft: 20 }]}
                        style={styles.scrollView}
                    >
                        {cardOptions.map((option, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.card,
                                    index === 0 && { borderLeftColor: 'transparent' }
                                ]}
                            >
                                {/* Left icon */}
                                <View style={styles.iconContainer}>
                                    {index !== 0 && option.icon} {/* Skip left icon for the first card */}
                                </View>

                                {/* Card text */}
                                <Text style={styles.cardText}>{option.label}</Text>


                                {index < 2 && (
                                    <View style={styles.rightIconContainer}>
                                        <DropDownIcon width={13} height={13} /> {/* Replace with your right SVG */}
                                    </View>
                                )}
                            </View>
                        ))}
                    </ScrollView>




                </View>
                <View style={styles.TopVrl}>
                    <TopVrl
                        width={39}
                        height={33}
                    // resizeMode="contain"
                    />

                </View>

                <View style={styles.BlueTri}>
                    <BlueTri
                        width={30}
                        height={30} />
                </View>
                <View style={styles.Topbluerect}>
                    <Topblue
                        width={280}
                        height={170}
                        resizeMode="contain" // Adjust based on your needs
                    />
                </View>
                <View style={styles.VrlBusoperator}>
                    <Text style={styles.VrlBusoperatorText} >Bus Operator</Text>

                </View>

                <View style={styles.VrlTravels}>
                    <Text style={styles.VrlTravelsText}>VRL Travels</Text>

                </View>

                <View style={styles.AC}>
                    <Text style={styles.ACText}>A/C Sleeper (2+1) </Text>

                </View>
                <View style={styles.StarOnePic}>
                    <StarOne style={styles.FirstStar}
                        width={100}
                        height={65}
                        resizeMode="contain"

                    />
                </View>
                <View style={styles.SeatOne}>
                    <SeatOne style={styles.FirstSeat}
                        width={100}
                        height={70}
                        resizeMode="contain"

                    />

                </View>
                <View style={styles.Window}>
                    <Text style={styles.Windowseattext}
                        width={100}
                        height={90}
                        resizeMode="contain"
                    >8 Window Seats</Text>

                </View>


                <View style={styles.FirstBus}>
                    <VrlTimeBus style={styles.VrlFirstBus}
                        width={270}
                        height={100}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.LineOne}>
                    <Line style={styles.FirstCardLine}
                        width={50}
                        height={100}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.FirstPrice}>
                    <Firstcardprice style={styles.Firstcardprice}
                        width={120}
                        height={110}
                        resizeMode="contain"
                    />

                </View>

                <View style={styles.FirstBluerect}>
                    <DownBluerect style={styles.VrlDownBluerect}
                    />
                </View>

                <View style={styles.VrlGrayrect}>
                    <Grayrect style={styles.VrlFirstGrayrect} />
                </View>
                <View style={styles.VrlRupee}>
                    <Text style={styles.VrlPriceTag} onPress={() => navigation.navigate('JourneyDetails')}>₹1700</Text>
                </View>
                <View style={styles.VrlStarting}>
                    <Text style={styles.VrlFirstStarting}>Starting @</Text>
                </View>

                <View style={styles.Amenity}>
                    <Amenities style={styles.Amenities}
                        width={317}
                        height={180}
                        resizeMode="contain"
                    />

                </View>
                <View style={styles.VrlDownTriangle}>
                    <VrlDowntri style={styles.VrlDowntri} />

                </View>



                {/* <View>
                    <LottieView
                    source={require('../assets/Animation/Pumkin.json')}
                    autoplay
                    loop
                    style={{height:200,width:100}}
                    />
                </View> */}

                {/* First Bus Card */}
                <View style={styles.Firstcard}>

                </View>
                <View style={styles.Secondcard}>
                    <SBLTcardbase style={styles.SBLTcardbase}
                        width={470}
                        height={184}
                        resizeMode="contain" />


                </View>
                <View style={styles.TransparentCard}>
                    <Image
                        source={require('../assets/Pictures/cc.png')}
                        style={styles.Transparent}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.MiddleTopWhite}>
                    <MiddleWhiteRect style={styles.MiddleWhiteRect}
                        width={270}
                        height={170}
                        resizeMode="contain" />


                </View>

                <View style={styles.MiddleGrayTri}>
                    <TopGrayTri style={styles.TopGrayTri}
                        width={30}
                        height={27} />
                </View>


                <View style={styles.SBLTBusOperator}>
                    <Text style={styles.SBLTOperatortext}>Bus Operator</Text>

                </View>

                <View style={styles.SBLTTravels}>
                    <Text style={styles.SBLTTravelsText}>SBLT Travels</Text>
                </View>
                <View style={styles.SecondcardSblt}>
                    <SbltLogo style={styles.SbltLogo}
                    />

                </View>
                <View style={styles.SbltAC}>
                    <Text style={styles.SbltActext}>A/C Sleeper (2+1)</Text>

                </View>
                <View style={styles.SecondcardBus}>
                    <SbltBus style={styles.SbltBus}
                        width={260}
                        height={100}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.SecondCardLowPrice}>
                    <SbltLowPrice style={styles.SbltLowPrice}
                        width={120}
                        height={110}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.SecondCardMiddleWhite}>
                    <CenterWhite style={styles.CenterWhite}
                        width={330}
                        height={60}
                    />
                </View>

                <View style={styles.SecondCardLine}>
                    <Sbltline style={styles.SbltLine}
                        width={50}
                        height={89}
                    />

                </View>
                <View style={styles.SecondCardStar} >
                    <SbltStar style={styles.SbltStar}
                        width={100}
                        height={65}
                    />
                </View>
                <View style={styles.SecondcardSeats}>
                    <SbltSeats style={styles.SbltSeats}
                        width={100}
                        height={70}
                    />

                </View>

                <View style={styles.SecondcardWindowSeats}>
                    <Text style={styles.SbltWindowSeatstext}
                        width={100}
                        height={90}>5 Window Seats</Text>

                </View>

                <View style={styles.SecondCardstarting}>
                    <Text style={styles.SbltStarting}>Starting @</Text>

                </View  >

                <View style={styles.SecondCardDark}>
                    <MiddleDark style={styles.SbltMiddleDark}
                    />
                </View>
                <View style={styles.SecondCardRupee}>
                    <Text style={styles.SbltRupee} onPress={() => navigation.navigate('GoldenJourneyDetails')}>₹2,650</Text>
                </View>
                <View style={styles.MiddleCardAmenities}>
                    <SbltAmenities style={styles.SbltAmenities}
                        width={317}
                        height={180}
                        resizeMode="contain" />
                </View>

                <View style={styles.SbltBottomTri}>
                    <Middlebottomtri style={styles.Middlebottomtri}
                    />
                </View>
                <View style={styles.MovingArrowTwo}>
                    <Image
                        source={require('../assets/Animation/arrow.gif')}
                        style={[styles.RightArrowTwo, { transform: [{ rotate: '-90deg' }] }]}
                        resizeMode="contain" />
                </View>
                <View style={styles.MovingArrow}>
                    <Image
                        source={require('../assets/Animation/arrow.gif')}
                        style={[styles.RightArrow, { transform: [{ rotate: '-90deg' }] }]}
                        resizeMode="contain" />
                </View>
                <View style={styles.MovingArrowThree}>
                    <Image
                        source={require('../assets/Animation/arrow.gif')}
                        style={[styles.RightArrowThree, { transform: [{ rotate: '-90deg' }] }]}
                        resizeMode="contain" />
                </View>

                <View style={styles.Thirdcard}>
                    <View style={styles.Thirdcardrect}>
                        <Thirdcardrect style={styles.ThirdcardTopRect}
                            width={280}
                            height={170}
                            resizeMode="contain" />
                    </View>





                    <View style={styles.ThirdcardLogo}>
                        <ParveenLogo style={styles.ParveenLogo}
                            width={39}
                            height={33}
                        />
                    </View>
                    <View style={styles.Righttri}>
                        <ParveenRighttri style={styles.ParveenRighttri}
                            width={30}
                            height={30}
                        />

                    </View>
                    <View>
                        <ParveenBus style={styles.ParveenBus}
                            width={260}
                            height={100}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.ThirdBusOperator}>
                        <Text style={styles.ParveenBusOperator}>Bus Operator</Text>
                    </View>

                    <View style={styles.ParveenTravels}>
                        <Text style={styles.ParveenTravelsText}>Parveen Travels</Text>

                    </View>
                    <View style={styles.ParveenAC}>
                        <Text style={styles.ParveenACText}>A/C Sleeper (2+1) </Text>

                    </View>
                    <View style={styles.ParveenLow}>
                        <ParveenLowPrice style={styles.ParveenLowPrice}
                            width={120}
                            height={110}
                            resizeMode="contain"
                        />

                    </View>
                    <View style={styles.LineforParveen}>
                        <ParveenLine style={styles.ParveenLine}
                            width={50}
                            height={95}
                            resizeMode="contain"
                        />

                    </View>

                    <View style={styles.ParveenOnlyStar}>
                        <ParveenStar style={styles.ParveenStar}
                            width={100}
                            height={65}
                            resizeMode="contain"

                        />
                    </View>

                    <View style={styles.ParveenSeatsLeft}>
                        <ParveenSeats style={styles.ParveenSeats}
                            width={100}
                            height={70}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.ThirdWindow}>
                        <Text style={styles.ThirdWindowText}>4 Window Seats</Text>
                    </View>

                    <View style={styles.ParveenDownrect}>
                        <ParveenBottomBluerect style={styles.ParveenBottomBluerect} />
                    </View>

                    <View style={styles.ParveenGrayRect}>
                        <ThirdGrayrect style={styles.ThirdGrayrect} />
                    </View>
                    <View style={styles.parveenAmenity}>
                        <ThirdAmenity style={styles.ThirdAmenity}
                            width={317}
                            height={180}
                            resizeMode="contain"
                        />


                    </View>

                    <View style={styles.ParveenStarting}>
                        <Text style={styles.ParveenStartingText} >Starting @</Text>

                    </View>

                    <View style={styles.ParveenPrice}>
                        <Text style={styles.ParveenPriceText} onPress={() => navigation.navigate('Jack')}>₹1870</Text>
                    </View>
                    <View style={styles.BottomTri}>
                        <ParveenDowntri style={styles.ParveenDownTri} />
                    </View>
                </View>
                {/* <View style={styles.Transparentcard}>
                <Transparentcard  style={styles.SBLTTransparentcard} 
                width={530}
                height={183}
                resizeMode="contain"
                />

              </View> */}


                {/* Cards for Other Images */}
                {/* <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/Pictures/sgsg.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/Pictures/gfgfgf.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/Pictures/pf.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View> */}
            </View>
        </View >

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: 0.1,
        backgroundColor: '#1f487c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText1: {
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        marginTop: 15,
    },
    headerText2: {
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        marginTop: 17,
    },
    line47: {
        height: '25%',
        width: '35%',
        marginVertical: 10,
        marginTop: 35,
        position: 'absolute',
        marginLeft: 105,
    },
    topImage: {
        height: '40%',
        width: '100%',
    },
    wholeTopSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginBottom: 14,
        marginRight: -30,
    },
    Backarrow: {
        marginTop: 15,
        marginLeft: -210,
        position: 'absolute',
    },
    BottomSection: {
        flex: 1.4,
        backgroundColor: '#e5fff1',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 20,
    },
    Dullbus: {
        marginLeft: 130,
        marginTop: -14,
    },
    Busnumber: {
        fontSize: 18,
        color: '#AAAAAA',
        fontWeight: '600',
        marginLeft: 10,
        marginTop: -13,
    },
    Dayndate: {
        fontSize: 18,
        color: '#AAAAAA',
        fontWeight: '600',
        marginLeft: 1,
        marginTop: -28,
    },
    Rightcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 130,
        position: 'absolute',
        marginTop: 45,
    },
    Leftcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 220,
        position: 'absolute',
        marginTop: 53,
    },
    Dressimage: {
        height: 120,
        width: '97%',
        borderRadius: 20,
        zIndex: 1,
        marginBottom: -40,
        marginTop: -20,
    },

    cardContainer: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        zIndex: 2,
        marginLeft: -30,
        justifyContent: 'center', // Center the icon

    },
    rightIconContainer: {
        marginLeft: 10,
    },
    scrollViewContent: {
        paddingHorizontal: 2,
        paddingRight: 10, // Add paddingRight for consistent spacing
        marginLeft: -13,

    },
    scrollView: {
        flexGrow: 1,
    },
    staticCard: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: -6,
        marginTop: 1,
        borderColor: '#1f487c',
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        borderRightColor: 'transparent',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginLeft: -2,
        paddingHorizontal: 10,
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1f487c',
        borderWidth: 0.05,
        flexDirection: 'row', // Arrange icon and text in a row
        marginRight: 10, // Space between cards
        justifyContent: 'center', // Center contents vertically
        alignItems: 'center',
        // marginTop:-3
    },
    cardText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1f487c',
        marginLeft: 2, // Spacing between icon and text
        textAlign: 'center',
    },
    iconContainer: {
        marginBottom: 3,
    },

    imageContainer: {
        flexDirection: 'column', // Stacking images vertically
        width: '90%', // Ensure images take appropriate width
        alignItems: 'center', // Center-align images
    },
    cardImage: {
        height: 220,
        width: '105%', // Use 100% width to fill the container
        marginTop: 10,
    },
    Firstcard: {
        backgroundColor: '#fff',
        borderRadius: 25, // Corrected here
        padding: 0,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
        borderColor: '#899499',
        borderWidth: 2,
        width: '94%',
        height: 200,
        marginTop: 170,
        zIndex: 1,
        marginLeft: -10,
        position: "absolute",
    },
    Thirdcard: {
        backgroundColor: '#fff',
        borderRadius: 25, // Corrected here
        padding: 0,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
        borderColor: '#899499',
        borderWidth: 2,
        width: '94%',
        height: 200,
        marginTop: 620,
        zIndex: 1,
        marginLeft: -10,
        position: "absolute",
    },
    Topbluerect: {
        position: 'absolute',
        // Adjust these properties as needed
        // justifyContent: 'center', // or 'flex-start' based on your need
        // alignItems: 'center',
        padding: 0,  // Make sure there's no padding
        margin: 0,   // Make sure there's no margin
        // Other styles...
        marginTop: 85,
        marginLeft: -134,
        zIndex: 2,

    },
    TopVrl: {
        zIndex: 4,
        marginTop: -25,
        marginRight: -95,
        //   marginRight:-40,
    },

    BlueTri: {
        marginRight: -171,
        marginTop: -40,
    },
    VrlBusoperator: {
        zIndex: 4,
        marginTop: -30,
        marginRight: 310,
        color: "white",

    },


    VrlBusoperatorText: {
        color: "white",
        fontSize: 12,
        marginLeft: -10,
        marginTop: 5,
    },
    VrlTravels: {
        zIndex: 4,
        marginLeft: -295,
        marginTop: -5,
    },

    VrlTravelsText: {
        fontSize: 19,
        fontWeight: "450",
        color: "white",
    },
    ACText: {
        color: '#1f487c'

    },
    AC: {
        zIndex: 4,
        marginLeft: -130,
        marginTop: 1,
    },
    StarOnePic: {
        zIndex: 2,
        // marginLeft:90,
    },
    FirstStar: {
        marginLeft: 273,
        marginTop: -43,
    },
    SeatOne: {
        zIndex: 2,
    },
    FirstSeat: {
        marginLeft: 275,
        marginTop: -30,
    },
    FirstBus: {
        zIndex: 2,
    },
    VrlFirstBus: {
        marginLeft: -130,
        marginTop: -90,
    },
    Window: {
        zIndex: 2,
    },

    Windowseattext: {
        marginLeft: 278,
        marginTop: -10,
        color: '#1f487c',
        fontWeight: "653",
        fontSize: 14,
    },
    LineOne: {
        zIndex: 2,
    },
    FirstCardLine: {
        marginLeft: 157,
        marginTop: -110,
    },
    FirstPrice: {
        zIndex: 3,
    },
    FirstBluerect: {
        zIndex: 2,
    },
    VrlDownBluerect: {
        marginTop: -75,
        marginRight: -72,
    },

    Firstcardprice: {
        marginLeft: -210,
        marginTop: -35,
    },
    VrlGrayrect: {
        zIndex: 3,
    },
    VrlFirstGrayrect: {
        marginTop: -75,
        marginLeft: 280,
    },
    VrlRupee: {
        zIndex: 4,
    },
    VrlPriceTag: {

        color: 'white',
        fontWeight: "500",
        fontSize: 22,
        marginTop: -74,
        marginLeft: 240,
    },
    VrlStarting: {
        zIndex: 3,
    },
    VrlFirstStarting: {
        marginTop: -71,
        fontSize: 18,
        color: 'white',
        fontWeight: "150",
        marginLeft: 40,
    },
    Amenity: {
        zIndex: 2,
    },

    Amenities: {
        marginTop: -108,
        marginLeft: 62,
    },
    VrlDownTriangle: {
        zIndex: 2,
    },
    VrlDowntri: {
        marginLeft: 400,
        marginTop: -111,
    },
    SBLTcardbase: {
        zIndex: 0,
        marginTop: -35,
        marginLeft: -6,
    },
    // Transparentcard:{
    //    zIndex:1, 
    // },

    Thirdcardrect: {
        zIndex: 2,

    },
    ThirdcardTopRect: {
        marginLeft: -1,
        marginTop: -92,

    },
    ThirdcardLogo: {
        zIndex: 3,
    },
    ParveenLogo: {
        marginTop: -101,
        marginLeft: 230,
    },
    ParveenRighttri: {
        marginLeft: 277,
        marginTop: -108,
    },
    ParveenBus: {
        marginTop: -60,
        marginLeft: 10,
    },
    ThirdBusOperator: {
        zIndex: 3,
    },
    ParveenBusOperator: {
        marginTop: -143,
        marginLeft: 10,
        color: 'white',
        fontSize: 12,
    },
    ParveenTravels: {
        zIndex: 3,
    },
    ParveenTravelsText: {
        marginTop: -133,
        fontWeight: "600",
        fontSize: 20,
        marginLeft: 10,
        color: 'white',
    },
    ParveenAC: {
        zIndex: 2,

    },
    ParveenACText: {
        color: '#1f487c',
        marginTop: -101,
        marginLeft: 90,

    },
    ParveenLow: {
        zIndex: 2,
    },
    ParveenLowPrice: {
        marginLeft: -5,
        marginTop: -35,
    },
    LineforParveen: {
        zIndex: 2,
    },
    ParveenLine: {
        marginLeft: 258,
        marginTop: -178,

    },
    ParveenOnlyStar: {
        zIndex: 2,
    },
    ParveenStar: {
        marginLeft: 290,
        marginTop: -200,
    },
    ParveenSeatsLeft: {
        zIndex: 2,
    },
    ParveenSeats: {
        marginLeft: 290,
        marginTop: -168,
    },
    ThirdWindow: {
        zIndex: 2,
    },
    ThirdWindowText: {
        color: '#1f487c',
        fontWeight: "653",
        fontSize: 14,
        marginLeft: 290,
        marginTop: -110,
    },
    ParveenDownrect: {
        zIndex: 1,
    },

    ParveenBottomBluerect: {
        marginTop: -75,
        marginLeft: 70,
    },
    ParveenGrayRect: {
        zIndex: 2,
    },
    ThirdGrayrect: {
        marginLeft: 275,
        marginTop: -75,
    },
    parveenAmenity: {
        zIndex: 2,
    },
    ThirdAmenity: {
        marginLeft: 85,
        marginTop: -110,
    },


    ParveenStarting: {
        zIndex: 3,
    },
    ParveenStartingText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "150",
        marginTop: -142,
        marginLeft: 180,
    },
    ParveenPrice: {
        zIndex: 4,
    },
    ParveenPriceText: {
        color: 'white',
        marginLeft: 290,
        marginTop: -143,
        fontWeight: "700",
        fontSize: 22,

    },
    BottomTri: {
        marginLeft: 400,
        marginTop: -110,
    },
    TransparentCard: {
        zIndex: 3,
    },
    Transparent: {
        width: 404,
        height: 489,
        marginTop: -339,
        marginLeft: -6,
    },
    MiddleTopWhite: {
        zIndex: 3,
    },
    MiddleWhiteRect: {
        marginTop: -425,
        marginLeft: -138,
        // borderRadius:120,
        // overflow:"Hidden",
    },
    MiddleGrayTri: {
        zIndex: 3,
    },
    TopGrayTri: {
        marginTop: -360,
        marginLeft: 152,
    },
    SBLTBusOperator: {
        zIndex: 4,
    },
    SBLTOperatortext: {
        marginTop: -357,
        color: '#393939',
        marginLeft: -195,
        fontSize: 12,
    },
    SBLTTravels: {
        zIndex: 4,
    },
    SBLTTravelsText: {
        fontSize: 18,
        fontWeight: "650",
        marginTop: -345,
        color: '#393939',
        marginLeft: -195,
    },
    SecondcardSblt: {
        zIndex: 4,
    },
    SbltLogo: {
        marginTop: -350,
        marginLeft: 70,
    },
    SbltAC: {
        zIndex: 3,
    },
    SbltActext: {
        color: '#393939',
        marginTop: -320,
        marginLeft: -110,
    },
    SecondcardBus: {
        zIndex: 3,
    },
    SbltBus: {
        marginTop: -320,
        marginLeft: -135,
    },
    SecondCardLowPrice: {
        zIndex: 4,
    },
    SbltLowPrice: {
        marginTop: -266,
        marginLeft: -213,
    },
    SecondCardMiddleWhite: {
        zIndex: 3,
    },
    CenterWhite: {
        marginLeft: 56,
        marginTop: -240,
        borderTopLeftRadius: 580,
        borderBottomLeftRadius: 580,
    },
    SecondCardLine: {

        zIndex: 3,
    },
    SbltLine: {
        marginLeft: 150,
        // borderColor:'red',
        marginTop: -325,

    },
    SecondCardStar: {
        zIndex: 3,
    },
    SbltStar: {
        marginLeft: 274,
        marginTop: -340,
    },
    SecondcardSeats: {
        zIndex: 3,

    },
    SbltSeats: {
        marginTop: -310,
        marginLeft: 275,
    },
    SecondcardWindowSeats: {
        zIndex: 3,
    },
    SbltWindowSeatstext: {
        color: '#393939',
        marginTop: -256,
        marginLeft: 273,
        fontWeight: "653",
        fontSize: 13,
    },
    SecondCardstarting: {
        zIndex: 3,

    },
    SbltStarting: {
        marginLeft: 45,
        marginTop: -224,
        color: '#393939',
        fontSize: 18,
        fontWeight: "400",

    },
    SecondCardDark: {
        zIndex: 4,
    },
    SbltMiddleDark: {
        marginTop: -227,
        marginLeft: 285,
    },
    SecondCardRupee: {
        zIndex: 5,
    },
    SbltRupee: {
        marginTop: -226,
        color: 'white',
        fontWeight: "600",
        fontSize: 22,
        marginLeft: 250,
    },
    MiddleCardAmenities: {
        zIndex: 3,
    },
    SbltAmenities: {
        marginTop: -260,
        marginLeft: 50,
    },
    SbltBottomTri: {
        zIndex: 3,
    },
    Middlebottomtri: {
        marginTop: -195,
        marginLeft: 404,
    },
    MovingArrow: {
        zIndex: 4,
    },
    MovingArrowTwo: {
        zIndex: 4,
    },
    MovingArrowThree: {
        zIndex: 4,
    },
    RightArrow: {
        height: 70,
        width: 55,
        marginTop: -15,
        marginLeft: 345,

    },
    RightArrowTwo: {
        height: 70,
        width: 55,
        marginTop: -245,
        marginLeft: 357,
    },
    RightArrowThree: {
        height: 70,
        width: 55,
        marginTop: -518,
        marginLeft: 345,
    },
    // Arrow:{
    // width: 30,
    // height: 30,
    // marginTop:-50,
    // },
});


export default Allbuses;
