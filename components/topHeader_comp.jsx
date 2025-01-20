import { StyleSheet, Text, View } from 'react-native';
import IconComp from './icon_comp';
export default function TopHeaderComp({text, iconSource}){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>{text}</Text>
            <View style={styles.iconsContainer}>
                <IconComp iconSource={iconSource}/>
        
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainer:{
        width: "90%",
        height: 30,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginTop: 50,
        marginLeft: 24,
        

    },
    iconsContainer:{
        marginLeft: "auto",
        display: 'flex',
        flexDirection: 'row'
    },
    textStyle:{
        fontSize: 18,
        fontWeight: "semibold"
    }
})