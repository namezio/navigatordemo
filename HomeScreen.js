import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableOpacityBase,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import SliderImage from './SliderImage';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#fafafa', maxWidth: 386, flex: 1}}>
      <HeaderHome />
      <ScrollView>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Xin chào, Nguyễn Thành Hung
          </Text>
          <Text style={{fontSize: 20}}>Chào mừng bạn đến với Trans</Text>
        </View>
        <CodeCall />
        <SliderImage />
        <SiteHomeBottom />
      </ScrollView>
    </SafeAreaView>
  );
}
// Component menu icon va ten icon ben duoi
const OptionItem = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
      }}
      onPress={onPress}>
      <View style={{width: 60, height: 60}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          marginTop: 5,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
// cac man hinh o drawer
function Lichhop() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Lich hop Screen</Text>
    </View>
  );
}

function Danhba() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Danh ba Screen</Text>
    </View>
  );
}
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
        contentContainerStyle={{backgroundColor: '#FFF'}}>
        <Image
          source={require('../navigatordemo/icons/vn.png')}
          style={{margin: 20, width: 250, height: 100}}
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
      <TouchableOpacity
        style={{
          backgroundColor: '#ccc',
          margin: 10,
          borderRadius: 10,
          maxWidth: 250,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
          }}>
          <Avatar.Image
            size={30}
            source={require('../navigatordemo/icons/vn.png')}
          />
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Thong bao
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
              giam 50% gia tri cho cac goi dich vu
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            margin: 20,
            borderRadius: 10,
            height: 40,
            maxWidth: 360,
            backgroundColor: '#65c1b6',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFF'}}>MUA NGAY</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <Dangxuatbutton />
      </View>
    </View>
  );
}
function Dangxuatbutton() {
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
          onPress: () => navigation.navigate('Login'),
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
        <Avatar.Image
          size={40}
          source={require('../navigatordemo/icons/vn.png')}
        />
        <Text
          style={{
            fontSize: 15,
            marginLeft: 5,
            marginRight: 5,
          }}>
          Nguyen Thanh Hung
        </Text>
        <TouchableOpacity onPress={confirmAlert}>
          <Avatar.Image
            size={30}
            source={require('../navigatordemo/icons/signout.png')}
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
            <Avatar.Image
              size={20}
              source={require('../navigatordemo/icons/vn.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Lich Hop"
        component={Lichhop}
        options={{
          drawerIcon: () => (
            <Avatar.Image
              size={20}
              source={require('../navigatordemo/icons/vn.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Danh ba"
        component={Danhba}
        options={{
          drawerIcon: () => (
            <Avatar.Image
              size={20}
              source={require('../navigatordemo/icons/vn.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Tien ich"
        component={Tienich}
        options={{
          drawerIcon: () => (
            <Avatar.Image
              size={20}
              source={require('../navigatordemo/icons/vn.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cai dat"
        component={Caidat}
        options={{
          drawerIcon: () => (
            <Avatar.Image
              size={20}
              source={require('../navigatordemo/icons/vn.png')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
function CodeCall() {
  return (
    <View style={{margin: 10, backgroundColor: '#FFF', borderRadius: 20}}>
      <View style={{margin: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>TranS ID của bạn</Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 5,
            color: 'green',
            fontWeight: 'bold',
          }}>
          0123456
        </Text>
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
          // onPress: () => UriImage=('../navigatordemo/icons/eng.png')
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
            source={require('../navigatordemo/icons/menu.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', flex: 2}}>
        <TouchableOpacity onPress={LanguageAlert}>
          <Avatar.Image
            size={40}
            source={require('../navigatordemo/icons/vn.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Noti')}>
          <Avatar.Image
            style={{marginLeft: 5}}
            size={40}
            source={require('../navigatordemo/icons/nuti.png')}
          />
        </TouchableOpacity>

        <Badge style={{position: 'absolute', top: 0, left: 70}}>4</Badge>
      </View>
    </View>
  );
}
function SiteHomeBottom() {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <OptionItem
          icon={require('../navigatordemo/icons/openroom.png')}
          label="Mở phòng họp"
          onPress={() => {
            navigation.navigate('MeetingRoom');
          }}
        />
        <OptionItem
          icon={require('../navigatordemo/icons/join.png')}
          label="Tham dự"
          onPress={() => {
            navigation.navigate('JoinRoom');
          }}
        />
        <OptionItem
          icon={require('../navigatordemo/icons/add_video.png')}
          label="Lập lịch họp"
          onPress={() => {
            navigation.navigate('CreateRoom');
          }}
        />
        <OptionItem
          icon={require('../navigatordemo/icons/home_icon.png')}
          label="QL phòng họp"
          onPress={() => {
            navigation.navigate('ManagerRoom');
          }}
        />
      </View>
    </View>
  );
}
export default MyDrawer;
