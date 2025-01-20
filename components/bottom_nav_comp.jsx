import { StyleSheet, Text, TouchableOpacity,View,Image } from 'react-native';
import neutralColors from '../styles/neutralColors';
export default function BottomNavComp(){
    return(
        <View style={styles.bottomNavContainer}>
            <TouchableOpacity style={styles.iconContainer}><Image  style={styles.iconStyle} source={require(`../assets/icons/contact_icon.png`)} /></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Image  style={styles.iconStyle} source={require(`../assets/icons/chats_icon.png`)} /></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Image  style={styles.iconStyle} source={require(`../assets/icons/more_icon.png`)} /></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    bottomNavContainer:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: "100%",
        height: "25%",
        shadowColor: neutralColors.weak,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
        
    },
    iconContainer:{
        height: 58,
        width: 58,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
    iconStyle: {
        height: 38,
        width: 38
    }
    
});