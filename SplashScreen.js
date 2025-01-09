import React, { useEffect, useRef } from 'react';
import { View, Image, ImageBackground, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const leftImageAnim = useRef(new Animated.Value(-150)).current;
  const rightImageAnim = useRef(new Animated.Value(150)).current;
  const leftImageOpacity = useRef(new Animated.Value(0)).current;
  const rightImageOpacity = useRef(new Animated.Value(0)).current;
  const ellipsesScaleAnim = useRef(new Animated.Value(1)).current;
  const ellipsesTranslateXAnim = useRef(new Animated.Value(0)).current;
  const ellipsesTranslateYAnim = useRef(new Animated.Value(0)).current;
  const ellipse1RotateAnim = useRef(new Animated.Value(0)).current;
  const middleImageOpacity = useRef(new Animated.Value(0)).current;
  const middleImageTranslateX = useRef(new Animated.Value(0)).current;
  const middleImageTranslateY = useRef(new Animated.Value(0)).current;
  const newImageScaleAnim = useRef(new Animated.Value(0.2)).current;
  const newImageOpacity = useRef(new Animated.Value(0)).current;
  const newImageTranslateYAnim = useRef(new Animated.Value(-900)).current;
  const anotherImageScaleAnim = useRef(new Animated.Value(1)).current;
  const anotherImageTranslateX = useRef(new Animated.Value (1)).current;
  const anotherImageTranslateY = useRef(new Animated.Value (1)).current;
  const logoOpacityAnim = useRef(new Animated.Value(1)).current; // Added for logo opacity
  const tamilNaduAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const keralaAnim = useRef(new Animated.ValueXY({ x: -width, y: height })).current;
  const andhraPradeshAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const karnatakaAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const telanganaAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const maharashtraAnim = useRef(new Animated.ValueXY({ x: width, y: -height })).current;
  const madhyaPradeshAnim = useRef(new Animated.ValueXY({ x: width, y: -height })).current;
  const gujaratAnim = useRef(new Animated.ValueXY({ x: width, y: -height })).current;
  const chhattisgarhAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const rajasthanAnim = useRef(new Animated.ValueXY({ x: width, y: -height })).current; // Rajasthan animation
  const uttarPradeshAnim = useRef(new Animated.ValueXY({ x: width, y: -height })).current; // Uttar Pradesh animation
  const odishaAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; // Odisha animation
  const jharkhandAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; // Jharkhand animation
  const westbengalAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; // West Bengal animation
  const biharAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; // Bihar animation
  const haryanaAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; // Haryana animation
  const punjabAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;  //Punjab animation
  const uttarakhandAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;//uttarakhand animation
  const himachalPradeshAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current;//himachal pradesh animation
  const jammukashmirAnim = useRef(new Animated.ValueXY({ x: width, y: height })).current; //jammukashmir animation
  const tamilNaduOpacity = useRef(new Animated.Value(1)).current; // Opacity starts fully visible
  const jammukashmirOpacity = useRef(new Animated.Value(1)).current; // Opacity starts fully visible
  const himachalpradeshOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible
  const uttarakhandOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible
  const punjabOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible
  const haryanaOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible 
  const uttarPradeshOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible
  const rajasthanOpacity = useRef(new Animated.Value(1)).current;//Opacity starts fully visible
  const gujaratOpacity = useRef(new Animated.Value(1)).current;
  const maharashtraOpacity = useRef(new Animated.Value(1)).current;
  const madhyaPradeshOpacity = useRef(new Animated.Value(1)).current;
  const karnatakaOpacity = useRef(new Animated.Value(1)).current;
  const andhraPradeshOpacity = useRef(new Animated.Value(1)).current;
  const telanganaOpacity = useRef(new Animated.Value(1)).current;
  const chhattisgarhOpacity = useRef(new Animated.Value(1)).current;
  const odishaOpacity = useRef(new Animated.Value(1)).current;
  const keralaOpacity = useRef(new Animated.Value(1)).current;
  const biharOpacity = useRef(new Animated.Value(1)).current; 
  const westbengalOpacity = useRef(new Animated.Value(1)).current;
  const jharkhandOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {

    // Animate Tamil Nadu
    Animated.timing(tamilNaduAnim, {
      toValue: { x: width * 0.20, y: height * 0.32 }, // Final position for Tamil Nadu
      duration: 700,
      useNativeDriver: true,
    }).start();

    // Animate Kerala
    Animated.timing(keralaAnim, {
      toValue: { x: width * 0.16, y: height * 0.35 }, // Final position for Kerala
      duration: 700,
      delay: 100, // Delay to start after Tamil Nadu
      useNativeDriver: true,
    }).start();


    // Animate Andhra Pradesh
    Animated.timing(andhraPradeshAnim, {
      toValue: { x: width * 0.22  , y: height * 0.20 }, // Position to the right of Tamil Nadu
      duration: 700,
      delay: 100, // Delay to start after Kerala
      useNativeDriver: true,
    }).start();

    // Animate Karnataka
    Animated.timing(karnatakaAnim, {
      toValue: { x: width * 0.15 , y: height * 0.26 }, // Position above Tamil Nadu and Kerala
      duration: 700,
      delay: 100, // Delay to start after Andhra Pradesh
      useNativeDriver: true,
    }).start();


    // Animate Telangana
    Animated.timing(telanganaAnim, {
      toValue: { x: width * 0.23, y: height * 0.24 }, // Position above Andhra Pradesh
      duration: 700,
      delay: 100, // Delay to start after Karnataka
      useNativeDriver: true,
    }).start();

    // Animate Maharashtra
    Animated.timing(maharashtraAnim, {
      toValue: { x: width * 0.12, y: height * 0.19 }, // Position above Karnataka
      duration: 700,
      delay: 100, // Delay to start after Telangana
      useNativeDriver: true,
    }).start();


    // Animate Madhya Pradesh
    Animated.timing(madhyaPradeshAnim, {
      toValue: { x: width * 0.14, y: height * 0.11 }, // Position above Maharashtra
      duration: 700,
      delay: 100, // Delay to start after Maharashtra
      useNativeDriver: true,
    }).start();

    // Animate Gujarat
    Animated.timing(gujaratAnim, {
      toValue: { x: width * -0.00, y: height * 0.16 }, // Position to the left of Madhya Pradesh
      duration: 700,
      delay: 100, // Delay to start after Madhya Pradesh
      useNativeDriver: true,
    }).start();


    // Animate Chhattisgarh
    Animated.timing(chhattisgarhAnim, {
      toValue: { x: width * 0.29, y: height * 0.22 }, // Position to the right of Madhya Pradesh
      duration: 700,
      delay: 100, // Delay to start after Gujarat
      useNativeDriver: true,
    }).start();

    // Animate Rajasthan
    Animated.timing(rajasthanAnim, {
      toValue: { x: width * 0.04, y: height * 0.08 }, // Position above Gujarat
      duration: 700,
      delay: 100, // Delay to start after Chhattisgarh
      useNativeDriver: true,
    }).start();
    // Animate Uttar Pradesh
    Animated.timing(uttarPradeshAnim, {
      toValue: { x: width * 0.23, y: height * 0.08 }, // Final position for Uttar Pradesh
      duration: 700,
      delay: 200, // Delay to start after Rajasthan
      useNativeDriver: true,
    }).start();
    // Animate Odisha
    Animated.timing(odishaAnim, {
      toValue: { x: width * 0.35, y: height * 0.15}, // Final position for Odisha
      duration: 700,
      delay: 200, // Delay to start after Uttar Pradesh
      useNativeDriver: true,
    }).start();
    // Animate Jharkhand
    Animated.timing(jharkhandAnim, {
      toValue: { x: width * 0.42, y: height * 0.13 }, // Final position for Jharkhand
      duration: 700,
      delay: 200, // Delay to start after Odisha
      useNativeDriver: true,
    }).start();
    // Animate West Bengal
    Animated.timing(westbengalAnim, {
      toValue: { x: width * 0.51, y: height * 0.13 }, // Final position for West Bengal
      duration: 700,
      delay: 200, // Delay to start after Jharkhand
      useNativeDriver: true,  
    }).start();
    // Animate Bihar
    Animated.timing(biharAnim, {
      toValue: { x: width * 0.35, y: height * 0.11 }, // Final position for Bihar
      duration: 700,
      delay: 200, // Delay to start after West Bengal
      useNativeDriver: true,
    }).start();
    // Animate Haryana
    Animated.timing(haryanaAnim, {
      toValue: { x: width * 0.15, y: height * 0.11 }, // Final position for Haryana
      duration: 700,
      delay: 200, // Delay to start after Bihar
      useNativeDriver: true,
    }).start();
    Animated.timing(punjabAnim, {
      toValue: { x: width * 0.14, y: height * 0.08 }, // Adjust position for Punjab
      duration: 700,
      delay: 200, // Delay to start after Haryana
      useNativeDriver: true,
    }).start();

    Animated.timing(uttarakhandAnim, {
      toValue: { x: width * 0.24, y: height * 0.09 }, //Adjust position for uttarakhand
      duration: 700,
      delay: 200,
      useNativeDriver: true,

    }).start();

    Animated.timing(himachalPradeshAnim, {
      toValue: { x: width * 0.19, y: height * 0.07 }, //Adjust position for himachal pradesh
      duration: 700,
      delay: 200,
      useNativeDriver: true,

    }).start();


    // Animate Jammu and Kashmir
    Animated.timing(jammukashmirAnim, {
      toValue: { x: width * 0.12, y: height * -0.01 }, // Final position for Jammu and Kashmir
      duration: 700,
      delay: 200, // Delay to start after Himachal Pradesh
      useNativeDriver: true,
    }).start();



    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration: 1500,
          useNativeDriver: true,
        }),
        
      ]),
      Animated.parallel([
        Animated.timing(tamilNaduOpacity, { // Animating logo opacity based on bus image scale
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(jammukashmirOpacity, { // Animating logo opacity based on bus image scale
          toValue: 0.5     ,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(uttarakhandOpacity, {//Animating logo opacity based 
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(himachalpradeshOpacity, {//Animating logo opacity based 
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(punjabOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(haryanaOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(uttarPradeshOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(rajasthanOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(gujaratOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(maharashtraOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(madhyaPradeshOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(karnatakaOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(andhraPradeshOpacity, {
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(telanganaOpacity,{
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(chhattisgarhOpacity,{
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(odishaOpacity,{
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(keralaOpacity,{
          toValue: 0.5,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(biharOpacity,{
          toValue:0.5,
          duration:2500,
          useNativeDriver: true,
        }),
        Animated.timing(westbengalOpacity,{
          toValue:0.5,
          duration: 2500,
          useNativeDriver:true,
        }),
        Animated.timing(jharkhandOpacity,{
          toValue:0.5,
          duration: 2500, 
          useNativeDriver:true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(leftImageOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(rightImageOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(leftImageAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rightImageAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(ellipse1RotateAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(middleImageOpacity, {
          toValue: 1,
          duration: 1500,
          // delay:3000,
          useNativeDriver: true,
        }),
      ]),
      
      Animated.parallel([
        // Animated.timing(middleImageOpacity, {
        //   toValue: 0,
        //   duration: 1500, 
        //   // delay:3000, 
        //   useNativeDriver: true,
        // }),
        
        Animated.timing(middleImageTranslateX, {
          toValue: 550,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(middleImageTranslateY, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(ellipsesScaleAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
       
        Animated.timing(ellipsesTranslateXAnim, {
          toValue: -25,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(ellipsesTranslateYAnim, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: true,
        }),

        
      ]),
      Animated.parallel([
        Animated.timing(newImageOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(newImageScaleAnim, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(newImageTranslateYAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        
      ]),
      Animated.parallel([
        Animated.timing(newImageScaleAnim,{
          toValue:0,
          duration:1000,
          useNativeDriver:true,
        }),
        Animated.timing(ellipsesScaleAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),

      ]),
      Animated.parallel([
        Animated.timing(anotherImageScaleAnim, {
          toValue: 4.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(anotherImageTranslateX,{
          toValue: 3,
          duration:1000,
          useNativeDriver:true,
        }),
        Animated.timing(anotherImageTranslateY,{
          toValue:1,
          duration:1000,
          useNativeDriver:true,
        }),
        Animated.timing(logoOpacityAnim, { // Animating logo opacity based on bus image scale
          toValue: 0.3,
          duration: 2500,
          useNativeDriver: true,
        }),
        
      ]),  
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 500); // Adjusted time to accommodate the new animation

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/globe.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.logoContainer,
            { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
          ]}
        >

          {/* Tamil Nadu Image */}
          <Animated.Image
            source={require('../assets/IN-TN.png')}
            style={[
              styles.tamilNadu,
              {
                transform: tamilNaduAnim.getTranslateTransform(),
                opacity: tamilNaduOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Kerala Image */}      
          <Animated.Image
            source={require('../assets/IN-KL.png')}
            style={[
              styles.kerala,
              {
                transform: keralaAnim.getTranslateTransform(),
                opacity: keralaOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Andhra Pradesh Image */}
          <Animated.Image
            source={require('../assets/IN-AP.png')}
            style={[
              styles.andhraPradesh,
              {
                transform: andhraPradeshAnim.getTranslateTransform(),
                opacity: andhraPradeshOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Karnataka Image */}
          <Animated.Image
            source={require('../assets/IN-KA.png')}
            style={[
              styles.karnataka,
              {
                transform: karnatakaAnim.getTranslateTransform(),
                opacity: karnatakaOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Telangana Image */}
          <Animated.Image
            source={require('../assets/IN-TG.png')}
            style={[
              styles.telangana,
              {
                transform: telanganaAnim.getTranslateTransform(),
                 opacity: telanganaOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Maharashtra Image */}
          <Animated.Image
            source={require('../assets/IN-MH.png')}
            style={[
              styles.maharashtra,
              {
                transform: maharashtraAnim.getTranslateTransform(),
                opacity: maharashtraOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Madhya Pradesh Image */}
          <Animated.Image
            source={require('../assets/IN-MP.png')}
            style={[
              styles.madhyaPradesh,
              {
                transform: madhyaPradeshAnim.getTranslateTransform(),
                opacity: madhyaPradeshOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Gujarat Image */}
          <Animated.Image
            source={require('../assets/IN-GJ.png')}
            style={[
              styles.gujarat,
              {
                transform: gujaratAnim.getTranslateTransform(),
                opacity: gujaratOpacity,
              },
            ]}
            resizeMode="contain"
          />
          {/* Chhattisgarh Image */}
          <Animated.Image
            source={require('../assets/IN-CT.png')}
            style={[
              styles.chhattisgarh,
              {
                transform: chhattisgarhAnim.getTranslateTransform(),
                opacity:chhattisgarhOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Rajasthan Image */}
          <Animated.Image
            source={require('../assets/IN-RJ.png')}
            style={[
              styles.rajasthan,
              {
                transform: rajasthanAnim.getTranslateTransform(),
                opacity: rajasthanOpacity,
                
              },
            ]}
            resizeMode="contain"
          />
          {/* Uttar Pradesh Image */}
          <Animated.Image
            source={require('../assets/IN-UP.png')}
            style={[
              styles.uttarPradesh,
              {
                transform: uttarPradeshAnim.getTranslateTransform(),
                opacity: uttarPradeshOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Odisha Image */}
          <Animated.Image
            source={require('../assets/IN-OR.png')}
            style={[
              styles.odisha,
              {
                transform: odishaAnim.getTranslateTransform(),
                 opacity:odishaOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Jharkhand Image */}
          <Animated.Image
            source={require('../assets/IN-JH.png')}
            style={[
              styles.jharkhand,
              {
                transform: jharkhandAnim.getTranslateTransform(),
                opacity:jharkhandOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* West Bengal Image */}
          <Animated.Image
            source={require('../assets/IN-WB.png')}
            style={[
              styles.westBengal,
              {
                transform: westbengalAnim.getTranslateTransform(),
                opacity:westbengalOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Bihar Image */}
          <Animated.Image
            source={require('../assets/IN-BR.png')}
            style={[
              styles.bihar,
              {
                transform: biharAnim.getTranslateTransform(),
                opacity:biharOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Haryana Image */}
          <Animated.Image
            source={require('../assets/IN-HR.png')}
            style={[
              styles.haryana,
              {
                transform: haryanaAnim.getTranslateTransform(),
                opacity: haryanaOpacity
              },
            ]}
            resizeMode="contain"
          />
          <Animated.Image
            source={require('../assets/IN-PB.png')} // Replace with your Punjab image path
            style={[
              styles.punjab,
              {
                transform: punjabAnim.getTranslateTransform(),
                opacity: punjabOpacity
              },
            ]}
            resizeMode="contain"
          />
          {/* Uttarakhand Image */}
          <Animated.Image
            source={require('../assets/IN-UT.png')}
            style={[
              styles.uttarakhand,
              {
                transform: uttarakhandAnim.getTranslateTransform(),
                opacity: uttarakhandOpacity
              },
            ]}
            resizeMode="contain"
          />

          {/*himachal pradesh Image*/}
          <Animated.Image
            source={require('../assets/IN-HP.png')}
            style={[
              styles.himachalpradesh,
              {
                transform: himachalPradeshAnim.getTranslateTransform(),
                opacity: himachalpradeshOpacity
              },
            ]}
            resizeMode="contain"
          />

          {/* Jammu and Kashmir Image */}
          <Animated.Image
            source={require('../assets/IN-JK.png')}
            style={[
              styles.jammukashmir,
              {
                transform: jammukashmirAnim.getTranslateTransform(),
                opacity: jammukashmirOpacity
              },
            ]}
            resizeMode="contain"
          />

          {/* <Animated.Image
            source={require('../assets/India.png')}
            style={[
              styles.logo,
              {
                opacity: logoOpacityAnim,
                zIndex: -1
              }, // Apply animated opacity to the logo
            ]}
            resizeMode="contain"
          />       */}


          <Animated.Image
            source={require('../assets/Ellipse 1.png')}
            style={[
              styles.rightImage,
              {
                opacity: rightImageOpacity,
                transform: [
                  { translateX: rightImageAnim },
                  { scale: ellipsesScaleAnim },
                  { translateX: ellipsesTranslateXAnim },
                  { translateY: ellipsesTranslateYAnim },
                  {
                    rotate: ellipse1RotateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '-180deg'],
                    }),
                  },
                ],
              },
            ]}
            resizeMode="contain"
          />

          <Animated.Image
            source={require('../assets/Ellipse 2.png')}
            style={[
              styles.leftImage,
              { opacity: leftImageOpacity, transform: [{ translateX: leftImageAnim }, { scale: ellipsesScaleAnim }, { translateX: ellipsesTranslateXAnim }, { translateY: ellipsesTranslateYAnim }] }
            ]}
            resizeMode="contain"
          />

          <Animated.Image
            source={require('../assets/words.png')}
            style={[
              styles.middleImage,
              {
                opacity: middleImageOpacity,
                transform: [
                  { scale: ellipsesScaleAnim },
                  { translateX: middleImageTranslateX },
                  { translateY: middleImageTranslateY },
                ],
              }
            ]}
            resizeMode="contain"
          />

          <Animated.Image
            source={require('../assets/Upper.png')}
            style={[
              styles.newImage,
              { opacity: newImageOpacity, transform: [{ scale: newImageScaleAnim }, { translateY: newImageTranslateYAnim }] }
            ]}
            resizeMode="contain"
          />

          <Animated.Image
            source={require('../assets/TBS.png')}
            style={[
              styles.anotherImage,
              { opacity: newImageOpacity, 
                transform: [
                  { scale: anotherImageScaleAnim },
                  { translateX:anotherImageTranslateX },
                  { translateY: anotherImageTranslateY },


              ], }
            ]}
            resizeMode="contain"
          />

        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 300,
    height: 400,
    marginBottom: 20,
    position: 'relative',
    marginLeft: 130,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  leftImage: {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '12%',
    top: '15%',
  },
  rightImage: {
    position: 'absolute',
    width: '65%',
    height: '65%',
    left: '7%',
    top: '10%',
  },
  middleImage: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '12%',
    top: '18%',
  },
  newImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -20,
    left: -41,
  },
  anotherImage: {
    position: 'absolute',
    width: '15%', // Adjust size relative to the animation
    height: '15%',
    top: 140,
    left: 85,
  },
  tamilNadu: {
    position: 'absolute',
    width: width * 0.14, // Adjust size for Tamil Nadu
    height: height * 0.13,
  },
  kerala: {
    position: 'absolute',
    width: width * 0.09, // Adjust size for Kerala
    height: height * 0.08,
  },
  andhraPradesh: {
    position: 'absolute',
    width: width * 0.23, // Adjust size for Andhra Pradesh
    height: height * 0.22,
  },
  karnataka: {
    position: 'absolute',
    width: width * 0.12, // Adjust size for Karnataka
    height: height * 0.13,
  },
  telangana: {
    position: 'absolute', 
    width: width * 0.11, // Adjust size for Telangana
    height: height * 0.10,
  },
  maharashtra: {
    position: 'absolute',
    width: width * 0.20, // Adjust size for Maharashtra
    height: height * 0.18,
  },
  madhyaPradesh: {
    position: 'absolute',
    width: width * 0.24, // Adjust size for Madhya Pradesh
    height: height * 0.22,
  },    
  gujarat: {
    position: 'absolute',
    width: width * 0.16, // Adjust size for Gujarat
    height: height * 0.16,
  },
  chhattisgarh: {
    position: 'absolute',
    width: width * 0.15, // Adjust size for Chhattisgarh
    height: height * 0.08 ,
  },
  rajasthan: {  
    position: 'absolute',
    width: width * 0.28, // Adjust size for Rajasthan
    height: height * 0.21,
  },
  uttarPradesh: {
    position: 'absolute',
    width: width * 0.19, // Adjust size for Uttar Pradesh
    height: height * 0.19,
  },
  odisha: {
    position: 'absolute',
    width: width * 0.20, // Adjust size for Odisha
    height: height * 0.19,
  },
  jharkhand: {
    position: 'absolute',
    width: width * 0.15, // Adjust size for Jharkhand
    height: height * 0.15,
  },
  westBengal: {
    position: 'absolute',
    width: width * 0.12, // Adjust size for West Bengal
    height: height * 0.12,
  },
  bihar: {
    position: 'absolute',
    width: width * 0.17,
    height: height * 0.17,  

  },
  haryana: {
    position: 'absolute',
    width: width * 0.10,
    height: height * 0.08,
  },

  punjab: {
    position: 'absolute',
    width: width * 0.09, // Adjust size for Punjab
    height: height * 0.09, // Adjust size for Punjab
  },

  uttarakhand: {
    position: 'absolute',
    width: width * 0.09,
    height: height * 0.09,
  },
  himachalpradesh: {
    position: 'absolute',
    width: width * 0.09,
    height: height * 0.09,
  },
  jammukashmir: {
    position: 'absolute',
    width: width * 0.18, // Adjust the size as necessary
    height: height * 0.18, // Adjust the size as necessary
  },

});

export default SplashScreen; 