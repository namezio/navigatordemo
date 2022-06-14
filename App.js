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
import signInScreen from './screen/SignUpScreen';
import ForgetPasswordScreen from './screen/ForgetPasswordScreen';
import AddCalendar from './screen/Calendar/addCalendar';
import CalendarScreen from './screen/Calendar/CalendarScreen';
import {Provider} from 'react-redux';
import {store} from './redux';
import FreeJoinScreen from './screen/FreeJoinScreen';
import GetScheduleScreen from './screen/GetScheduleScreen';
import EditCalendar from './screen/Calendar/editCalendar';
import AddContact from './screen/Contact/AddContact';
import ContactScreen from './screen/Contact/ContactScreen';

const Stack = createNativeStackNavigator();
const options = {headerShown: false};
function MyStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        {/*<Stack.Screen*/}
        {/*  name="Splash"*/}
        {/*  component={SplashScreen}*/}
        {/*  options={options}*/}
        {/*/>*/}
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
        <Stack.Screen
          name="Forget"
          component={ForgetPasswordScreen}
          options={options}
        />
        <Stack.Screen name="AddCalendar" component={AddCalendar} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="FreeJoin" component={FreeJoinScreen} />
        <Stack.Screen name="GetSchedule" component={GetScheduleScreen} />
        <Stack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={options}
        />
        <Stack.Screen name="EditCalendar" component={EditCalendar} />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={options}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={options}
        />
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
