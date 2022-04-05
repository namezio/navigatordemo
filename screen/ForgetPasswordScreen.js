import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GradientText from '../component/GradientText';
import ButtonGradient from '../component/ButtonGradient';

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 35,
          fontWeight: '700',
        }}>
        Quên mật khẩu
      </GradientText>

      <Text
        style={{
          fontSize: 18,
          color: 'gray',
          marginTop: 10,
        }}>
        Chúng tôi sẽ gửi mật khẩu đến email của bạn
      </Text>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={{
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
        placeholder="Email"
      />
      <ButtonGradient
        onPress={() => navigation.navigate('Login')}
        text={'Gửi mã bảo mật đến Email của tôi'}
      />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.text}>Đã có mật khẩu ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <GradientText style={styles.text}> Đăng nhập</GradientText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 10,
  },
  text2: {
    fontSize: 15,
    marginTop: 5,
    color: '#65c1b6',
  },
});
export default ForgetPasswordScreen;
