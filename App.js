import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Notification from './NotificationScreen';
import MeetingRoomScreen from './siteScreens/MeetingRoomScreen';
import JoinRoomScreen from './siteScreens/JoinRoomScreen';
import CreateRoomScreen from './siteScreens/CreateRoomScreen';
import ManagerRoomScreen from './siteScreens/ManagerRoomScreen';
import signInScreen from './screen/SignInScreen';
import ForgetPasswordScreen from './screen/ForgetPasswordScreen';



const Stack = createNativeStackNavigator();
const options = { headerShown: false };
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
      <Stack.Screen name='Noti'component={Notification} options={options}/>
      <Stack.Screen name='MeetingRoom' component={MeetingRoomScreen} />
      <Stack.Screen name='JoinRoom' component={JoinRoomScreen}/>
      <Stack.Screen name='CreateRoom' component={CreateRoomScreen}/>
      <Stack.Screen name='ManagerRoom' component={ManagerRoomScreen}/>
      <Stack.Screen name='SignIn' component={signInScreen} options={options}/>
      <Stack.Screen name='Forget' component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

