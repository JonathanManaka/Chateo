import { StyleSheet, TextInput,View } from 'react-native';
import brandColors from '../styles/brandColors';
export default function OtpTextInputComp({placeholder,setText,text}){
    return(
      
        <View style={styles.boxStyle}>
             <TextInput
                   style={styles.textInputStyle}
                   onChangeText={setText}
                   value={text}
                   placeholder={placeholder}
                   keyboardType='number-pad'
                 />
        </View>
        
    );
}
const styles = StyleSheet.create({
    textInputStyle:{
        backgroundColor: brandColors.background,
        textAlign: 'center',
        borderRadius: 15
      
    },
    boxStyle:{
        height: 55,
        width: 55,
        }
});