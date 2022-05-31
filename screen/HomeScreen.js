import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import SliderImage from '../component/SliderImage';
import {useNavigation, useRoute} from '@react-navigation/native';
import SiteHomeBottom from '../component/SiteHomeBottom';
import GradientText from '../component/GradientText';
import HomeSchedule from '../component/HomeSchedule';
import CalendarScreen from './CalendarScreen';
import ButtonGradient from '../component/ButtonGradient';
import {useDispatch, useSelector} from 'react-redux';
import CommonHelper from '../helpers/CommonHelper';
import {setData} from '../redux/action/MeetingList';
import dayjs from 'dayjs';
import ContactScreen from './ContactScreen';
// import {login} from '../redux/action/Auth';
function HomeScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    setName(auth.fullName);
    setCode(auth.meetingId);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'gray', maxWidth: 400, flex: 1}}>
      <HeaderHome />
      <ScrollView>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Xin chào, {name}
          </Text>
          <Text style={{fontSize: 20}}>Chào mừng bạn đến với Trans</Text>
        </View>
        <View style={{margin: 10, backgroundColor: '#FFF', borderRadius: 20}}>
          <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>TranS ID của bạn</Text>
            <GradientText
              style={{
                fontSize: 25,
                marginTop: 5,
                color: 'green',
                fontWeight: 'bold',
              }}>
              {code}
            </GradientText>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                color: 'blue',
              }}>
              Chia sẻ cho bạn của chúng tôi ???
            </Text>
          </View>
        </View>
        <SliderImage />
        <SiteHomeBottom />
        <GradientText style={{margin: 10, fontSize: 24}}>
          Meetings in Today
        </GradientText>
        <HomeSchedule />
      </ScrollView>
    </SafeAreaView>
  );
}
// Component menu icon va ten icon ben duoi

// cac man hinh o drawer

function Caidat() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Cai dat Screen</Text>
    </View>
  );
}

function Tienich() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Tien ich Screen</Text>
    </View>
  );
}

//memu drawer
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#65c1b6'}}>
        <Image
          source={require('../icons/Horizonal-Logo.png')}
          style={{margin: 10, width: 250, height: 65}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <ImageBackground
        source={require('../icons/bg-promotion.jpg')}
        imageStyle={{borderRadius: 10}}
        style={{
          margin: 10,
          maxWidth: 250,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../icons/noti.png')}
          />
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Thông Báo
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
          }}>
          <Text style={{fontSize: 16}}>
            <Text style={{fontWeight: 'bold'}}>TranS</Text>
            <Text style={{maxWidth: 200}}>
              {' '}
              giảm 50% giá trị cho các dịch vụ
            </Text>
          </Text>
        </View>
        <View style={{margin: 20}}>
          <ButtonGradient text="MUA NGAY" />
        </View>
      </ImageBackground>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <Dangxuatbutton />
      </View>
    </View>
  );
}
function Dangxuatbutton() {
  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();
  const confirmAlert = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Đăng xuất',
      //body
      'Bạn có chắc muốn đăng xuất',
      [
        {
          text: 'Có',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Không',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };
  return (
    <View style={{paddingVertical: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 40}}
          source={require('../icons/vn.png')}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 5,
            marginRight: 5,
          }}>
          {auth.fullName}
        </Text>
        <TouchableOpacity onPress={confirmAlert}>
          <Image
            style={{width: 40, height: 40, borderRadius: 40}}
            source={require('../icons/signout.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// tao navigator drawer va style drawer
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#65c1b6',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerItemStyle: {
          marginLeft: 30,
          marginRight: 20,
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image
              style={{width: 20, height: 20}}
              source={require('../icons/home.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Lich Hop"
        component={CalendarScreen}
        options={{
          drawerIcon: () => (
            <Image
              style={{width: 20, height: 20}}
              source={require('../icons/calendar.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Danh ba"
        component={ContactScreen}
        options={{
          drawerIcon: () => (
            <Image
              style={{width: 20, height: 20}}
              source={require('../icons/users-alt.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Tien ich"
        component={Tienich}
        options={{
          drawerIcon: () => (
            <Image
              style={{width: 20, height: 20}}
              source={require('../icons/apps.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cai dat"
        component={Caidat}
        options={{
          drawerIcon: () => (
            <Image
              style={{width: 20, height: 20}}
              source={require('../icons/settings.png')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function HeaderHome() {
  const navigation = useNavigation();
  const LanguageAlert = UriImage => {
    //function to make two option alert
    Alert.alert(
      //title
      'Ngôn ngữ',
      //body
      'Tiếng Việt hay Tiếng Anh',
      [
        {
          text: 'Tiếng Việt',
        },
        {
          text: 'Tiếng Anh',
          // onPress: () => (UriImage = '../navigatordemo/icons/eng.png'),
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <View style={{flex: 7}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../icons/menu.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', flex: 2}}>
        <TouchableOpacity onPress={LanguageAlert}>
          <Image
            style={{height: 40, width: 40, borderRadius: 40}}
            source={require('../icons/vn.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Noti')}>
          <Image
            style={{height: 40, width: 40, borderRadius: 40, marginLeft: 5}}
            source={require('../icons/noti.png')}
          />
        </TouchableOpacity>

        <Badge style={{position: 'absolute', top: 0, left: 70}}>5</Badge>
      </View>
    </View>
  );
}

export default MyDrawer;
