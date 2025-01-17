import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BackButtonComp from '../components/back_button_comp';
import neutralColors from '../styles/neutralColors';
import OtpTextInputComp from '../components/otpTextInput_comp';
import brandColors from '../styles/brandColors';
import ButtonComp from '../components/button_comp';
export default function EnterCodeScreen({navigation}){
    const goBack =() =>{
        navigation.navigate('verification')
    }
    return(
        <View style={styles.container}>
            <View><BackButtonComp navigate={goBack}/></View>
           <View style={styles.innerContainer}>
                <Text style={styles.headingText}>Enter Code</Text>
                <Text style={styles.subHeading}>We have sent you an SMS with the code to mphomanaka91@gmail.com</Text>
                <View style={styles.otpTextInputStyles}>
                    <OtpTextInputComp placeholder={""}/>
                    <OtpTextInputComp placeholder={""}/>
                    <OtpTextInputComp placeholder={""}/>
                    <OtpTextInputComp placeholder={""}/>
                    <OtpTextInputComp placeholder={""}/>
                </View>
                <TouchableOpacity><Text style={styles.resendCodeStyle}>Resend Code</Text></TouchableOpacity>
                <ButtonComp text={"Verify"} />
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
    innerContainer:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        marginTop: 70
    },
    headingText:{
        fontSize: 24,
        color: neutralColors.active,
        textAlign:'center',
        fontWeight: "500"

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
    otpTextInputStyles:{
        display: "flex",
        flexDirection: "row",
        
    },
    resendCodeStyle:{
        marginTop: 77,
        color: brandColors.default,
        marginBottom: 100
    }
});