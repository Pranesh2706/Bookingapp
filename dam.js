import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Modal, FlatList, StyleSheet,Animated } from 'react-native';
import Woman from '../assets/Svg/Woman';
import PinkWomen from '../assets/Svg/PinkWomen';
import GrayWomen from '../assets/Svg/GrayWomen';


const Home = () => {
  // Static Data (You can replace this with dynamic data fetched from the API)
  const busRoutes = [
    { id: 23, from: "BANGALORE", to: "HYDERABAD" },
    { id: 27, from: "CHENNAI", to: "BANGALORE" },
    { id: 18, from: "PONDICHERRY", to: "COIMBATORE" },
    { id: 22, from: "CHENNAI", to: "MUMBAI" },
    { id: 24, from: "BANGALORE", to: "GOA" },
    { id: 19, from: "INDORE", to: "BHOPAL" },
    { id: 20, from: "HYDERABAD", to: "BANGALORE" },
    { id: 26, from: "BANGALORE", to: "PONDICHERRY" },
    { id: 25, from: "HYDERABAD", to: "KOLKATA" },
    { id: 21, from: "BANGALORE", to: "INDORE" }
  ];

  // State to manage the selected values and modal visibility
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedField, setSelectedField] = useState(''); // Track whether "from" or "to" is selected
  const [isActive, setIsActive] = useState(false);
  const [toggleBackgroundColor, setToggleBackgroundColor] = useState('#ddd');
  const [circleTranslate] = useState(new Animated.Value(0));


  // Open the modal based on the input field clicked ("from" or "to")
  const openModal = (field) => {
    setSelectedField(field);
    setModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleToggle = () => {
    setIsActive(!isActive);
    setToggleBackgroundColor(isActive ? '#ddd' : '#FF409C');
    Animated.spring(circleTranslate, {
        toValue: isActive ? 0 : 40,
        useNativeDriver: true,
    }).start();
};

const handleDayPress = (day) => {
    const formattedDate = new Date(day.dateString).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });
    setSelectedDate(formattedDate); // Set the formatted date
    setIsCalendarVisible(false); // Close calendar after date is selected
};

const handleToday = () => {
    const today = new Date().toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    setSelectedDate(today); // Set today's date
};

// Handle "Tomorrow" button click
const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Add one day to today's date
    const formattedTomorrow = tomorrow.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    setSelectedDate(formattedTomorrow); // Set tomorrow's date
};



  // Handle selection of "from" or "to"
  const handleSelection = (route) => {
    if (selectedField === 'from') {
      setFrom(route.from); // Update "from" field
    } else if (selectedField === 'to') {
      setTo(route.to); // Update "to" field
    }
    closeModal();
  };

  // Render item in the list (from and to locations)
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelection(item)} style={styles.item}>
      <Text style={styles.itemText}>{item.from} - {item.to}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Input Fields for "From" and "To" */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="From"
          value={from}
          onFocus={() => openModal('from')} // Open modal for "From"
        />
        <TextInput
          style={styles.input}
          placeholder="To"
          value={to}
          onFocus={() => openModal('to')} // Open modal for "To"
        />
      </View>

      {/* Modal for Selecting Locations */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Route</Text>

            <FlatList
              data={busRoutes}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              style={styles.list}
            />

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={[styles.WomenCard, isCalendarVisible && styles.hideWomenCard]}>
                    <View style={styles.Row}>
                        <Woman style={styles.Woman} />
                        <Text style={styles.WomenCardText}>Booking for WOMEN</Text>
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
                                        {/* Display PinkWomen when active, GrayWomen when not */}
                                        {isActive ? <PinkWomen /> : <GrayWomen />}
                                    </Animated.View>
                                </Animated.View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    width: '100%',
    maxHeight: 300,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  WomenCard: {
    width: '90%',
    height: 70,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#1F487C",
    position: "absolute",
    marginTop: -140,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
},

hideWomenCard: {
    zIndex: -1,
},
hidescrollableWrapper:{
  zIndex: -1,
},

Woman: {
  position: "absolute",
  top: -13,
  zIndex: 2,
  marginLeft: -10,
  marginTop: 13,
},

});

export default Home;
