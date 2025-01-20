import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import neutralColors from '../styles/neutralColors';
export default function UserContactComp(){
    return(
        <TouchableOpacity>
            <View style={styles.contactContainer}>
            <View style={styles.innerContainer}>
                <Image style={styles.profileImgStyles} source={{ uri: 'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg'}} />
                <View style={styles.contactInfoStyle}>
                    <Text style={styles.contactNameStyle}>Mpho Manaka</Text>
                    <Text style={styles.contactStatusStyle}>Last seen yesterday</Text>
                </View>
            </View>
            <View style={styles.borderLine}></View>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    contactContainer:{
        height: 68,
        width: "100%",
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'column'
    },
    borderLine:{
        width: "100%",
        borderWidth: 0.3,
        borderColor: neutralColors.line
    },
    profileImgStyles:{
        width: 48,
        height: 48,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: neutralColors.offWhite
    },
    innerContainer:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 68
    },
    contactInfoStyle:{
        marginLeft: 12
    },
    contactNameStyle:{
        fontSize: 14,
        fontWeight: 'semibold'
    },
    contactStatusStyle:{
        fontSize: 12,
        fontWeight: 'regular',
        color: neutralColors.disable
    }
});