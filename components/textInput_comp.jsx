import { StyleSheet, TextInput, } from 'react-native';
import neutralColors from '../styles/neutralColors';
export default function TextInputComp({onChange, placeholder,text,keyboardType}){

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
        borderColor: '',
        borderWidth: 1,
        color: neutralColors.weak,
        borderRadius: 30,
        paddingLeft: 15
      
    }
})