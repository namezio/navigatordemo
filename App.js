import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import Notification from './screen/NotificationScreen';
import MeetingRoomScreen from './screen/siteScreens/MeetingRoomScreen';
import JoinRoomScreen from './screen/siteScreens/JoinRoomScreen';
import CreateRoomScreen from './screen/siteScreens/CreateRoomScreen';
import ManagerRoomScreen from './screen/siteScreens/ManagerRoomScreen';
import signInScreen from './screen/SignInScreen';
import ForgetPasswordScreen from './screen/ForgetPasswordScreen';
import AddCalendar from './screen/addCalendar';
import CalendarScreen from './screen/CalendarScreen';
import {Provider} from 'react-redux';
import {store} from './redux';

const Stack = createNativeStackNavigator();
const options = {headerShown: false};
function MyStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={options} />
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
        <Stack.Screen name="Noti" component={Notification} options={options} />
        <Stack.Screen name="MeetingRoom" component={MeetingRoomScreen} />
        <Stack.Screen name="JoinRoom" component={JoinRoomScreen} />
        <Stack.Screen name="CreateRoom" component={CreateRoomScreen} />
        <Stack.Screen name="ManagerRoom" component={ManagerRoomScreen} />
        <Stack.Screen
          name="SignIn"
          component={signInScreen}
          options={options}
        />
        <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
        <Stack.Screen name="AddCalendar" component={AddCalendar} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
