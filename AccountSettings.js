import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import BusIcon from '../assets/Svg/Busicon';  // Adjust the path if needed


const AccountSettings = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Account Settings</Text>
      {/* Using the SVG as a component */}
      <BusIcon style={styles.BusIcon} width={500} height={100}  /> {/* You can adjust width and height */}
    </View>
  );
};
const styles = StyleSheet.create({
  BusIcon:{
// color:'green',
marginTop:100,
  },
  
});


export default AccountSettings;
