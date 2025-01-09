import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Easing, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const busTypes = [
  { id: '1', type: 'REGULAR BUSES', backgroundColor: '#204574', image: require('../assets/Blue1111.png') },
  { id: '2', type: 'LUXURY BUSES', backgroundColor: '#D7AE34', image: require('../assets/Yellow2222.png') },
  { id: '3', type: 'ALL BUSES', backgroundColor: '#646464', image: require('../assets/gray3333.png') },
];

const BusTickets = ({ navigation }) => {
  const [expandedBusId, setExpandedBusId] = useState(null);
  const [selectedBusId, setSelectedBusId] = useState(null);
  const [busSwitchStates, setBusSwitchStates] = useState({
    '1': { AC: false, NonAC: false, Seater: false, Sleeper: true },
    '2': { AC: false, NonAC: false, Seater: false, Sleeper: false },
    '3': { AC: false, NonAC: false, Seater: false, Sleeper: false },
  });
  const [busAnimValues] = useState({
    '1': {
      AC: new Animated.Value(0),
      NonAC: new Animated.Value(0),
      Seater: new Animated.Value(0),
      Sleeper: new Animated.Value(0),
    },
    '2': {
      AC: new Animated.Value(0),
      NonAC: new Animated.Value(0),
      Seater: new Animated.Value(0),
      Sleeper: new Animated.Value(0),
    },
    '3': {
      AC: new Animated.Value(0),
      NonAC: new Animated.Value(0),
      Seater: new Animated.Value(0),
      Sleeper: new Animated.Value(0),
    },
  });

  const handlePress = (id) => {
    setExpandedBusId(expandedBusId === id ? null : id);
    setSelectedBusId(expandedBusId === id ? null : id);
  };

  const handleSwitchChange = (busId, option) => {
    const isActive = !busSwitchStates[busId][option];
    console.log(isActive, "isActiveisActive");

    setBusSwitchStates((prev) => ({
      ...prev,
      [busId]: { ...prev[busId], [option]: isActive },
    }));

    Animated.timing(busAnimValues[busId][option], {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const renderBusType = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={[
        styles.busTypeCard,
        item.id === '1' && styles.topRoundedCard,
        item.id === '3' && styles.bottomRoundedCard,
        { backgroundColor: item.backgroundColor }, // Apply background color
      ]}
      imageStyle={[styles.cardImage]} // Ensure the image repeats to cover the card
    >
      <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.busTypeHeader}>
        <Text style={styles.busTypeName}>{item.type}</Text>
      </TouchableOpacity>
      {expandedBusId === item.id && (
        <View style={styles.selectionContainer}>
          <View style={styles.row}>
            
            {renderToggleSwitch(item.id, 'AC', 'ac-unit', item.backgroundColor)}
            {renderToggleSwitch(item.id, 'NonAC', 'cancel', item.backgroundColor)}
          </View> 
          <View style={styles.row}>
            {renderToggleSwitch(item.id, 'Seater', 'event-seat', item.backgroundColor)}
            {renderToggleSwitch(item.id, 'Sleeper', 'bed', item.backgroundColor)}
          </View>
        </View>
      )}
    </ImageBackground>
  );
 const renderToggleSwitch = (busId, option, iconName, cardColor) => {

  const translateX = option === 'AC' ? busAnimValues[busId][option].interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 70], // Adjust this value specifically for AC
  
   }) : busAnimValues[busId][option].interpolate({
    inputRange: [0, 1],
    outputRange: [-85, 50], // Adjust this value to match the button's width
  });

  // Calculate opacity for cross and tick
  const crossOpacity = busAnimValues[busId][option].interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0], // Cross visible at 0
  });

  const tickOpacity = busAnimValues[busId][option].interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 10, 1], // Tick visible at 1
  });

  const textTranslateX = busAnimValues[busId][option].interpolate({
    inputRange: [0, 1],
    outputRange: [50, 4], // Move text right when circle is on the left
  });

  const textColor = busAnimValues[busId][option].interpolate({
    inputRange: [0, 1],
    outputRange: [cardColor, 'white'], // Start with card color, transition to white
  });

  const iconColor = busSwitchStates[busId][option] ? "white" : cardColor;

  return (
    <TouchableOpacity onPress={() => handleSwitchChange(busId, option)} style={styles.switchContainer}>
    <Animated.View style={[styles.toggleButton, {
      backgroundColor: busAnimValues[busId][option].interpolate({
        inputRange: [0, 1],
        outputRange: ['white', cardColor],
      }),
      borderColor: 'white',
    }]}>
      <Animated.View style={[styles.textContainer, { transform: [{ translateX: textTranslateX }] }]}>
        <Icon name={iconName} size={24} color={iconColor} style={styles.switchIcon} />
        <Animated.Text style={[styles.switchText, { color: textColor }]}>
          {option}
        </Animated.Text>
      </Animated.View>

      <Animated.View style={[styles.outerCircle, { transform: [{ translateX }] }]}>
        <Animated.View style={[styles.circle, {
          backgroundColor: 'white',
          borderColor: cardColor,
        }]}>
          <Animated.View style={[styles.tickWrapper, { opacity: tickOpacity, backgroundColor: cardColor, borderColor: cardColor }]}>
            <Text style={styles.tickText}>✔</Text>
          </Animated.View>
          <Animated.Text style={[styles.crossText, { opacity: crossOpacity, color: cardColor }]}>𒉽</Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  </TouchableOpacity>
  );
};




  const applyButtonImage = busTypes.find(bus => bus.id === selectedBusId)?.image;
  const applyButtonColor = busTypes.find(bus => bus.id === selectedBusId)?.backgroundColor || '#ccc';

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.heading}>Bus Type Details</Text>
      </View>

      <View style={styles.bottomSection}>
      <Image
          source={require('../assets/back.png')}
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <FlatList
          data={busTypes}
          renderItem={renderBusType}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
        <ImageBackground
          source={applyButtonImage}
          style={[styles.applyButton, { backgroundColor: applyButtonColor }]}
          imageStyle={{ borderRadius: 5 }}
        >
          <Text style={styles.applyButtonText} onPress={()=>navigation.navigate('AllBuses')}>Apply</Text>    
        </ImageBackground>
        <View>
          <Image
            source={require('../assets/TOMMY 345_208 -HOMEPG.gif')}
            style={styles.advertisement}
            resizeMode="cover" />
        </View>
      </View>
    </View>   
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
    position: 'relative',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#e5fff1',
    paddingHorizontal: 10,
    paddingTop: 20, // Add padding instead of margin
    paddingBottom: 70,
  },
  bottomImage: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    opacity: 0.2,
    transform: [{ scale: 0.5 }],
    marginLeft:-210,
    marginTop:-430,
  },
  busTypeCard: {
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
    marginVertical: 0,
  },
  topRoundedCard: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomRoundedCard: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, // Bottom-right corner rounded
  },
  cardImage: {
    borderRadius: 20,
    // resizeMode: 'fill', 
    // backgroundPosition: "center"
    // position: "center"
    // width: "100%",
    // height: "50%"
  },
  busTypeHeader: {
    marginBottom: 10,
  },
  busTypeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  selectionContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  switchContainer: {
    flex: 1,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 5,
    marginVertical:0,
    paddingVertical:0,
    height:35,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchIcon: {
    marginRight: 10,
    // color:'white'
  },
  switchText: {
    // color: 'black',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    borderColor: "white",
    size: 20

  },
  circleWrapper: {
    width: 48, // Size of the outer circle
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
     // Adjust position as needed to center
  },

  outerCircle: {
    width: 45,
    height: 45,
    borderRadius: 24, // Match the outer circle's border radius
    borderWidth: 3,
    borderColor: 'white', // White border color for the outer circle
    justifyContent: 'center',
    alignItems: 'center',
  },

  tickWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  }, 
  tickText: {
    color: 'white',
    fontSize: 16,
  },
  crossText: {
    position: 'absolute',
    fontSize: 30,
    transform: [{ rotate: '90deg' }],

  },
  applyButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    // bottom:90,
  },
  applyButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  advertisement: {
    width: '100%',
    height: 250,
    marginTop: 10,
    bottom: -20
  },
});

export default BusTickets;