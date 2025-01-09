import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LanguageModal from '../Screens/LanguageModal'; // Import the LanguageModal
import CountryModal from '../Screens/Countrymodal';


const Profile = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);
  const [imageSource, setImageSource] = useState(require('../assets/downloadsss.png'));
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false); // State to manage modal visibility
  const [isCountryModalVisible, setCountryModalVisible] = useState(false);

  useEffect(() => {
    const updateImageBasedOnTime = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        setImageSource(require('../assets/downloadsss.png'));
      } else if (currentHour >= 12 && currentHour < 18) {
        setImageSource(require('../assets/image 10.png'));
      } else {
        setImageSource(require('../assets/image 5.png'));
      }
    };

    updateImageBasedOnTime();
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  const openLanguageModal = () => {
    setLanguageModalVisible(true); // Show the modal
  };

  const closeLanguageModal = () => {
    setLanguageModalVisible(false); // Hide the modal
  };

  const openCountryModal =() => {
    setCountryModalVisible(true);
  };

  const closeCountryModal =() => {
    setCountryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Image */}
      <View style={styles.topSection}>
        <Image source={imageSource} style={styles.image} />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Text style={styles.tripsText}>Trips: X</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.travelledText}>Travelled: Y</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Bottom Section with Navigation Links */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >

        <View style={styles.scrollableContent}>
          <Text style={styles.myDetailsHeader}>My Details</Text>
          <View style={styles.linkContainer}>
            <Icon name="ticket" size={18} color="#1f487c" style={styles.bookingIcon} />
            <Text style={styles.bookingText} onPress={() => navigation.navigate('Booking')}>
              Booking
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />
          <View style={styles.linkContainer}>
            <Icon name="ban" size={18} color="#1f487c" style={styles.cancelBookingIcon} />
            <Text style={styles.cancelBookingText} onPress={() => navigation.navigate('Cancelled')}>
              Cancel Booking
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />
          <View style={styles.linkContainer}>
            <Icon name="user" size={18} color="#1f487c" style={styles.personalInfoIcon} />
            <Text style={styles.personalInfoText} onPress={() => navigation.navigate('Personal')}>
              Personal Information
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />
          <View style={styles.linkContainer}>
            <Icon name="users" size={18} color="#1f487c" style={styles.passengersIcon} />
            <Text style={styles.passengersText} onPress={() => navigation.navigate('Passengers')}>
              Passengers
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />

          <Text style={styles.paymentsHeader}>Payments</Text>
          <View style={styles.linkContainer}>
            <Icon name="credit-card" size={18} color="#1f487c" style={styles.walletIcon} />
            <Text style={styles.walletText} onPress={() => navigation.navigate('TBSWallet')}>
              TBS Wallet
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />
          <View style={styles.linkContainer}>
            <Icon name="money" size={18} color="#1f487c" style={styles.paymentMethodsIcon} />
            <Text style={styles.paymentMethodsText} onPress={() => navigation.navigate('PaymentMethods')}>
              Payment Methods
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />
          <View style={styles.linkContainer}>
            <Icon name="file" size={18} color="#1f487c" style={styles.gstDetailsIcon} />
            <Text style={styles.gstDetailsText} onPress={() => navigation.navigate('GSTDetails')}>
              GST Details
            </Text>
            <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
          </View>
          <View style={styles.underline} />

          <TouchableOpacity onPress={toggleShowMore}>
            <Text style={styles.moreHeader}>More</Text>
          </TouchableOpacity>

          {showMore && (
            <>
              <View style={styles.linkContainer}>
                <Icon name="tag" size={18} color="#1f487c" style={styles.offersIcon} />
                <Text style={styles.offersText} onPress={() => navigation.navigate('Offers')}>
                  Offers
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                <Icon name="share-alt" size={18} color="#1f487c" style={styles.referralsIcon} />
                <Text style={styles.referralsText} onPress={() => navigation.navigate('Referrals')}>
                  Referrals
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                <Icon name="info-circle" size={18} color="#1f487c" style={styles.knowIcon} />
                <Text style={styles.knowText} onPress={() => navigation.navigate('Knowaboutus')}>
                  Know about us
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                <Icon name="star" size={18} color="#1f487c" style={styles.RateIcon} />
                <Text style={styles.RateText} onPress={() => navigation.navigate('Rate')}>
                  Rate app
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                <Icon name="question-circle" size={18} color="#1f487c" style={styles.HelpIcon} />
                <Text style={styles.HelpText} onPress={() => navigation.navigate('Help')}>
                  Help
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                <Icon name="cog" size={18} color="#1f487c" style={styles.SettingIcon} />
                <Text style={styles.SettingText} onPress={() => navigation.navigate('AccountSettings')}>
                  Account Settings
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <Text style={styles.preferenceHeader}>Preferences</Text>
              <View style={styles.linkContainer}>
                <Image source={require('../assets/images.flag.jpg')} style={styles.countryIcon} />
                <Text style={styles.CountryText} onPress={openCountryModal}>
                  Country
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
              <View style={styles.linkContainer}>
                {/* <Image source={require('../assets/images.language.png')} style={styles.languageIcon} /> */}
                <Icon name="language" size={18} color="#1f487c" style={styles.SettingIcon} />
                <Text style={styles.LanguageText}
                  // onPress={(openLanguage) => navigation.navigate('Language')}
                  onPress={openLanguageModal}
                >
                  Language
                </Text>
                <Icon name="chevron-right" size={14} color="#1f487c" style={styles.chevronIcon} />
              </View>
              <View style={styles.underline} />
            </>
          )}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLanguageModalVisible}
        onRequestClose={closeLanguageModal}
      >
        <LanguageModal
          onClose={closeLanguageModal} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible ={isCountryModalVisible}
        onRequestClose={closeCountryModal}
        >
          <CountryModal
          onClose={closeCountryModal}/>

      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200, // Adjust based on your image size
    zIndex: 1, // Ensure it stays above other content
  },
  languageIcon: {
    marginRight: 10,
  },
  LanguageText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  middleSection: {
    position: 'absolute',
    top: 200, // Adjust based on your topSection height
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 10,
    zIndex: 1, // Ensure it stays above other content
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tripsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  travelledText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: 200 + 50, // Adjust based on the height of topSection and middleSection
  },
  scrollContainer: {
    paddingBottom: 20,
    backgroundColor: '#e5fff1',
  },
  scrollableContent: {
    padding: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  chevronIcon: {
    marginLeft: 10,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#1f487c',
    marginVertical: 10,
  },
  myDetailsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f487c',
    marginVertical: 10,
  },
  paymentsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f487c',
    marginVertical: 10,
  },
  moreHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f487c',
    marginVertical: 10,
    // textAlign: 'center',
  },
  preferenceHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f487c',
    marginVertical: 10,
  },
  bookingIcon: {
    marginRight: 10,
  },
  bookingText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  cancelBookingIcon: {
    marginRight: 10,
  },
  cancelBookingText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  personalInfoIcon: {
    marginRight: 10,
  },
  personalInfoText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  passengersIcon: {
    marginRight: 10,
  },
  passengersText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  walletIcon: {
    marginRight: 10,
  },
  walletText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  paymentMethodsIcon: {
    marginRight: 10,
  },
  paymentMethodsText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  gstDetailsIcon: {
    marginRight: 10,
  },
  gstDetailsText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  offersIcon: {
    marginRight: 10,
  },
  offersText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  referralsIcon: {
    marginRight: 10,
  },
  referralsText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  knowIcon: {
    marginRight: 10,
  },
  knowText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  RateIcon: {
    marginRight: 10,
  },
  RateText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  HelpIcon: {
    marginRight: 10,
  },
  HelpText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  SettingIcon: {
    marginRight: 10,
  },
  SettingText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  countryIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  CountryText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
  languageIcon: {
    marginRight: 10,
  },
  LanguageText: {
    fontSize: 20,
    color: '#1f487c',
    flex: 1,
  },
});

export default Profile;