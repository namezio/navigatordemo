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
        />
        <OptionItem
          icon={require('../icons/join.png')}
          label="Tham dự"
          onPress={() => {
            navigation.navigate('JoinRoom');
          }}
        />
        <OptionItem
          icon={require('../icons/add_video.png')}
          label="Lập lịch họp"
          onPress={() => {
            navigation.navigate('CreateRoom');
          }}
        />
        <OptionItem
          icon={require('../icons/home_icon.png')}
          label="QL phòng họp"
          onPress={() => {
            navigation.navigate('ManagerRoom');
          }}
        />
      </View>
    </View>
  );
}
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
export default SiteHomeBottom;
