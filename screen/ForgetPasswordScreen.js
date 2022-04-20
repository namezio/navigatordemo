import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import GradientText from '../component/GradientText';
import ButtonGradient from '../component/ButtonGradient';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as dialogAction from '../redux/action/Dialog';
import {useDispatch} from 'react-redux';
import {recoPass} from '../redux/action/RecoveryPassword';

const schema = yup.object({
  email: yup.string().required('Thông tin bắt buộc'),
});
const defaultValues = {
  email: '',
};
const ForgetPasswordScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const submit = async data => {
    dispatch(dialogAction.showLoading());
    const result = await dispatch(recoPass(data));
    dispatch(dialogAction.dismissLoading());
    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
        Alert.alert(result.message),
      );
      return;
    }
    console.log(data);
    navigation.navigate.back();
  };
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.textinput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          * Thông tin bắt buộc
        </Text>
      )}
      <ButtonGradient
        onPress={handleSubmit(submit)}
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
  textinput: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    maxWidth: 360,
    padding: 10,
  },
});
export default ForgetPasswordScreen;
