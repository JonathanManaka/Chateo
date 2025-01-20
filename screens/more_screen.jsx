import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import TopHeaderComp from '../components/topHeader_comp';
import Icons from '../components/icons';
import neutralColors from '../styles/neutralColors';
import IconComp from '../components/icon_comp';
import BottomNavComp from '../components/bottom_nav_comp';
import MoreNacComp from '../components/moreNav_comp';
export default function MoreScreen({navigation}){
    const chatsScreenNav = () =>{
        navigation.navigate('chats');
    }

    const contactsScreenNav = () =>{
        navigation.navigate('contacts');
    }
    return(
        <View style={styles.container}>
            <TopHeaderComp text={"More"}/>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profileImgContainer}>
                    <Image source={Icons.userIcon}/>
                </View>
                <View style={styles.nameEmailStyle}>
                    <Text style={{fontSize: 14, fontWeight: "semibold",color: neutralColors.active}}>Mpho Manaka</Text>
                    <Text style={{fontSize: 12, fontWeight: "regular",color: neutralColors.weak}}>Mphomanaka91@gmail.com</Text>
                </View>
                <View style={styles.leftArrowBtnContainer}>
                    <IconComp iconSource={Icons.leftArrowIcon} />
                </View>
            </View>
            <View style={styles.moreBody}>
               <MoreNacComp text={'Account'} icon={Icons.userIcon}/>
               <View style={styles.line}></View>
               <View style={styles.middleNav}>
                    <MoreNacComp text={'Appearance'} icon={Icons.appearanceIcon}/>
                    <MoreNacComp text={'Notification'} icon={Icons.notificationIcon}/>
                     <MoreNacComp text={'privacy'} icon={Icons.privacyIcon}/>
               </View>
               <View style={styles.line}></View>
                <View style={styles.lastNav}>
                    <MoreNacComp text={'Help'} icon={Icons.helpIcon}/>
                    <MoreNacComp text={'Invite a friend'} icon={Icons.inviteIcon}/>
                    </View>
            </View>
            <BottomNavComp chatsNav={chatsScreenNav} contactNav={contactsScreenNav}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    profileInfoContainer:{
        marginTop: 8,
        width: "98%",
        height: 66,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,

    },
    profileImgContainer:{
        height: 50,
        width: 50,
        backgroundColor: neutralColors.line,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    nameEmailStyle:{
        marginLeft: 25
    },
    leftArrowBtnContainer:{
        marginLeft: 'auto'
       
    },
    moreBody:{
        height: "72%",
        width: "98%",
        display: 'flex',
        

        
    },
    middleNav:{
        marginTop: 50,
        marginBottom: 50
    },
    lastNav:{
        marginTop: 100
    },
    line:{
        height:1,
        backgroundColor: neutralColors.line,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20

    }
})