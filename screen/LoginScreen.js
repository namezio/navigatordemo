import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import GradientText from '../component/GradientText';
import ButtonGradient from '../component/ButtonGradient';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as dialogAction from '../redux/action/Dialog';
import {login} from '../redux/action/Auth';

function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const auth = useSelector(state => state.auth);
  const defaultValues = {
    username:
      auth && auth.username && auth.username.length > 0 ? auth.username : '',
    password: '',
  };

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const {control, handleSubmit, setFocus, setValue, register} = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const submit = async data => {
    dispatch(dialogAction.showLoading());
    const result = await dispatch(login(data));
    dispatch(dialogAction.dismissLoading());
    if (result.error) {
      dispatch(
        dialogAction.showAlert(
          result.message || 'error.connect_server_failed',
          () => setValue('password', ''),
        ),
        Alert.alert(result.message),
      );
      return;
    }
    navigation.navigate('Home');
  };
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
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('password')}
            style={{
              height: 40,
              marginTop: 10,
              borderWidth: 1,
              maxWidth: 360,
              padding: 10,
            }}
            placeholder="Số di động, email hoặc tên đăng nhập"
          />
        )}
        name="username"
      />
      <Text style={styles.text}>Mật khẩu</Text>
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChange}
            secureTextEntry
            style={{
              height: 40,
              marginTop: 10,
              borderWidth: 1,
              marginBottom: 10,
              maxWidth: 360,
              padding: 10,
            }}
            placeholder="Mật khẩu"
            error={!!fieldError}
            hint={fieldError?.message}
            onSubmitEditing={handleSubmit(submit)}
          />
        )}
        name="password"
      />
      <Text>{passwordError}</Text>
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
      <ButtonGradient text={'ĐĂNG NHẬP'} onPress={handleSubmit(submit)} />
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
