import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SampleTicket from "../assets/Svg/SampleTicket";
import BackGroundArrow from "../assets/Svg/BackGroundArrow";
import BackHome from "../assets/Svg/BackHome";
import TicketShare from "../assets/Svg/TicketShare";

const TicketDetails = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.TopSection}>
                {/* Back Arrow */}
                <TouchableOpacity  style={styles.BackHome} height={50} width={90} onPress={() => navigation.navigate('Home')}>
                    <BackHome />
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.TicketShare} height={50} width={90}>
                    <TicketShare/>
                </TouchableOpacity>
                <BackGroundArrow style={styles.BackGroundArrow}/>

                {/* Header Text */}
                <Text style={styles.headerText}>Ticket Details</Text>
            </View>

            {/* Bottom Section */}
            <View style={styles.Bottomsection}>

                <View>
                    <Text style={styles.Successful}>Ticket Booked Successfully !</Text>
                </View>

                <SampleTicket style={styles.SampleTicket} height={680} width={630}/>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    TopSection: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Center header text
        backgroundColor: "#1F487C",
        position: "relative",
    },
    headerText: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold",
        position:'absolute',
    },
    BackHome: {
        position: "absolute",
        left: 10, // Position arrow at the left end
        top: "50%",
        transform: [{ translateY: -12 }], // Center vertically
    },
    Bottomsection: {
        flex: 1,
        padding: 20,
        backgroundColor: "#e5fff1",
    },
    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
        fontWeight: "bold",
    },
    value: {
        fontSize: 16,
        color: "#555",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    SampleTicket:{
        marginTop:30,
        marginLeft:-118,
    },
    BackGroundArrow:{
        marginLeft:10,
    },
    Successful:{
        fontSize:28,
        fontWeight:"700",
        marginTop:20,
        marginLeft:20,
    },
    TicketShare:{
        marginLeft:350,
    },
});

export default TicketDetails;
