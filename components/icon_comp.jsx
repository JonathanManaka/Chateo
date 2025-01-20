import { StyleSheet, Image, TouchableOpacity } from 'react-native';
export default function IconComp({iconSource}){
    return(
        <TouchableOpacity style={styles.iconContainer}><Image  style={styles.iconStyle} source={iconSource} /></TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    iconStyle:{
        height: 24,
        width: 24,

    },
    iconContainer:{
        marginRight: 50
    }
})