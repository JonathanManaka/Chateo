import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import TopHeaderComp from '../components/topHeader_comp';
import SearchTextInputComp from '../components/searchTexField_comp';
export default function ContactScreen(){
    return(
        <View style={styles.container}>
            <TopHeaderComp text={'Contact'} iconPath={'../assets/icons/add_icon.png'}/>
            <View style={styles.bodyContainer}>
                <SearchTextInputComp placeholder={'Search'} keyboardType={'default'}/>
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
    bodyContainer:{
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 25
        
    }
})