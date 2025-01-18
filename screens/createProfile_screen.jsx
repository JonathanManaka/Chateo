import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import BackButtonComp from '../components/back_button_comp';
import neutralColors from '../styles/neutralColors';
import NoBorderTextInputComp from '../components/noBorderTextField_comp';
import ButtonComp from '../components/button_comp';
export default function CreateProfileScreen({navigation}){
    const goBack =() =>{
        navigation.navigate('enterCode');
    }
    const saveProfile =() =>{
        navigation.navigate('contacts');
    }
    return(
        <View style={styles.container}>
           <View style={styles.topHeader}>
                <BackButtonComp navigate={goBack}/>
                <Text style={styles.headerTextStyle}>Your Profile</Text>
           </View>
           <View style={styles.bodyContainer}>
                <TouchableOpacity style={styles.addAvatarStyle}><Image source={require('../assets/images/add_avatar.png')}/></TouchableOpacity>
                <NoBorderTextInputComp placeholder={"First Name (Required)"} keyboardType={'default'}/>
                <View style={styles.spacer}></View>
                <NoBorderTextInputComp placeholder={"Last Name (Optional)"} keyboardType={'default'}/>
                <View style={styles.spacer2}></View>
                <ButtonComp text={"Save"} navigate={saveProfile}/>
           </View>
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
    topHeader:{
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
      

        
    },
    headerTextStyle:{
        marginTop: 50,
        marginLeft: 20,
        color: neutralColors.active,
        fontSize: 18,
        fontWeight: "semibold"
    },
    addAvatarStyle:{
        height: 100,
        width: 100,
        backgroundColor: neutralColors.offWhite,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 31
    },
    bodyContainer:{
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        marginTop: 46,
    },
    spacer:{
        height: 18
    },
    spacer2:{
        marginTop: 68
    }
})