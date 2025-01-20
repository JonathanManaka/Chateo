import { StyleSheet, Image, TouchableOpacity,View ,Text} from 'react-native';
import IconComp from './icon_comp';
import Icons from './icons';
import neutralColors from '../styles/neutralColors';
export default function MoreNacComp({icon,text}){
    return(
        <View style={styles.MoreNavContainer}>
            <View style={styles.iconContainer}>
                <IconComp iconSource={icon}/>
            </View>
            <View style={styles.nameContainer}>
                <Text style={{fontSize: 14,color: neutralColors.active }}>{text}</Text>
            </View>
            <View style={styles.leftArrowIconContainer}>
                <IconComp iconSource={Icons.leftArrowIcon}/>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    MoreNavContainer:{
        width: "100%",
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        marginTop: 10
    },
    leftArrowIconContainer:{
        marginLeft: 'auto'
    }
})