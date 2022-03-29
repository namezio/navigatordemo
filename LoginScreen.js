import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function LoginScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [textUser, onChangeTextUser] = React.useState(textUser);
  const [textPass, onChangeTextPass] = React.useState(textPass);

  return (
    <SafeAreaView style={{margin: 20, alignContent: 'center', maxHeight: 300}}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: '700',
          color: '#09bcc8',
        }}>
        Đăng nhập
      </Text>
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
        placeholder="Số di động, email hoặc tên đăng nhập"
        onChangeText={onChangeTextUser}
        value={textUser}
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
        onChangeText={onChangeTextPass}
        value={textPass}
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
      <TouchableOpacity
        style={{
          borderRadius: 10,
          height: 40,
          maxWidth: 360,
          backgroundColor: '#65c1b6',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
            alignSelf: 'center',
          }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{margin: 5}}>Chưa có tài khoản ?</Text>
          <Text
            style={styles.text2}
            onPress={() => navigation.navigate('SignIn')}>
            Đăng ký
          </Text>
        </View>
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate('Forget')}>
          Quên mật khẩu ?
        </Text>
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
