
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For arrow icons
import LuxuryTopGold from "../assets/Svg/LuxuryTopGold";
import BackGroundArrow from "../assets/Svg/BackGroundArrow";
import GoldenBackArrow from "../assets/Svg/GoldenBackArrow";
import LuxuryTravelerDetailsBus from "../assets/Svg/LuxuryTravelerDetailsBus";
import ParveenPink from "../assets/Svg/ParveenPink";
import LuxuryTravelerLine from "../assets/Svg/LuxuryTravelerLine";
import TravellerCoupon from "../assets/Svg/TravellerCoupon"; // Add this import
import LuxuryApplyBackground from "../assets/Svg/LuxuryApplyBackground";
import TravellerWhatsapp from '../assets/Svg/TravellerWhatsapp'; // Assuming this is your custom icon component
import GenderBackGround from "../assets/Svg/GenderBackGround";
import Icon from 'react-native-vector-icons/FontAwesome';
import GoldenAddNewPassenger from "../assets/Svg/GoldenAddNewPassenger";
import LuxuryBottoncard from "../assets/Svg/LuxuryBottomcard";

const LuxuryTravelerDetails = ({ navigation }) => {
    const [isCard1Expanded, setIsCard1Expanded] = useState(false);
    const [isCard2Expanded, setIsCard2Expanded] = useState(false);
    const [isCardExpanded, setIsCardExpanded] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState(""); // Define state for input text
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [toggleBackgroundColor, setToggleBackgroundColor] = useState('#ddd');
    const [circleTranslate] = useState(new Animated.Value(0));
    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [passengers, setPassengers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({ nameError: '', ageError: '', genderError: '' });
    const [isChecked, setIsChecked] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false, false]);


    const handleCheckboxToggle = () => {
        setIsChecked((prev) => !prev); // Toggle the checkbox state
    }










    const handleCheckboxChange = (index) => {
        setCheckboxStates((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = !updatedState[index]; // Toggle the state of the clicked checkbox
            return updatedState;
        });
    };


    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    const validateName = (text) => /^[a-zA-Z\s]+$/.test(text);
    const validateAge = (text) => /^\d+$/.test(text) && parseInt(text, 10) > 0 && parseInt(text, 10) <= 120;



    const handleAddPassenger = () => {
        let isValid = true;

        // Reset errors
        setErrors({ nameError: '', ageError: '', genderError: '' });


        if (passengers.some(p => p.name === name && p.age === age && p.gender === selectedGender)) {
            alert('Passenger with the same details already exists');
            return;
        }

        // Validate Name
        if (!name) {
            setErrors(prevState => ({ ...prevState, nameError: 'Name is required' }));
            isValid = false;
        } else if (!validateName(name)) {
            setErrors(prevState => ({ ...prevState, nameError: 'Invalid name format' }));
            isValid = false;
        }

        // Validate Age
        if (!age) {
            setErrors(prevState => ({ ...prevState, ageError: 'Age is required' }));
            isValid = false;
        } else if (!validateAge(age)) {
            setErrors(prevState => ({ ...prevState, ageError: 'Invalid age (1-120)' }));
            isValid = false;
        }

        // Validate Gender
        if (!selectedGender) {
            setErrors(prevState => ({ ...prevState, genderError: 'Gender is required' }));
            isValid = false;
        }

        // If all fields are valid, add the passenger
        if (isValid) {
            if (passengers.length < 6) {
                setPassengers(prevPassengers => [
                    ...prevPassengers,
                    { name, age, gender: selectedGender }
                ]);

                // Clear the input fields
                setName('');
                setAge('');
                setSelectedGender('');
            } else {
                alert('Maximum of 6 passengers can be added');
            }
        }
    };




    const handleNameChange = (text) => {
        setName(text);
        if (!validateName(text)) {
            setNameError('Please enter a valid name (letters and spaces only).');
        } else {
            setNameError('');
        }
    };

    const handleAgeChange = (text) => {
        setAge(text);
        if (!validateAge(text)) {
            setAgeError('Please enter a valid age (1-120).');
        } else {
            setAgeError('');
        }
    };




    const handleToggle = () => {
        setIsActive(!isActive);
        setToggleBackgroundColor(isActive ? '#ddd' : '#12DC00'); // Example color change
        Animated.spring(circleTranslate, {
            toValue: isActive ? 0 : 50, // Toggle position
            useNativeDriver: true,
        }).start();
    };


    const handleEmailChange = (text) => {
        setEmail(text);
        if (!validateEmail(text)) {
            setEmailError('Please enter a valid email.');
        } else {
            setEmailError('');
        }
    };

    const handleMobileChange = (text) => {
        setMobile(text);
        if (!validateMobile(text)) {
            setMobileError('Please enter a valid 10-digit mobile number.');
        } else {
            setMobileError('');
        }
    };

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen  
    };

    return (
        <View style={styles.container}>
            {/* Luxury Top Background */}
            <LuxuryTopGold style={styles.luxuryTopGold} height={200} width={450} />

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                <GoldenBackArrow height={40} width={60} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Traveler Details</Text>

            {/* Transparent Image */}
            <Image
                style={styles.transparentImage}
                source={require("../assets/Pictures/Trans111.png")} // Ensure this path is correct
            />

            {/* Background Arrow */}
            <BackGroundArrow style={styles.backgroundArrow} />

            {/* Cards */}
            <View style={styles.cardContainer}>
                {/* Card 1 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => setIsCard1Expanded(!isCard1Expanded)}
                >
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Journey Details</Text>
                        <Ionicons
                            name={isCard1Expanded ? "chevron-up" : "chevron-down"}
                            size={24}
                            color="#333"
                        />
                    </View>
                    {isCard1Expanded && (
                        <View style={styles.cardContentContainer}>
                            <ParveenPink style={styles.ParveenPink} />
                            <Text style={styles.ParveenHeader}>PARVEEN TRAVELS</Text>
                            <Text style={styles.Ac}>AC Sleeper (2+1)</Text>
                            <LuxuryTravelerDetailsBus style={styles.LuxuryTravelerDetailsBus} />
                            <LuxuryTravelerLine style={styles.LuxuryTravelerLine} />
                            <Text style={styles.SeatNumber}>Seat Number(s)</Text>
                            <Text style={styles.Sleeper}>L18 | Sleeper</Text>
                            <Text style={styles.BoardingPoint}>Boarding Point & Time</Text>
                            <Text style={styles.DroppingPoint}>DroppingPoint & Time</Text>
                            <View style={styles.Places}>
                                <Text style={styles.Chennai}>Chennai: 6:20 AM</Text>
                                <Text style={styles.Hyderabad}>Hyderabad: 1:30 PM</Text>
                            </View>
                        </View>
                    )}
                </TouchableOpacity>

                {/* Card 2: Offers with Scrollable Coupons */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => setIsCardExpanded(!isCardExpanded)}
                >
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Offers</Text>
                        <Ionicons
                            name={isCardExpanded ? "chevron-up" : "chevron-down"}
                            size={24}
                            color="#333"
                        />
                    </View>
                    {isCardExpanded && (
                        <View style={styles.cardContentContainer}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.scrollViewContent}
                                keyboardShouldPersistTaps="handled"
                            >
                                <TravellerCoupon />
                                <TravellerCoupon />
                                <TravellerCoupon />
                            </ScrollView>

                            <Text style={styles.couponTextLabel}>Do you have a coupon code?</Text>

                            <TextInput
                                style={[styles.input, isFocused && { borderColor: "#1F487C" }]}
                                placeholder="Enter Promo Code"
                                placeholderTextColor="#888"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                value={inputText}
                                onChangeText={setInputText}
                            />
                            <TouchableOpacity>
                                <LuxuryApplyBackground style={styles.ApplyBackGround} height={85} width={100} />
                                <Text style={styles.ApplyText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </TouchableOpacity>

                {/* Card 3: Scrollable Passenger Details */}
                <View style={[styles.card, styles.scrollableCard]}>
                    <Text style={styles.cardTitle}>Passenger Details</Text>
                    <ScrollView style={styles.PassengercardContentScroll}>
                        <Text style={styles.cardContent}>
                            <Text style={styles.ContactDetails}>Contact Details</Text>
                            <TextInput
                                style={styles.EmailInput}
                                placeholder="Email Id*"
                                placeholderTextColor="black"
                                value={email}
                                onChangeText={handleEmailChange}
                            />
                            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                            <TextInput
                                style={styles.Mobile}
                                placeholder="Mobile Number*"
                                placeholderTextColor="black"
                                value={mobile}
                                onChangeText={handleMobileChange}
                                keyboardType="numeric"
                            />

                            {mobileError ? <Text style={styles.errorText}>{mobileError}</Text> : null}


                            <View style={styles.toggleWrapper}>
                                <TouchableOpacity onPress={handleToggle}>
                                    <Animated.View
                                        style={[
                                            styles.toggleBar,
                                            { backgroundColor: toggleBackgroundColor },
                                        ]}
                                    >
                                        {isActive && (
                                            <Text style={[styles.toggleText, { left: 10, color: "white" }]}>
                                                Yes
                                            </Text>
                                        )}
                                        {!isActive && (
                                            <Text style={[styles.toggleText, { right: 10, color: "#808080" }]}>
                                                No
                                            </Text>
                                        )}
                                        <Animated.View
                                            style={[
                                                styles.toggleCircle,
                                                {
                                                    transform: [{ translateX: circleTranslate }],
                                                },
                                            ]}
                                        >
                                            <TravellerWhatsapp width={22} height={22} />
                                        </Animated.View>
                                    </Animated.View>
                                </TouchableOpacity>
                            </View>


                        </Text>
                        <Text style={styles.BookingText}
                            numberOfLines={1}
                            ellipsizeMode="tail">Your booking address will be sent to this email address and mobile number</Text>

                        <View style={styles.line}></View>
                        <Text style={styles.SeatText}>Seat No:18</Text>

                        <TextInput
                            placeholder="Traveler Name*"
                            value={name}
                            onChangeText={handleNameChange}
                            style={styles.Nameinput}
                        />
                        <Text style={styles.errorText}>{errors.nameError}</Text>

                        <TextInput
                            placeholder="Age*"
                            value={age}
                            keyboardType="numeric"
                            onChangeText={handleAgeChange}
                            style={styles.Ageinput}
                        />
                        <Text style={styles.errorText}>{errors.ageError}</Text>

                        <View style={styles.Gendercontainer}>
                            <View style={styles.GenderbuttonContainer}>
                                {/* Male Button */}
                                <TouchableOpacity
                                    style={[
                                        styles.genderButton,
                                        styles.leftButton,
                                        selectedGender === 'Male' && styles.selectedButton,
                                    ]}
                                    onPress={() => handleGenderSelect('Male')}
                                >
                                    {selectedGender === 'Male' && (
                                        <GenderBackGround
                                            style={styles.svgBackground}
                                            width="100%"
                                            height="100%"
                                        />
                                    )}
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            selectedGender === 'Male' && styles.selectedText,
                                        ]}
                                    >
                                        Male
                                    </Text>
                                </TouchableOpacity>

                                {/* Female Button */}
                                <TouchableOpacity
                                    style={[
                                        styles.genderButton,
                                        styles.rightButton,
                                        selectedGender === 'Female' && styles.selectedButton,
                                    ]}
                                    onPress={() => handleGenderSelect('Female')}
                                >
                                    {selectedGender === 'Female' && (
                                        <GenderBackGround
                                            style={styles.svgBackground}
                                            width="100%"
                                            height="100%"
                                        />
                                    )}
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            selectedGender === 'Female' && styles.selectedText,
                                        ]}
                                    >
                                        Female
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Gender Error Message */}
                            <Text style={styles.errorText}>{errors.genderError}</Text>
                        </View>


                        <View style={styles.SecondLine}></View>


                        {/* Add Passenger Button */}
                        {/* Add Passenger Button */}
                        <TouchableOpacity onPress={handleAddPassenger} style={styles.addButton}>
                            <GoldenAddNewPassenger style={styles.addButtonBackground} />
                            <View style={styles.addButtonContent}>
                                <Icon name="user" size={20} color="#fff" style={styles.ProfileIcon} /> {/* Profile Icon */}
                                <Icon name="plus" size={12} color="#fff" style={styles.icon} /> {/* Plus Icon */}
                                <Text style={styles.addButtonText}>Add new passenger</Text>
                            </View>
                        </TouchableOpacity>

                        {passengers.length > 0 && (
                            <View style={styles.passengerListContainer}>
                                {passengers.map((passenger, index) => (
                                    <View key={index} style={styles.passengerBox}>
                                        <View style={styles.passengerDetails}>
                                            <View
                                                style={[
                                                    styles.profileIcon,
                                                    passenger.gender === 'Male' ? styles.maleBackground : styles.femaleBackground,
                                                ]}
                                            >
                                                <Icon name="user-o" size={20} color="#fff" />
                                            </View>
                                            <View style={styles.passengerTextDetails}>
                                                <Text style={styles.NameinfoText}>{passenger.name}</Text>
                                                <Text style={styles.infoText}>
                                                    {passenger.gender}, {passenger.age} years
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.checkbox}
                                            onPress={handleCheckboxChange}
                                        >
                                            {isChecked ? (
                                                <Text style={styles.checkedSymbol}>✔</Text>
                                            ) : (
                                                <View style={styles.uncheckedBox} />
                                            )}
                                        </TouchableOpacity>

                                    </View>
                                ))}
                            </View>
                        )}


                        {/* If the max number of passengers is reached, show an alert */}
                        {passengers.length >= 6 && <Text style={styles.errorText}>You have reached the maximum of 6 passengers.</Text>}





                    </ScrollView>


                </View>

                <View style={styles.LastTermsCheck}>
                    <View style={styles.checkboxContainer}>
                        {/* Checkbox */}
                        <TouchableOpacity style={styles.checkbox} onPress={handleCheckboxToggle}>
                            {isChecked && <Text style={styles.checkedSymbol}>✔</Text>}
                        </TouchableOpacity>

                        {/* Terms & Conditions Text */}
                        <Text style={styles.text}>
                            I accept all the <Text style={styles.linkText}>Terms & Conditions</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.LastCard}>
                    <Text style={styles.FareHeading}>Fare Details</Text>
                </View>
                <View style={styles.cardContainer}>
                    {/* SVG Background */}
                    <LuxuryBottoncard style={styles.LastsvgBackground} width={420} />

                    {/* Card Content */}
                    <View style={styles.cardContent}>

                        <Text style={styles.LEighteen}>L18</Text>
                        <Text style={styles.Rupee}>₹ 800</Text>
                        <Text style={styles.SelectedSeat}>Selected Seat</Text>

                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5FFF1",
        padding: 20,
    },
    backButton: {
        position: "absolute",
        top: 35,
        left: -5,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        zIndex: 3,
    },
    luxuryTopGold: {
        position: "absolute",
        zIndex: 0,
        marginTop: -63,
        marginLeft: -20,
    },
    transparentImage: {
        alignSelf: "center",
        width: 420,
        height: 120,
        opacity: 0.7,
        zIndex: 1,
        marginTop: -90,
        marginLeft: -10,
    },
    backgroundArrow: {
        position: "absolute",
        marginTop: 20,
        left: 0,
        zIndex: 1,
        marginLeft: 28,
    },
    cardContainer: {
        marginTop: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '104%',
        marginLeft: -10,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#393939",
    },
    cardContentContainer: {
        marginTop: 10,
    },
    scrollViewContent: {
        flexDirection: "row",
        gap: 10,
    },
    couponTextLabel: {
        marginTop: 15,
        fontSize: 16,
        marginBottom: 10,
        color: "#393939",
        fontWeight: "700",
    },
    input: {
        width: '73%',
        height: 50,
        borderWidth: 2,
        borderColor: "#1F487C",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        marginTop: 10,
        borderStyle: "dashed",
        outline: "none",
        transition: "border-color 0.3s",
    },
    scrollableCard: {
        height: 510,
        paddingBottom: 5,
    },
    scrollView: {
        flex: 1,
        marginTop: 10,
    },
    ParveenHeader: {
        fontSize: 15,
        fontWeight: "700",
        marginTop: -34,
        marginLeft: 35,
        color: "#393939",
    },
    Ac: {
        fontSize: 12,
        marginLeft: 35,
        marginTop: -1,
    },
    LuxuryTravelerDetailsBus: {
        marginTop: 15,
    },
    ParveenPink: {
        marginLeft: 2,
    },
    LuxuryTravelerLine: {
        marginLeft: 250,
        marginTop: -60,
    },
    SeatNumber: {
        marginLeft: 270,
        fontSize: 13,
        marginTop: 45,
        position: "absolute",
    },
    Sleeper: {
        fontSize: 13,
        marginTop: 65,
        position: "absolute",
        marginLeft: 270,
        color: "#393939",
        fontWeight: "500",
    },
    BoardingPoint: {
        color: "#39393980",
        marginTop: 10,
    },
    DroppingPoint: {
        marginTop: -19,
        color: "#39393980",
        marginLeft: 220,
    },
    Chennai: {
        marginLeft: 5,
    },
    Hyderabad: {
        marginLeft: 120,
    },
    Places: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ApplyBackGround: {
        marginTop: -68,
        marginLeft: 270,
    },
    ApplyText: {
        fontSize: 17,
        color: "#393939",
        fontWeight: "700",
        marginTop: -53,
        marginLeft: 295,
    },
    ContactDetails: {
        marginTop: 10,
        color: "#393939",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 10,
    },
    EmailInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 10,
        marginBottom: 5,
        fontSize: 16,
        height: 50,
        width: "90%",
        marginLeft: 12,
        marginTop: 20,
    },
    Mobile: {
        height: 50,
        width: 280,
        paddingLeft: 10,
        borderRadius: 8,
        width: "60%",
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,



    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    PassengercardContentScroll: {
        maxHeight: 450, // Adjust height to control scrollable area
        marginTop: 10,
        padding: 10,
        // paddingBottom:-5,
    },

    toggleWrapper: {
        marginTop: -5,
        alignItems: 'center',
        marginLeft: 20,
        position: "absolute",
    },
    toggleBar: {
        height: 40,
        width: 90,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        position: 'relative',
        marginTop: 20,
    },
    toggleText: {
        position: 'absolute',
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleCircle: {
        position: 'absolute',
        top: 5,
        left: 5,
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BookingText: {
        color: "#39393980",
        fontSize: 11,
        marginLeft: -1,
        marginTop: 10,
    },
    line: {
        width: '110%',  // Full width of the parent container
        height: 1,      // Line thickness
        backgroundColor: '#1F487C80', // Line color
        marginTop: 10,
    },

    SecondLine: {
        width: '110%',  // Full width of the parent container
        height: 1,      // Line thickness
        backgroundColor: '#1F487C80',
        marginTop: 10,
    },
    SeatText: {
        color: "#393939",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 10,
        marginLeft: 10,
    },
    Nameinput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        height: 50,

    },
    Ageinput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        height: 50,
        width: "50%",
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,

    },
    Gendercontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    GenderbuttonContainer: {
        flexDirection: 'row',
        width: '40%',
        height: 40, // Increased height for better visibility
        borderWidth: 1, // Overall border for the container
        borderColor: '#000',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 200,
        marginTop: -70,
    },
    genderButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',

    },
    leftButton: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 0, // Removes border where buttons join
    },
    rightButton: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderLeftWidth: 0, // Removes border where buttons join
    },
    selectedButton: {
        backgroundColor: 'transparent', // Background will be transparent as SVG covers the button
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        zIndex: 1, // Ensures the text stays on top of the SVG
    },
    selectedText: {
        color: '#393939', // Changes text color for selected button
    },
    svgBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Places SVG behind the text
        height: 100,
        marginTop: -25,
    },
    addButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 10,
    },
    addButtonBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensures the SVG scales appropriately
    },
    addButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ProfileIcon: {
        marginRight: 5,
        color: '#393939',
    },
    icon: {
        marginRight: 5,
        color: '#393939',
    },
    addButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#393939',

    },
    passengerListContainer: {
        marginTop: 20,
    },
    passengerBox: {
        backgroundColor: '#fff',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '90%', // Adjust width to fit the screen
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    passengerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maleBackground: {
        backgroundColor: '#1F87E6',
    },
    femaleBackground: {
        backgroundColor: '#E61F6D',
    },
    passengerTextDetails: {
        marginLeft: 10,
    },
    NameinfoText: {
        fontSize: 16,
        fontWeight: '600',
    },
    infoText: {
        fontSize: 14,
        color: '#555',
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        marginTop: 10,
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
    },
    uncheckedBox: {
        width: 15,
        height: 15,
        backgroundColor: '#fff',
    },
    checkedSymbol: {
        fontSize: 14,
        color: '#000',
    },
    checkedSymbol: {
        fontSize: 18,
        color: 'green',
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 16,
    },
    linkText: {
        color: '#007BFF',
        // textDecorationLine: 'underline',
    },
    LastCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 0,
        paddingRight: 20,
        paddingLeft: 7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "106%",
        height: 40,
        marginLeft: -13,
        borderColor: "#1F487C",
        borderWidth: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginTop: 20,
        // position:"absolute",
    },
    FareHeading: {
        color: "#393939",
        fontSize: 17,
        fontWeight: "600",
        marginTop: -5,
    },
    BottomCard: {
        // backgroundColor: "#1F487C",
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 0,
        paddingRight: 20,
        paddingLeft: 7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "106%",
        height: 65,
        marginLeft: -13,
        borderColor: "#D89E2F",
        borderWidth: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginTop: -1,
    },
    text: {
        marginLeft: 10,
    },
    LastsvgBackground: {
        position: 'absolute',
        top: 0,
        left: -15,
        right: 0,
        bottom: 0,
        zIndex: -1, // Places SVG behind the text
        height: 100,
        marginTop: -25,
    },
    LastTermsCheck: {
        marginLeft: -140,
        marginTop: 10,
    },
    LEighteen: {
        position: "absolute",
    },
    Rupee: {
        position: 'absolute',
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 735,

    },


});

export default LuxuryTravelerDetails;
