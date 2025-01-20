import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import TopHeaderComp from '../components/topHeader_comp';
import SearchTextInputComp from '../components/searchTexField_comp';
import UserChatComp from '../components/userChat_comp';
import BottomNavComp from '../components/bottom_nav_comp';
export default function ChatsScreen({navigation}){
    const contactScreenNav = () =>{
        navigation.navigate('contacts');
    }
    const moreScreenNav = () =>{
        navigation.navigate('more');
    }
    const chatList = [<UserChatComp profileUrl={'https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg'} fromName={'Mpho'} lastSeen={'Yesterday'} recentMsg={'Hey Where are you? you said you gonna come yesterday your sih'} unreadMsgCount={'2'}/>,<UserChatComp profileUrl={'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg'} fromName={'James'} lastSeen={'14:30'} recentMsg={'What the fuck dude?'}  unreadMsgCount={'1'}/>];
    return(
        <View style={styles.container}> 
            <TopHeaderComp text={'Chats'}/> 
           <View style={styles.bodyContainer}>
           <View style={styles.searchContainer}><SearchTextInputComp placeholder={"Search"}/></View>
            <View style={styles.userChatList}>
                <FlatList
                    data={chatList}
                    renderItem={({item}) => item}
                />
            </View>
           </View>
            <BottomNavComp contactNav={contactScreenNav} moreNav={moreScreenNav}/>
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
    userChatList:{
        width: "90%",
        marginTop: 16,
        height: "72%",
     
    },
    searchContainer:{
        marginTop: 20
    },
    bodyContainer:{
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "flex-start",
        marginTop: 25,
    },
});