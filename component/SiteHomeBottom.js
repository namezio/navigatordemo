import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
          colorS="#00ff1e"
          colorE="#3ab048"
        />
        <OptionItem
          icon={require('../icons/join.png')}
          label="Tham dự"
          onPress={() => {
            navigation.navigate('JoinRoom');
          }}
          colorS="#026ef2"
          colorE="#02c6f2"
        />
        <OptionItem
          icon={require('../icons/add_video.png')}
          label="Lập lịch họp"
          onPress={() => {
            navigation.navigate('CreateRoom');
          }}
          colorS="#f29e02"
          colorE="#f2da02"
        />
        <OptionItem
          icon={require('../icons/home_icon.png')}
          label="QL phòng họp"
          onPress={() => {
            navigation.navigate('ManagerRoom');
          }}
          colorS="#fc7b5b"
          colorE="#ed3507"
        />
      </View>
    </View>
  );
}
const OptionItem = ({icon, label, onPress, colorS, colorE, size}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
      }}
      onPress={onPress}>
      <LinearGradient
        colors={[colorS, colorE]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          backgroundColor: '#65c1b6',
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
      </LinearGradient>
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
