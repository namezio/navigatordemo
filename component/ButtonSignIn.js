import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ButtonSignIn(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
          ĐĂNG KÝ
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default ButtonSignIn;
