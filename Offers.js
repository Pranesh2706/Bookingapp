import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you're using the correct icon import
import DownBlueRect from '../assets/Svg/DownBluerect';
import CenterWhite from '../assets/Svg/CenterWhite';
import BackArrow from '../assets/Svg/Backarrow';

const Offers = ({navigation}) => {
 

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <BackArrow/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Offers</Text>
        <Image
          source={require('../assets/Header.png')} // Top section background image
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../assets/back.png')} // Background image for bottom section
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <Text style={styles.contentText}>Here are your offers!</Text>


        <View style={styles.Box}>
          <DownBlueRect style={styles.RectBox}
          />
        </View>

        <View style={styles.Fast}>
          <CenterWhite style={styles.WhiteRect}/>
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
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f487c', // Keeping the same header color
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 32,
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
    backgroundColor: 'orange', // Background color for the bottom section
    position: 'relative',
    paddingTop: 0,
  },
  bottomImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.05, // Reduced opacity for background effect
    top: 0,
  },
  contentText: {
    fontSize: 16,
    color: '#1f487c',
    textAlign: 'center',
    marginTop: 20,
  },
  Box:{
     marginLeft:40,
  },
  Fast:{ 
      marginLeft:60,
  },
  RectBox:{
    //  borderTopLeftRadius:-100,
  },
  WhiteRect:{
         marginTop:40,
  },
});

export default Offers;
