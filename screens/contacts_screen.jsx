import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import TopHeaderComp from '../components/topHeader_comp';
export default function ContactScreen(){
    return(
        <View style={styles.container}>
            <TopHeaderComp text={'Contact'} iconPath={'../assets/icons/add_icon.png'}/>
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
})