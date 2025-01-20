import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList} from 'react-native';
import TopHeaderComp from '../components/topHeader_comp';
import SearchTextInputComp from '../components/searchTexField_comp';
import UserContactComp from '../components/userContact_como';
import BottomNavComp from '../components/bottom_nav_comp';
export default function ContactScreen(){
    const contactsList = [<UserContactComp/>, <UserContactComp/>,<UserContactComp/>,];
    return(
        <View style={styles.container}>
            <TopHeaderComp text={'Contact'} iconPath={'../assets/icons/add_icon.png'}/>
            <View style={styles.bodyContainer}>
                <SearchTextInputComp placeholder={'Search'} keyboardType={'default'}/>
                <View style={styles.listContainer}>
                <FlatList
                data={contactsList}
                     renderItem={({item}) => item}
                />
                </View>
            </View>
            <BottomNavComp/>
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
        justifyContent: "flex-start",
        marginTop: 25,
        
       
        
    },
    listContainer:{
        display: 'flex',
        padding: 20,
        width: "100%",
        height: "75%"

    }
})