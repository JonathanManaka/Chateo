import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import neutralColors from '../styles/neutralColors';
import ButtonComp from '../components/button_comp';
export default function WelcomeMessageScreen({navigation}){
    const moveToVerificationScreen = () =>{
        navigation.navigate('verification')
    }
    return(
        <View style={styles.container}>
           <Image style={styles.imageStyle} source={require('../assets/images/welcome_image.png')} />
            <Text style={styles.h1TitleStyle}>Connect easily with your family and friends over countries</Text>
            <TouchableOpacity  style={styles.privacyPolicyTxtStyle}><Text>Terms & Privacy Policy</Text></TouchableOpacity>
            <ButtonComp navigate={moveToVerificationScreen} text={"Start Messaging"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle:{
        height: 271,
        width: 262,
    },
    h1TitleStyle:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 47,
        marginRight: 47,
        marginTop: 42,
        color: neutralColors.active
    },
    privacyPolicyTxtStyle:{
        marginTop: 126,
        fontSize: 14,
        fontWeight: "semibold",
        color: neutralColors.active,
        marginBottom: 18
    },
    
  });
  