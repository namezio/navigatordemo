import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GradientText from '../component/GradientText';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getContact} from '../redux/action/Contact';

const ContactScreen = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [searchText, setSearchText] = useState('');
  const contacts = useSelector(state => state.contact.contacts).map(x => ({
    name: x.name,
    meetingId: x.meetingId,
    shortName: x.shortName,
  }));
  const data = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  console.log(contacts);
  async function initSelect() {
    const response = await dispatch(getContact());
    if (response.error) {
      return;
    }
  }
  useState(() => {
    initSelect();
  }, []);

  return (
    <SafeAreaView
      style={{
        margin: 5,
      }}>
      <GradientText
        style={{
          fontSize: 35,
          fontWeight: '700',
        }}>
        Danh Bạ
      </GradientText>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            flex: 5,
            borderRadius: 5,
            height: 40,
            marginTop: 10,
            borderWidth: 1,
            maxWidth: 360,
            padding: 10,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
          placeholder={'Tìm Kiếm'}
        />
        <TouchableOpacity>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              marginTop: 7,
              marginLeft: 5,
            }}
            source={require('../icons/add_contact.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.body}>
        {data.map(x => {
          return (
            <TouchableOpacity>
              <View style={styles.item}>
                <AvatarShortName shortName={x.shortName} />
                <View style={{flexDirection: 'column', margin: 5}}>
                  <Text style={{fontSize: 20}}>{x.name}</Text>
                  <Text style={{fontSize: 13}}>{x.meetingId}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ContactScreen;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  item: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
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
const AvatarShortName = ({shortName}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        borderRadius: 30,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: '#FFF',
          fontSize: 24,
        }}>
        {shortName}
      </Text>
    </View>
  );
};
