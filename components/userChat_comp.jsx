import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import neutralColors from '../styles/neutralColors';
import brandColors from '../styles/brandColors';
export default function UserChatComp({fromName,recentMsg,unreadMsgCount,lastSeen, profileUrl}){
    return(
        <TouchableOpacity>
            <View style={styles.contactContainer}>
            <View style={styles.innerContainer}>
                <Image style={styles.profileImgStyles} source={{ uri: `${profileUrl}`}} />
                <View style={styles.contactInfoStyle}>
                    <Text style={styles.contactNameStyle}>{fromName}</Text>
                    <Text style={styles.contactStatusStyle} >{recentMsg}</Text>
                </View>
                <View style={styles.dateMSgCountStyle}>
                    <Text style={{fontSize: 10, fontWeight: "regular",color:neutralColors.weak}}>{lastSeen}</Text>
                    <View style={styles.messagesCountStyle}><Text style={{textAlign: "center",fontSize: 10, fontWeight: "semibold"}}>{unreadMsgCount}</Text></View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    contactContainer:{
        height: 68,
        width: "90%",
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'column'
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
        color: neutralColors.weak,
        width: 200,
        height: 18
    },
    messagesCountStyle:{
        height: 22,
        width: 22,
        borderRadius: 40,
        backgroundColor: brandColors.background,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    dateMSgCountStyle:{
        marginLeft: "auto",
       
    }
});