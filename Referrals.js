import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Referrals = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('ReferAndEarn');

  const handleBackPress = () =>{
    navigation.goBack();
  };



  const renderContent = () => {
    if (selectedOption === 'ReferAndEarn') {
        return (
        <View style={styles.content}>
          <View style={styles.definetext}>
            <Text style={styles.defineText}>how it works:</Text>
          </View>
          <View style={styles.textWithImage}>
            {/* First Text with Box */}
            <View style={styles.textImageRow}>
              <Image
                source={require('../assets/box.png')}
                style={styles.contentImage}
                resizeMode="contain"  
              />
              <Image
                source={require('../assets/share.png')} // Replace with your image
                style={styles.additionalImage}
                resizeMode="contain"
              />
              <Text style={styles.contentText}>
                Share your referral code with your friends and earn rewards when they sign up!
              </Text>
              
            </View>

            {/* Second Text with Box */}
            <View style={styles.textImageRow}>
              <Image
                source={require('../assets/box.png')}
                style={styles.contentImage}
                resizeMode="contain"
              />

              <Image
                source={require('../assets/phone.png')} // Replace with your image
                style={styles.additionalImage}
                resizeMode="contain"
              />
              <Text style={styles.contentText}>
                Your friend must install the  Tbs app and enter your unique code while signing up.
              </Text>
            </View>

            {/* Third Text with Box */}
            <View style={styles.textImageRow}>
              <Image
                source={require('../assets/box.png')}
                style={styles.contentImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/donate.png')} // Replace with your image
                style={styles.additionalImage}
                resizeMode="contain"
              />
              <Text style={styles.contentText}>
                Once they successfully sign the , they will receive a voucher of ₹250 instant discount + ₹250 cashback that can be availed on their first ever booking.
              </Text>
            </View>

            {/* Fourth Text with Box */}
            <View style={styles.textImageRow}>
              <Image
                source={require('../assets/box.png')}
                style={styles.contentImage}
                resizeMode="contain"
              />
              <Image
                source={require('../assets/flower.png')} // Replace with your image
                style={styles.additionalImage}
                resizeMode="contain"
              />
              <Text style={styles.contentText}>
                After the completion of their first tarvel, you will receive a discount voucher worth ₹150.
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (selectedOption === 'ReferralHistory') {
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>Here is the history of your referrals:</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Referrals</Text>
        <Image
          source={require('../assets/Header.png')}
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../assets/back.png')}
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/cash back.png')}
          style={styles.cash}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/Rect.png')}
          style={styles.rect}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/green circle.png')}
          style={styles.smallcircle}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/green circle.png')}
          style={styles.anothercircle}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/one.png')}
          style={styles.bluetext}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/copy.png')}
          style={styles.copy}
          resizeMode="contain"
        />
        <Text style={styles.gang}>Your Referal Code </Text>
        <Image
          source={require('../assets/whatsapp.png')}
          style={styles.whatsapp}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/fb.png')}
          style={styles.fb}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/thread.png')}
          style={styles.thread}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/share.png')}
          style={styles.share}
          resizeMode="contain"
        />

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'ReferAndEarn' && styles.activeOptionButton,
            ]}
            onPress={() => setSelectedOption('ReferAndEarn')}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === 'ReferAndEarn' && styles.selectedOptionText,
              ]}
            >
              Refer and Earn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'ReferralHistory' && styles.activeOptionButton,
            ]}
            onPress={() => setSelectedOption('ReferralHistory')}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === 'ReferralHistory' && styles.selectedOptionText,
              ]}
            >
              Referral History
            </Text>
          </TouchableOpacity>
        </View>

        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f487c',
    paddingVertical: 20,
    position: 'relative',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1,
  },
  topImage: {
    position: 'absolute',
    width: '200%',
    height: '100%',
    opacity: 0.3,
    transform: [{ scale: 0.5 }],
    zIndex: 0,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  bottomSection: {
    flex: 2,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5fff1',
    position: 'relative',
  },
  bottomImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.05,
    zIndex: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    zIndex: 1,
    marginTop: 20,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeOptionButton: {
    backgroundColor: 'transparent',
  },
  optionText: {
    color: '#1F487C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedOptionText: {
    borderBottomWidth: 2,
    borderBottomColor: '#3b6cae',
    width:'100%',
  },
  content: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    zIndex: 1,
  },
  contentText: {
    fontSize: 16,
    color: '#1F487C',
    marginLeft: 15,
    flex: 1,
  },
  cash: {
    height: 250,
    width: '113%',
    marginTop: -90,
  },
  rect: {
    height: 130,
    width: '90%',
    marginTop: -70,
    opacity: 0.75,
  },
  smallcircle: {
    height: 50,
    width: 50,
    marginTop: -90,
    marginLeft: -300,
  },
  anothercircle: {
    height: 50,
    width: 50,
    marginTop: -50,
    marginRight: -290,
  },
  bluetext: {
    height: 80,
    width: '35%',
    marginTop: -85,
    marginLeft: -100,
  },
  copy: {
    height: 80,
    width: '25%',
    marginTop: -79,
    marginLeft: 120,
  },
  gang: {
    color: '#1F487C',
    marginLeft: -110,
  },
  whatsapp: {
    height: 30,
    width: 20,
    marginTop: -25,
    marginLeft: 70,
  },
  fb: {
    height: 30,
    width: 20,
    marginTop: -30,
    marginLeft: 125,
  },
  thread: {
    height: 30,
    width: 20,
    marginTop: -30,
    marginLeft: 180,
  },
  share: {
    height: 30,
    width: 20,
    marginTop: -30,
    marginLeft: 235,
  },
  textImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contentImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  definetext: {
    marginLeft: 20,
  },
  defineText: {
    color: '#1F487C', // changed to match the 'Refer and Earn' color
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    marginTop:-50,
    marginLeft:-10,
  },
  additionalImage: {
    width: 30,
    height: 30,
    marginLeft: -50, // Space between text and additional image
  },
});

export default Referrals;
