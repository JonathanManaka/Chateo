import { StyleSheet, TextInput,Image, View } from 'react-native';
import neutralColors from '../styles/neutralColors';
export default function SearchTextInputComp({onChange, placeholder,text,keyboardType}){

    return(
       <View style={styles.searchInputTextContainer}>
        <Image source={require(`../assets/icons/searchIcon.png`)}/>
        <TextInput
        style={styles.textInputStyle}
        onChangeText={onChange}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
       </View>
    );
}
const styles = StyleSheet.create({
    textInputStyle:{
        width: "90%",
        color: neutralColors.weak,
        borderRadius: 4,
        paddingLeft: 15,
        height: 40
    },
    searchInputTextContainer:{
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: neutralColors.offWhite,
     
     
    }
})