import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientText from '../../component/GradientText';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ContactAdd, initData} from '../../redux/action/AddContact';
import AvatarShortName from '../../component/AvatarShortName';
import CheckBox from '@react-native-community/checkbox';
import {xorBy} from 'lodash';
import * as dialogAction from '../../redux/action/Dialog';

function AddContact() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [nameselected, setSelected] = useState([]);
  const [idSelected, setIdSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function getInfo() {
    const response = await dispatch(initData());
    if (response.error) {
      return;
    }
    // console.log(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getInfo();
    }, []),
  );
  function getId(id, name) {
    setSelected(xorBy(nameselected, [name], name));
    setIdSelected(xorBy(idSelected, [id], id));
    setChecked(!checked);
    setShow(!show);
    setShow1(!show1);
  }

  const search = async key => {
    const response = await dispatch(initData(key));
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
    <SafeAreaView style={{margin: 5}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
        }}>
        Thêm liên hệ mới
      </GradientText>
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
          onPress={() => search(value)}
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
export default AddContact;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    height: 550,
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
    marginTop: 5,
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
  },
  text2: {
    fontSize: 15,
    marginTop: 5,
    color: '#65c1b6',
  },
});
