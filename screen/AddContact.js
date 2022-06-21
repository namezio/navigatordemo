import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientText from '../component/GradientText';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ContactAdd, initData} from '../redux/action/AddContact';
import AvatarShortName from '../component/AvatarShortName';
import CheckBox from '@react-native-community/checkbox';
import {xorBy} from 'lodash';
import * as dialogAction from '../redux/action/Dialog';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useForm, Controller} from 'react-hook-form';
function AddPersional() {
  const isPersional = true;
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [nameselected, setSelected] = useState([]);
  const [idSelected, setIdSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function getInfo() {
    const response = await dispatch(initData(value, isPersional));
    if (response.error) {
      return;
    }
    // console.log(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getInfo();
      setSelected([]);
      setIdSelected([]);
      setShow(false);
      setShow1(false);
    }, []),
  );
  function getId(id, name) {
    setSelected(xorBy(nameselected, [name], name));
    setIdSelected(xorBy(idSelected, [id], id));
    setChecked(!checked);
    setShow(!show);
    setShow1(!show1);
  }

  const search = async (key, per) => {
    const response = await dispatch(initData(key, per));
    if (response.error) {
      Alert.alert(
        //title
        response.message,
        //body
        response.message,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  const data = {
    name: '',
    idContacts: idSelected,
    isPersonal: true,
  };
  async function add() {
    const response = await dispatch(ContactAdd(data));
    if (response.error) {
      dispatch(
        dialogAction.showAlert(
          response.message || 'error.connect_server_failed',
        ),
        Alert.alert(response.message),
      );
      return;
    }
    Alert.alert(response.message);
    navigation.navigate('Contact');
  }
  const contacts = useSelector(state => state.search.contacts).map(x => ({
    name: x.name,
    MeetingId: x.meetingId,
    shortName: x.shortName,
    id: x.id,
  }));
  // console.log(contacts);
  return (
    <SafeAreaView style={styles.body}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
        }}>
        Thêm liên hệ mới
      </GradientText>
      <Text style={styles.text}>Tìm kiếm người dùng</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TextInput
          style={{
            flex: 4,
            borderRadius: 5,
            height: 40,
            borderWidth: 1,
            maxWidth: 360,
            padding: 10,
          }}
          placeholder={'Nhập Trans ID, số điện thoại hoặc email'}
          onChangeText={setValue}
        />
        <TouchableOpacity
          onPress={() => search(value, isPersional)}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        {show ? (
          <TouchableOpacity style={styles.item2}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              {nameselected}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <ScrollView style={styles.body}>
        {contacts.map(x => {
          return (
            <TouchableOpacity onPress={() => getId(x.id, x.name)}>
              <View style={styles.item}>
                <View style={{flex: 6, flexDirection: 'row'}}>
                  <AvatarShortName shortName={x.shortName} />
                  <View style={{flexDirection: 'column', margin: 5}}>
                    <GradientText style={{fontSize: 22, fontWeight: '600'}}>
                      {x.name}
                    </GradientText>
                    <Text style={{fontSize: 15, color: 'red'}}>
                      {x.MeetingId}
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  {show1 ? (
                    <CheckBox
                      value={checked}
                      onValueChange={newValue => setChecked(newValue)}
                    />
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => add()}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 5,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>Đồng ý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 5,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>Hủy bỏ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function AddGroup() {
  const isPersional = false;
  const [value, setValue] = useState('');
  const [select, setSelect] = useState([]);
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  var _ = require('lodash');

  async function getInfo() {
    const response = await dispatch(initData(value, isPersional));
    if (response.error) {
      return;
    }
    // console.log(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getInfo();
      setSelect([]);
      setShow(false);
      setShow1(false);
    }, []),
  );
  function getId(value) {
    // if (select.some(x => x.id === value.id) === false) {
    //   select.push(value);
    // } else {
    setSelect(xorBy(select, [value], 'id'));
    // }
    setChecked(!checked);
    setShow(true);
    setShow1(!show1);
  }
  const data = select.map(x => ({
    name: x.name,
    id: x.id,
  }));
  const pushID = data.map(x => x.id);
  const tab = {
    idContacts: pushID,
  };
  // console.log(tab);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      isPersonal: false,
    },
  });

  const search = async (key, per) => {
    const response = await dispatch(initData(key, per));
    if (response.error) {
      Alert.alert(
        //title
        response.message,
        //body
        response.message,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  const contacts = useSelector(state => state.search.contacts).map(x => ({
    name: x.name,
    MeetingId: x.meetingId,
    shortName: x.shortName,
    id: x.id,
  }));
  // console.log(contacts);
  const onSubmit = async post => {
    const total = {...post, ...tab};
    const response = await dispatch(ContactAdd(total));
    if (response.error) {
      dispatch(
        dialogAction.showAlert(
          response.message || 'error.connect_server_failed',
        ),
        Alert.alert(response.message),
      );
      return;
    }
    Alert.alert(response.message);
    navigation.navigate('Contact');
  };

  return (
    <SafeAreaView style={styles.body}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
        }}>
        Thêm nhóm mới
      </GradientText>
      <Text style={styles.text}>Tên nhóm</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{
              borderRadius: 5,
              height: 40,
              borderWidth: 1,
              padding: 10,
            }}
            placeholder={'Tên nhóm'}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="name"
      />
      {errors.name && <Text>Đây là dữ liệu bắt buộc</Text>}
      <Text style={styles.text}>Tìm kiếm người dùng</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            flex: 4,
            borderRadius: 5,
            height: 40,
            borderWidth: 1,
            maxWidth: 360,
            padding: 10,
          }}
          placeholder={'Nhập Trans ID, số điện thoại hoặc email'}
          onChangeText={setValue}
        />
        <TouchableOpacity
          onPress={() => search(value, isPersional)}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true}>
          {show
            ? data.map(x => {
                return (
                  <TouchableOpacity style={styles.item2}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {x.name}
                    </Text>
                  </TouchableOpacity>
                );
              })
            : null}
        </ScrollView>
      </View>
      <ScrollView style={styles.body}>
        {contacts.map(x => {
          return (
            <TouchableOpacity onPress={() => getId(x)}>
              <View style={styles.item}>
                <View style={{flex: 6, flexDirection: 'row'}}>
                  <AvatarShortName shortName={x.shortName} />
                  <View style={{flexDirection: 'column', margin: 5}}>
                    <GradientText style={{fontSize: 22, fontWeight: '600'}}>
                      {x.name}
                    </GradientText>
                    <Text style={{fontSize: 15, color: 'red'}}>
                      {x.MeetingId}
                    </Text>
                  </View>
                </View>
                {/*<View style={{flex: 1}}>*/}
                {/*  {show1 ? (*/}
                {/*    <CheckBox*/}
                {/*      value={checked}*/}
                {/*      onValueChange={newValue => setChecked(newValue)}*/}
                {/*    />*/}
                {/*  ) : null}*/}
                {/*</View>*/}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 5,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>Đồng ý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 5,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>Hủy bỏ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();
function AddContact() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Thêm liên hệ mới"
        component={AddPersional}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'Thêm liên hệ mới',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../icons/add-user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42d7f5' : '#42f57e',
                }}
              />
              <Text
                style={{color: focused ? '#42d7f5' : '#42f57e', fontSize: 12}}>
                Thêm liên hệ mới
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Thêm nhóm mới"
        component={AddGroup}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../icons/add-group.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42d7f5' : '#42f57e',
                }}
              />
              <Text
                style={{color: focused ? '#42d7f5' : '#42f57e', fontSize: 12}}>
                Thêm nhóm mới
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default AddContact;
const styles = StyleSheet.create({
  body: {
    margin: 5,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent',
  },
  item: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  item2: {
    backgroundColor: 'red',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  text2: {
    fontSize: 15,
    marginTop: 5,
    color: '#65c1b6',
  },
});
