import { StyleSheet, Text, View,TextInput } from 'react-native';
import BackButtonComp from '../components/back_button_comp';
import neutralColors from '../styles/neutralColors';
import TextInputComp from '../components/textInput_comp';
import ButtonComp from '../components/button_comp';

export default function VerificationScreen({navigation}){
    const goBack =() =>{
        navigation.navigate('welcomeMessage')
    }
    const goEnterCode = () =>{
        navigation.navigate('enterCode')
    }
    return(
        <View style={styles.container}>
            <View><BackButtonComp navigate={goBack}/></View>
            <View style={styles.innerContainer}>
                <Text style={styles.headingText}>Enter Your Email Address</Text>
                <Text style={styles.subHeading}>Please provide your email to get authenticated</Text>
                <TextInputComp placeholder={"Enter your email address"} keyboardType={'email-address'}/>
            <View style={styles.spacer}></View>
            <ButtonComp text={"Continue"} navigate={goEnterCode}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    headingText:{
        fontSize: 24,
        color: neutralColors.active,
        textAlign:'center',
        fontWeight: "500"

    },
    innerContainer:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        marginTop: 70
    },
    subHeading:{
        fontSize: 14,
        fontWeight: "regular",
        textAlign: "center",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,
        marginBottom: 25
    },
    continueBtn:{
        marginTop: 81
    },
    spacer:{
        marginTop: 81
    }
    
  });
  