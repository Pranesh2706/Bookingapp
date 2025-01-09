import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Home = () => {
    const isCalendarVisible = false; // Example value for toggling advertisement visibility

    return (
        <View style={styles.container}>
            {/* Scrollable Section with Reduced Height */}
            <View style={styles.scrollableWrapper}>
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
                            style={styles.advertisementImage}
                            resizeMode="cover"
                        />
                    </View>

                    {/* Scrollable Content */}
                    <Text style={styles.contentTitle}>Recent Searches</Text>
                    {[...Array(40)].map((_, index) => (
                        <Text key={index} style={styles.content}>
                            Item {index + 1}
                        </Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    advertisement: {
        height: 100,
        backgroundColor: "#ffcc00",
        justifyContent: "center",
        alignItems: "center",
    },
    advertisementImage: {
        width: "100%",
        height: "100%",
    },
    hideAdvertisementImage: {
        display: "none",
    },
    scrollableWrapper: {
        height: 200, // Reduced the height of the scrollable section
        padding: 10,
    },
    scrollableContainer: {
        paddingBottom: 20,
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#1F487C",
    },
    content: {
        fontSize: 16,
        color: "#555",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 5,
    },
});

export default Home;
