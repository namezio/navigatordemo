import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ButtonLogin() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <LinearGradient
        colors={['#0390fc', '#3bd972']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderRadius: 10,
          height: 40,
          maxWidth: 360,
          backgroundColor: '#65c1b6',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: '800',
          }}>
          ĐĂNG NHẬP
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
