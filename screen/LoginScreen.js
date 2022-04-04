import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GradientText from '../component/GradientText';
import ButtonGradient from '../component/ButtonGradient';
import {useSelector, useDispatch} from 'react-redux';
import {Auth} from '../redux/reducer/AuthReducer';
import {SignIn} from '../redux/action/AuthAction';

function LoginScreen({navigation}) {
  const [fullname, onChangeName] = React.useState('AAA');
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const info = useSelector(state => state.Auth);
  useEffect(() => {
    console.log('INFO', info);
  });
  return (
    <SafeAreaView style={{margin: 20, alignContent: 'center', maxHeight: 300}}>
      <GradientText
        style={{
          fontSize: 35,
          fontWeight: '700',
          color: '#09bcc8',
        }}>
        Đăng Nhập
      </GradientText>
      <Text
        style={{
          fontSize: 18,
          color: 'gray',
          marginTop: 10,
        }}>
        Hãy nhập thông tin của bạn để đăng nhập
      </Text>
      <Text style={styles.text}>Tên đăng nhập</Text>
      <TextInput
        style={{
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
        onChangeText={onChangeName}
        value={fullname}
        placeholder="Số di động, email hoặc tên đăng nhập"
      />
      <Text style={styles.text}>Mật khẩu</Text>
      <TextInput
        secureTextEntry={true}
        style={{
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          marginBottom: 10,
          maxWidth: 360,
          padding: 10,
        }}
        placeholder="Mật khẩu"
      />
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: 'white', true: '#65c1b6'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Lưu thông tin đăng nhập
        </Text>
      </View>
      <ButtonGradient
        text="ĐĂNG NHẬP"
        onPress={() => {
          console.log('Fullname :', fullname);
          dispatch(SignIn(fullname));
        }}
      />
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{margin: 5}}>Chưa có tài khoản ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <GradientText style={styles.text2}> Đăng Ký</GradientText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <GradientText style={styles.text2}>Quên mật khẩu ?</GradientText>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Copyright @ 2022 by Namviet Telecom</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
export default LoginScreen;
