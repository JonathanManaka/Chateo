import { Image, TouchableOpacity,StyleSheet,Text } from 'react-native';
export default function BackButtonComp({navigate}){
    return(
        <TouchableOpacity  onPress={navigate} style={styles.backBtnStyle}><Text><Image  source={require('../assets/icons/back_icon.png')} /></Text></TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    backBtnStyle:{
        height: 24,
        width: 24,
        marginTop: 50,
        marginLeft: 16
    },
    
});