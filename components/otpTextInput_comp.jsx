import { StyleSheet, TextInput,View } from 'react-native';
import brandColors from '../styles/brandColors';
import neutralColors from '../styles/neutralColors';
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
        backgroundColor: neutralColors.white,
        textAlign: 'center',
        borderRadius: 15,
        fontSize: 22,
        borderWidth: 2,
        

      
    },
    boxStyle:{
        height: 55,
        width: 55,
        margin: 5
    }
});