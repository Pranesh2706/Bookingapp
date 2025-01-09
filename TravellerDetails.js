import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, } from "react-native";
import BackArrow from "../assets/Svg/Backarrow";
import BackGroundArrow from "../assets/Svg/BackGroundArrow";
import TravellerDownArrow from "../assets/Svg/TravellerDownArrow";
import TravellerUpArrow from "../assets/Svg/TravellerUpArrow";
import TravellerVrl from "../assets/Svg/TravellerVrl";
import TravellerBus from "../assets/Svg/TravellerBus";
import TravellerLine from "../assets/Svg/TravellerLine";
import TravellerCoupon from "../assets/Svg/TravellerCoupon";
import { TextInput } from "react-native-web";
import TravellerWhatsapp from '../assets/Svg/TravellerWhatsapp'; // Assuming this is your custom icon component
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomcardLine from '../assets/Svg/BottomcardLine';









const TravellerDetails = ({ navigation }) => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [inputText, setInputText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [displayName, setDisplayName] = useState("");
    const [displayAge, setDisplayAge] = useState("");
    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [travelerName, setTravelerName] = useState("");
    const [toggleBackgroundColor, setToggleBackgroundColor] = useState('#ddd');
    const [circleTranslate] = useState(new Animated.Value(0));
    const [selectedGender, setSelectedGender] = useState('');






    // State to store input values
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    // State to store error messages
    const [errors, setErrors] = useState({
        nameError: '',
        ageError: '',
        genderError: ''
    });

    // State to store the list of passengers
    const [passengers, setPassengers] = useState([]);

    // Handle Add Passenger button press
    const handleAddPassenger = () => {
        let isValid = true;

        // Reset errors
        setErrors({
            nameError: '',
            ageError: '',
            genderError: ''
        });

        // Validate Name
        if (!name) {
            setErrors(prevState => ({ ...prevState, nameError: 'Name is required' }));
            isValid = false;
        }

        // Validate Age
        if (!age) {
            setErrors(prevState => ({ ...prevState, ageError: 'Age is required' }));
            isValid = false;
        } else if (isNaN(age) || age <= 0) {
            setErrors(prevState => ({ ...prevState, ageError: 'Please enter a valid age' }));
            isValid = false;
        }

        // Validate Gender
        if (!gender) {
            setErrors(prevState => ({ ...prevState, genderError: 'Gender is required' }));
            isValid = false;
        }

        // If all fields are valid, add the passenger
        if (isValid) {
            if (passengers.length < 6) {
                setPassengers(prevPassengers => [
                    ...prevPassengers,
                    { name, age, gender }
                ]);

                // Clear the input fields
                setName('');
                setAge('');
                setGender('');
            } else {
                alert('Maximum of 6 passengers can be added');
            }
        }
    };









    // Handle form submission
    const handleSubmit = () => {
        if (!name.trim() || !age.trim() || !gender.trim()) {
            setError("Please fill all fields before adding.");
            return;
        }

        if (isNaN(age) || age <= 0) {
            setError("Please enter a valid age.");
            return;
        }

        if (passengers.length >= 6) { 
            setError("You can only add up to 6 passengers.");
            return;
        }

        // Add passenger to the list
        const newPassenger = { name, age, gender };
        setPassengers([...passengers, newPassenger]);

        // Reset the fields and error after successful addition
        setName("");
        setAge("");
        setGender("");
        setErrors("");
    };



    // Validate name (only alphabets)
    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

    // Validate age (only numbers)
    const validateAge = (age) => /^[0-9]+$/.test(age);

    // Handle form submission



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



    // const handleSubmit = () => {
    //     setDisplayName(displayName);
    //     setDisplayAge(displayAge);
    // };





    const validateEmail = (input) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(input);
    };

    const validateMobile = (input) => {
        const mobileRegex = /^[0-9]{10}$/;  // Validates 10 digit numbers
        return mobileRegex.test(input);
    };
    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };






    // Function to toggle the state
    const handleToggleChange = () => {
        setIsActive(prevState => !prevState);
    };

    const handlePress = () => {
        if (navigation) {
            navigation.goBack();
        }
    };


    const toggleCard = (card) => {
        setExpandedCard((prevCard) => (prevCard === card ? null : card));
    };

    const addPassenger = () => {
        if (travelerName && age && selectedGender) {
            setPassengers([
                ...passengers,
                { name: travelerName, age: age, gender: selectedGender }
            ]);
            setTravelerName("");
            setAge("");
            setSelectedGender(null);
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.backButton} onPress={handlePress}>
                    <BackArrow style={styles.BackArrow} height={40} width={90} />
                </TouchableOpacity>
                <BackGroundArrow style={styles.BackGroundArrow} />
                <Text style={styles.header}>Traveler Details</Text>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                {/* Card 1 */}
                <View style={[styles.card, expandedCard === "card1" && styles.expandedCard]}>
                    <TouchableOpacity onPress={() => toggleCard("card1")} style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>
                            Journey Details
                        </Text>
                        {expandedCard === "card1" ? (
                            <TravellerUpArrow style={styles.arrowIcon} />
                        ) : (
                            <TravellerDownArrow style={styles.arrowIcon} />
                        )}
                    </TouchableOpacity>
                    {expandedCard === "card1" && (
                        <View style={styles.cardContent}>
                            <TravellerVrl style={styles.TravellerVrl} height={40} width={60} />
                            <Text style={styles.VrlTravels}>VRL TRAVELS</Text>
                            <Text style={styles.AC}>A/C Sleeper (2+1)</Text>
                            <TravellerBus style={styles.TravellerBus} height={200} width={270} />
                            <Text style={styles.Seat}>Seat Number(s)</Text>
                            <Text style={styles.Sleeper}>L18 | Sleeper</Text>
                            <TravellerLine style={styles.TravellerLine} />

                            <Text style={styles.BoardingTime}>Boarding Point & Time</Text>
                            <Text style={styles.DroppingTime}>Dropping Point & Time</Text>
                            <Text style={styles.Place}>Chennai : 6:20 AM</Text>
                            <Text style={styles.DropPlace}>Hyderabad : 1:30 PM</Text>
                        </View>
                    )}
                </View>

                {/* Card 2 */}
                <View style={[styles.card, expandedCard === "card2" && styles.expandedCard]}>
                    <TouchableOpacity onPress={() => toggleCard("card2")} style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>
                            Offers
                        </Text>
                        {expandedCard === "card2" ? (
                            <TravellerUpArrow style={styles.arrowIcon} />
                        ) : (
                            <TravellerDownArrow style={styles.arrowIcon} />
                        )}
                    </TouchableOpacity>
                    {expandedCard === "card2" && (
                        <View style={styles.cardContent}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.ScrollViewContent}>
                                <TravellerCoupon style={styles.TravellerCoupon} />
                                <TravellerCoupon style={styles.TravellerCoupon} />
                                <TravellerCoupon style={styles.TravellerCoupon} />
                            </ScrollView>
                            <Text style={styles.CouponText}>Do you have a Coupon code?</Text>
                            <TextInput
                                style={[styles.Promoinput, isFocused && { borderColor: '#1F487C' }]}
                                placeholder="Enter Promo Code"
                                placeholderTextColor="#888"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                value={inputText}
                                onChangeText={(text) => setInputText(text)}
                            />
                            <TouchableOpacity style={styles.Apply}>
                                <Text style={styles.ApplyText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
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
                        <Text style={styles.SeatText}>Seat No.L18</Text>

                        <TextInput
                            style={styles.Naaminput}
                            placeholder="Traveller Name*"
                            value={name}
                            onChangeText={setName}
                        />
                        {errors.nameError ? <Text style={styles.errorText}>{errors.nameError}</Text> : null}

                        {/* Age Input */}
                        <TextInput
                            style={styles.Vayadhuinput}
                            placeholder="Age*"
                            value={age}
                            onChangeText={setAge}
                            keyboardType="numeric"
                        />
                        {errors.ageError ? <Text style={styles.errorText}>{errors.ageError}</Text> : null}
                        {/* Gender Selection */}

                        <View style={styles.genderContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.genderButton,
                                    styles.maleButton,
                                    gender === 'Male' && styles.selectedGender,
                                ]}
                                onPress={() => setGender('Male')}
                            >
                                <Text
                                    style={[
                                        styles.genderButtonText,
                                        gender === 'Male' && styles.selectedGenderText, // Change text color if selected
                                    ]}
                                >
                                    Male
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.genderButton,
                                    styles.femaleButton,
                                    gender === 'Female' && styles.selectedGender,
                                ]}
                                onPress={() => setGender('Female')}
                            >
                                <Text
                                    style={[
                                        styles.genderButtonText,
                                        gender === 'Female' && styles.selectedGenderText, // Change text color if selected
                                    ]}
                                >
                                    Female
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {errors.genderError ? <Text style={styles.errorText}>{errors.genderError}</Text> : null}


                        <View style={styles.SecondLine}></View>

                        {/* Add Passenger Button */}
                        <TouchableOpacity onPress={handleAddPassenger} style={styles.addButton}>
                            <Icon name="user" size={20} color="#fff" style={styles.Profileicon} /> {/* Profile Icon */}
                            <Icon name="plus" size={12} color="#fff" style={styles.icon} /> {/* Plus Icon */}
                            <Text style={styles.addButtonText}>Add new passenger</Text>
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
                                                {/* Profile icon inside circle */}
                                                <Icon name="user-o" size={20} color="#fff" />
                                            </View>
                                            <View style={styles.passengerTextDetails}>
                                                <Text style={styles.NameinfoText}>{passenger.name}</Text>
                                                <Text style={styles.infoText}>
                                                    {passenger.gender}, {passenger.age} years
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <TouchableOpacity style={styles.checkbox} />
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}

                        {/* If the max number of passengers is reached, show an alert */}
                        {passengers.length >= 6 && <Text style={styles.errorText}>You have reached the maximum of 6 passengers.</Text>}




                    </ScrollView>
                </View>


                <View style={styles.LastCard}>
                    <Text style={styles.FareHeading}>Fare Details</Text>
                </View>
                <View style={styles.BottomCard}></View>

                <TouchableOpacity onPress={() => navigation.navigate("TicketDetails")}>
                    <View style={styles.continueButton}>
                        <Text style={styles.continueText}>Continue</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.Rupee}>₹ 800</Text>
                <Text style={styles.LEighteen}>L18</Text>
                <Text style={styles.Selectedseat}>Selected Seat</Text>
                <Text style={styles.Price}>Price</Text>
                <BottomcardLine style={styles.BottomcardLine} />




            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topSection: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F487C",
        position: "relative",
    },
    bottomSection: {
        flex: 1,
        padding: 20,
        backgroundColor: "#e5fff1",
    },
    backButton: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        position: "absolute",
        bottom: 25,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "107%",
        marginLeft: -13,
        marginTop: -8,
    },
    expandedCard: {
        paddingBottom: 20,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "600",
        color: "#393939",

    },
    cardContent: {
        // fontSize: 16,
        // color: "#555",
        marginTop: -15,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        marginLeft: -100,
    },
    BackArrow: {
        marginTop: 20,
        marginLeft: -13,
    },
    BackGroundArrow: {
        position: "absolute",
        marginTop: 13,
        height: 140,
        width: "100%",
        marginLeft: 5,
    },
    VrlTravels: {
        fontSize: 15,
        marginLeft: 60,
        marginTop: -40,
        fontWeight: "500",
    },
    TravellerVrl: {
        marginTop: 25,
        

    },
    AC: {
        fontSize: 13,
        marginLeft: 60,
    },
    TravellerBus: {
        marginLeft: 5,
        marginTop: -45,
    },
    Seat: {
        marginLeft: 300,
        fontSize: 13,
        marginTop: -130,
    },
    Sleeper: {
        marginLeft: 300,
        fontSize: 13,
        marginTop: 4,
        color: "#393939",
        fontWeight: "700",
    },
    TravellerLine: {
        marginLeft: 286,
        marginTop: -42,
    },
    BoardingTime: {
        color: 'gray',
        marginTop: 20,
        marginLeft: 6,
    },
    DroppingTime: {
        color: 'gray',
        marginLeft: 240,
        marginTop: 165,
        position: "absolute",
    },
    Place: {
        marginLeft: 5,
        color: "#393939",
        fontWeight: "700",
        marginTop: 10,
    },
    DropPlace: {
        marginLeft: 250,
        color: "#393939",
        fontWeight: "700",
        marginTop: -20,
    },
    TravellerCoupon: {
        marginLeft: 10,
    },
    CouponText: {
        color: "#393939",
        fontWeight: "650",
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
    },

    Promoinput: {
        width: "75%", // Make it span the container
        height: 50,
        borderWidth: 2, // Slightly thicker for visibility
        borderColor: "#1F487C", // Default border color
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginTop: 10,
        backgroundColor: "#fff",
        borderStyle: "dashed", // Dashed border style
        outline: "none", // Remove yellow outline on focus
        transition: "border-color 0.3s", // Smooth transition
        marginLeft: 10,

    },

    Apply: {
        width: '25%',
        height: 50,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        borderRadius: 9,
        marginTop: -50,
        backgroundColor: "#1F487C",
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        marginLeft: 290,
    },
    ApplyText: {
        color: "white", // Text color
        fontSize: 16, // Optional: Adjust font size
        textAlign: 'center', // Center text horizontally
        fontWeight: "bold", // Optional: Make text bold
    },
    ContactDetails: {
        color: "#393939",
        fontSize: 16,
        fontWeight: "500",
        marginTop: -30,
        marginLeft: 10,

    },
    PassengercardContent: {
        marginTop: 5,
    },


    ScrollViewContent: {
        flexDirection: "row",
        marginTop: 10,


    },


    // toggleBar: {
    //     width: 80,
    //     height: 50,
    //     borderRadius: 20,
    //     justifyContent: "center",
    //     position: "relative",
    // },

    toggleText: {
        fontSize: 14,
        fontWeight: "bold",
        position: "absolute",
        marginTop: -2,
        zIndex: 1,
    },
    line: {
        width: '100%',  // Full width of the parent container
        height: 1,      // Line thickness
        backgroundColor: '#1F487C80', // Line color
        marginTop: 13,
    },
    Secondline: {
        width: '100%',  // Full width of the parent container
        height: 2,      // Line thickness
        backgroundColor: '#1F487C80', // Line color  
        marginTop: 25,
    },
    LEighteen: {
        fontSize: 18,
        fontWeight: "600",
        color: "#393939",
        marginLeft: 12,
        marginTop: 5,
    },
    EmailInput: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 8,
        marginTop: 15,
        width: "90%",
        marginLeft: 20,
    },
    Mobile: {
        height: 50,
        width: 230,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection: "row", // Align buttons horizontally
        // Container takes 80% of the screen width
        borderRadius: 10,
        overflow: "hidden", // Ensures the border radius is respected for both buttons
        marginLeft: 190,
        marginTop: -60,
        width: "50%",
    },
    button: {
        flex: 1, // Make each button take equal width
        paddingVertical: 15,
        width: 40,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent", // Transparent background when not selected
        borderWidth: 1,
        borderColor: "black", // Light gray border when not selected

    },
    selectedButton: {
        backgroundColor: "#1F487C", // Blue background when selected
        borderColor: "#1F487C",// Blue border when selected
        color: "white",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000", // Default black text color
    },
    selectedText: {
        color: "white", // White text color when selected
    },

    Submitbutton: {
        width: 250,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F487C", // Transparent background when not selected
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 50,
    },
    SubmitbuttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
    },
    addButton: {
        backgroundColor: "#1F487C",
        borderRadius: 10,
        borderColor: "black",
        color: "white",
        height: 50,
        width: 250,
        fontSize: 17,
        textAlign: "center", // Align text horizontally
        justifyContent: 'center', // Align text vertically
        alignItems: 'center', // Center the text vertically within the button
        marginTop: 20, // You can add some spacing to separate the button if needed
    },
    addButtonText: {
        color: "white",
        fontSize: 17,
        textAlign: "center", // Ensures text is centered horizontally
    },


    displayContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    displayText: {
        fontSize: 16,
        color: '#333',
    },
    AddNew: {
        width: 250,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F487C", // Transparent background when not selected
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        color: "white",
        fontSize: 16,
        textAlign: "center",

    },

    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
    },
    genderContainer: {
        flexDirection: 'row',  // Arrange buttons in a row
        justifyContent: 'center', // Center the buttons within the container
        marginBottom: 20,
        marginLeft: 170,         // Adjust position if necessary
        marginTop: -55,
    },


    // genderButton: {
    //     paddingVertical: 10,    // Adjust padding
    //     backgroundColor: '#f0f0f0',
    //     borderWidth: 2,
    //     // borderColor: '#1F487C',
    //     borderRadius: 0,        // Ensure no curve on the middle corners
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 80,             // Explicitly set the width of the button
    //     marginHorizontal: 0,    // Add a small gap between buttons if needed


    // },
    genderButtonText: {
        fontSize: 16,
        color: '#333',
    },
    selectedButton: {
        backgroundColor: '#1f487c',// Change color when selected
        borderColor: '#0056b3',
    },
    maleButton: {
        backgroundColor: 'white',  // Blue for Male
        borderColor: 'black',  // Dark Blue border
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },

    femaleButton: {
        backgroundColor: 'white',  // Pink for Female
        borderColor: 'black',  // Dark Pink border
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    CommonContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: "flex-start",
        padding: 5,
        backgroundColor: '#fff',
    },

    displayContainer: {
        marginTop: 20,
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 1,
    },
    displayText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 5,
    },
    displayedNameText: {
        fontSize: 18,
        color: '#333',
        fontWeight: "900",
        color: "black",
    },
    Passengercard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        width: "105%",
        height: 200,
        marginLeft: -10,
    },
    PassengercardTitle: {
        fontSize: 18,
        fontWeight: "450",
        marginBottom: 10,
        marginLeft: 10,
    },
    label: {
        fontSize: 14,
        color: "#555",
        marginTop: 15,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
        color: "#333"
    },
    // genderContainer: {
    //     flexDirection: "row",
    //     marginTop: 10,

    // },

    genderButtonSelected: {
        backgroundColor: '#1F487C',
        borderColor: "#1F487C"
    },
    genderText: {
        fontSize: 14,
        color: "#555"
    },
    genderTextSelected: {
        color: "#fff"
    },
    toggleWrapper: {
        position: 'absolute',   // Absolute positioning
        top: 113,               // Adjust this value to position vertically
        left: 260,              // Adjust this value to position horizontally
        zIndex: 10,             // Ensure the toggle is above other elements
        alignItems: 'center',   // Center the content horizontally
    },

    toggleBar: {
        height: 42,
        width: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        // position: 'relative',
    },
    toggleText: {
        position: 'absolute',
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleCircle: {
        width: 37,
        height: 37,
        borderRadius: 18,
        backgroundColor: "white",
        position: "absolute",
        marginTop: 1,
        left: 2,
        justifyContent: "center", // Center content horizontally and vertically
        alignItems: "center",     // Center content horizontally and vertically
    },
    YourBookingtext: {
        color: "#39393980",
        fontSize: 11,
        marginLeft: -15,
        marginTop: 10,
        lineHeight: 12, // Add this for better spacing
        paddingHorizontal: 0,
    },
    SeatText: {
        color: "#393939",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 10,
        marginLeft: 20,
    },
    passengerList: {
        marginTop: 20,
    },
    passengerItem: {
        backgroundColor: 'white', // Light teal background
        padding: 15,               // Add padding for better appearance
        marginVertical: 8,         // Space between items
        borderRadius: 8,           // Optional: Add rounded corners
        shadowColor: '#000',       // Optional: Add shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderColor: "black",      // Android shadow equivalent
    },
    passengerText: {
        fontSize: 16,
        color: 'black',          // Teal text color
    },

    PassengercardContentScroll: {
        maxHeight: 460, // Adjust height to control scrollable area
        marginTop: 10,
        padding: 10,
        // paddingBottom:-5,
    },

    SecondLine: {
        width: '110%',  // Full width of the parent container
        height: 1,      // Line thickness
        backgroundColor: '#1F487C80',
        marginTop: 10,
    },


    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,

    },

    BookingText: {
        color: "#39393980",
        fontSize: 11,
        marginLeft: -1,
        marginTop: 10,
    },

    Naaminput: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 8,
        marginTop: 15,
        width: "90%",
        marginLeft: 20,
    },
    Vayadhuinput: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 8,
        marginTop: 15,
        width: "35%",
        marginLeft: 20,
    },
    genderTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    genderContainer: {
        flexDirection: 'row', // Places buttons side by side
        justifyContent: 'center', // Centers buttons horizontally
        alignItems: 'center', // Aligns buttons vertically
        marginBottom: 20,
        marginTop: -60,
        marginLeft: 150,
    },

    maleButton: {
        width: 100,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // marginHorizontal: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 5, // Rounded only on the left side
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 0, // Rounded only on the right side
        borderBottomRightRadius: 0,
    },
    femaleButton: {
        width: 100,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // marginHorizontal: 10,
        backgroundColor: 'white',
        borderTopRightRadius: 5, // Rounded only on the right side
        borderBottomRightRadius: 5,
        borderLeftWidth: 0, // Remove overlapping border between buttons
        borderTopLeftRadius: 0, // Rounded only on the left side
        borderBottomLeftRadius: 0,

    },
    selectedGender: {
        backgroundColor: '#1F487C',

    },
    genderButtonText: {
        fontSize: 16,
        color: '#333',

    },
    addButton: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        borderColor: 'black',
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 60,
        marginTop: 10,
        flexDirection: "row",
    },
    addButtonText: {
        color: 'white',
        fontSize: 17,
    },
    infoContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 2,
    },
    passengerInfo: {
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    NameinfoText: {
        fontSize: 17,
        marginBottom: 5,
        fontWeight: "700",
        color: "#393939",
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    passengerListContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
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
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    maleBackground: {
        backgroundColor: '#F16635',
    },
    femaleBackground: {
        backgroundColor: '#2CA103',
    },
    profileInitial: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    passengerTextDetails: {
        flex: 1,
    },
    NameinfoText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "700",
        color: "#393939",
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 3,
        backgroundColor: '#fff',
    },
    genderButton: {

        width: 100, // Makes buttons equally share available space
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 0, // Remove rounding unless for corners
    },
    selectedGenderText: {
        color: '#fff', // White text color for selected button
    },
    icon: {
        marginRight: 10,             // Space between icons and text
        marginTop: -8,
    },
    Profileicon: {
        marginLeft: 5,
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
        marginTop: 41,
        // position:"absolute",
    },
    FareHeading: {
        color: "#393939",
        fontSize: 17,
        fontWeight: "600",
        marginTop: -5,
    },
    BottomCard: {
        backgroundColor: "#1F487C",
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
        borderColor: "#1F487C",
        borderWidth: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginTop: -1,
    },
    continueButton: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignItems: "center",
        position: "absolute",
        marginTop: -57,
        marginLeft: 255,
    },
    continueText: {
        color: "#1F487C", // White text for contrast
        fontSize: 20,
        fontWeight: "500",
    },
    Rupee: {

        position: 'absolute',
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 735,
        marginLeft: 180,
    },
    BottomcardLine: {
       
        position: 'absolute',
        marginTop: 745,
        marginLeft: 245,
    },
    LEighteen: {
       
        position: 'absolute',
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 735,
        marginLeft: 18,
    },
    Selectedseat: {
       
        position: 'absolute',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 765,
        marginLeft: 17,
    },
    Price: {
       
        position: 'absolute',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 765,
        marginLeft: 180,
    },


});


export default TravellerDetails;
