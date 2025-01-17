import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import brandColors from '../styles/brandColors';
import neutralColors from '../styles/neutralColors';
export default function ButtonComp({navigate, text}){
    return(
       <TouchableOpacity onPress={navigate} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>{text}</Text></TouchableOpacity>
    );
}
const styles = StyleSheet.create({
   
    buttonStyle:{
        width: 327,
        height: 52,
        backgroundColor: brandColors.default,
        alignItems: "center",
        borderRadius: 30,
        justifyContent: "center",
        
    },
    buttonTextStyle:{
        fontSize: 16,
        color: neutralColors.offWhite
    }
  });