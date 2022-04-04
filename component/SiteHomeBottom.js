import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

function SiteHomeBottom() {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <OptionItem
          icon={require('../icons/openroom.png')}
          label="Mở phòng họp"
          onPress={() => {
            navigation.navigate('MeetingRoom');
          }}
          color={'pink'}
        />
        <OptionItem
          icon={require('../icons/join.png')}
          label="Tham dự"
          onPress={() => {
            navigation.navigate('JoinRoom');
          }}
          color={'yellow'}
        />
        <OptionItem
          icon={require('../icons/add_video.png')}
          label="Lập lịch họp"
          onPress={() => {
            navigation.navigate('CreateRoom');
          }}
          color={'green'}
        />
        <OptionItem
          icon={require('../icons/home_icon.png')}
          label="QL phòng họp"
          onPress={() => {
            navigation.navigate('ManagerRoom');
          }}
          color={'red'}
        />
      </View>
    </View>
  );
}
const OptionItem = ({icon, label, onPress, color}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          backgroundColor: color,
          borderRadius: 5,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            width: 40,
            height: 40,
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
export default SiteHomeBottom;
