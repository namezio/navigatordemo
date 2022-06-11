import React, {useCallback, useState} from 'react';
import {
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
import {useNavigation} from '@react-navigation/native';
import {initData} from '../../redux/action/SearchForContact';
import AvatarShortName from '../../component/AvatarShortName';
function AddContact() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const search = async key => {
    const response = await dispatch(initData(key));
    if (response.error) {
      return;
    }
  };
  const contacts = useSelector(state => state.search.contacts).map(x => ({
    name: x.name,
    MeetingId: x.meetingId,
    shortName: x.shortName,
  }));
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
      {/*<Text>{JSON.stringify(contacts)}</Text>*/}
      <ScrollView style={styles.body}>
        {contacts.map(x => {
          return (
            <TouchableOpacity>
              <View style={styles.item}>
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
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default AddContact;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    height: 600,
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
