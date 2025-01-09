import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons

const Knowaboutus = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePrivacyPolicyPress = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleTermsPress = () => {
    navigation.navigate('TermsCondition');
  };

  const handleUserAgreementPress = () => {
    navigation.navigate('UserAgreement');
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Know About Us</Text>
        <Image
          source={require('../assets/Header.png')} // Add your image path here
          style={styles.topImage}
          resizeMode="cover"
        />    
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../assets/back.png')} // Add your image path here
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/TBS bus.png')}
          style={styles.bus}
          resizeMode="contain"
        />
        <View style={styles.card}>
          <Text style={styles.contentText}>
            Designed exclusively for travellers, TBS’s pioneering
            technology consolidates your bus booking into one easy-to-use
            platform, custom built to your exact requirements.
          </Text>
          <Text style={styles.contentText}>
            Booking bus has always proved challenging for
            Passengers. TBS makes it simple to configure each
            client’s preferences and then curates search results to
            show in-policy rates first, guaranteeing satisfied customers.
          </Text>
          <Text style={styles.contentText}>
            With TBS, finding the right bus is just a few clicks away.
            You no longer need to hop from platform to platform as it
            connects to all the key players and Operator sources you
            use and presents the options in one easy-to-compare view.
          </Text>
        </View>

        {/* Legal Sections */}
        <View style={styles.legalContainer}>
          {/* Privacy Policy */}
          <TouchableOpacity onPress={handlePrivacyPolicyPress} style={styles.row}>
            <Icon name="cog" size={18} color="#1f487c" style={styles.icon} />
            <Text style={styles.text}>Privacy Policy</Text>
            <Icon name="chevron-forward" size={14} color="#1f487c" style={styles.chevronIcon} />
          </TouchableOpacity>
          <View style={styles.line} />

          {/* Terms & Conditions */}
          <TouchableOpacity onPress={handleTermsPress} style={styles.row}>
            <Icon name="info-circle" size={18} color="#1f487c" style={styles.icon} />
            <Text style={styles.text}>Terms & Conditions</Text>
            <Icon name="chevron-forward" size={14} color="#1f487c" style={styles.chevronIcon} />
          </TouchableOpacity>
          <View style={styles.line} />

          {/* User Agreement */}
          <TouchableOpacity onPress={handleUserAgreementPress} style={styles.row}>
            <Icon name="info-circle" size={18} color="#1f487c" style={styles.icon} />
            <Text style={styles.text}>User Agreement</Text>
            <Icon name="chevron-forward" size={14} color="#1f487c" style={styles.chevronIcon} />
          </TouchableOpacity>
          <View style={styles.line} />
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
    backgroundColor: '#1f487c',
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
    backgroundColor: '#e5fff1',
    position: 'relative',
    paddingTop: 0, // Ensure no extra padding at the top
  },
  bottomImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.05, // Reduced opacity for background effect
    top: 0, // Start at the top of the bottom section
  },
  bus: {
    width: '80%',
    height: 250,
    position: 'absolute',
    top: -35, // Adjust top to position the bus image within the bottom section
    marginLeft: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 170, // Ensure the card is positioned below the bus image
    elevation: 3, // For Android shadow
    shadowColor: '#000', // iOS shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '90%', // Adjust card width
    alignItems: 'center',
    marginLeft: 15,
  },
  contentText: {
    fontSize: 13,
    color: '#1f487c',
    textAlign: 'left',
    marginBottom: 15, // Space between paragraphs
  },
  legalContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#1f487c',
  },
  chevronIcon: {
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default Knowaboutus;
