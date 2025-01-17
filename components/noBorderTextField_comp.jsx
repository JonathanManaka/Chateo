import { StyleSheet, TextInput, } from 'react-native';
import neutralColors from '../styles/neutralColors';
export default function NoBorderTextInputComp({onChange, placeholder,text,keyboardType}){

    return(
        <TextInput
        style={styles.textInputStyle}
        onChangeText={onChange}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    );
}
const styles = StyleSheet.create({
    textInputStyle:{
        height: 52,
        width: "80%",
        color: neutralColors.weak,
        borderRadius: 4,
        paddingLeft: 15,
        backgroundColor: neutralColors.offWhite
      
    }
})