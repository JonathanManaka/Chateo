import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeMessageScreen from './screens/welcome_message_screen';
import VerificationScreen from './screens/verification_screen';
import EnterCodeScreen from './screens/enterCode_screen';
import CreateProfileScreen from './screens/createProfile_screen';
import ContactScreen from './screens/contacts_screen';
import ChatsScreen from './screens/chats_screen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="welcomeMessage">
          <Stack.Screen name="welcomeMessage" component={WelcomeMessageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="verification" component={VerificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="enterCode" component={EnterCodeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="createProfile" component={CreateProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="contacts" component={ContactScreen} options={{ headerShown: false }} />
          <Stack.Screen name="chats" component={ChatsScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

