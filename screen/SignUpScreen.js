import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGradient from '../component/ButtonGradient';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as dialogAction from '../redux/action/Dialog';
import {
  registerSignUp,
  setCareer,
  setCountry,
  signUpActions,
  submit,
} from '../redux/action/SignUp';
import {initData} from '../redux/action/SignUp';

function SignUpScreen({navigation}) {
  const dispatch = useDispatch();
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);
  const signUp = useSelector(state => state.signUp);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const careers = useSelector(state => state.signUp.careers).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const countries = useSelector(state => state.signUp.countries).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const defaultValues = {
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    idCountry: '',
    idCareer: 0,
  };

  const schema = yup.object().shape({
    fullname: yup.string().required('validate.required'),
    email: yup
      .string()
      .required('validate.required')
      .email('validate.invalid_email_format'),
    mobile: yup.string().required('validate.required'),
    password: yup.string().required('validate.required'),
    confirmPassword: yup
      .string()
      .required('validate.required')
      .oneOf([yup.ref('password'), null], 'validate.confirm_password_wrong'),
    idCountry: yup.string().required(),
    idCareer: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    setFocus,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  // async function showData() {
  //   const response = await dispatch(initData());
  // }
  // showData();

  useEffect(() => {
    console.log('Country changed');
    setValue('idCountry', signUp.country ? signUp.country.value : '');
    setValue('country', signUp.country ? signUp.country.label : '');
  }, [setValue, signUp.country]);

  useEffect(() => {
    console.log('Career changed');
    setValue('idCareer', signUp.career ? signUp.career.value : '');
    setValue('career', signUp.career ? signUp.career.label : '');
  }, [setValue, signUp.career]);

  async function initSelect() {
    const response = await dispatch(initData());
    if (response.error) {
      return;
    }
    console.log(response.data);
  }
  useState(() => {
    initSelect();
  }, []);
  const submit = async data => {
    const result = await dispatch(registerSignUp(data));
    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
        Alert.alert(result.message),
      );
      return;
    }
    Alert.alert(result.message);
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        margin: 10,
        alignContent: 'center',
        maxHeight: 500,
      }}>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: '700',
            color: '#09bcc8',
          }}>
          Đăng ký
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            marginTop: 10,
          }}>
          Vui lòng nhập những thông tin sau
        </Text>
        <Text style={styles.text}>Họ tên</Text>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <TextInput
              ref={ref}
              autoFocus
              value={value}
              onChangeText={onChange}
              style={styles.textinput}
              placeholder="Họ và tên"
              error={!!fieldError}
              hint={fieldError?.message}
            />
          )}
          name="fullname"
        />
        {errors.fullname && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            * Thông tin bắt buộc
          </Text>
        )}
        <Text style={styles.text}>Số điện thoại</Text>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <TextInput
              ref={ref}
              autoFocus
              value={value}
              onChangeText={onChange}
              style={styles.textinput}
              placeholder="Số điện thoại"
              error={!!fieldError}
              hint={fieldError?.message}
            />
          )}
          name="mobile"
        />
        {errors.mobile && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            * Thông tin bắt buộc
          </Text>
        )}
        <Text style={styles.text}>Email</Text>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <TextInput
              ref={ref}
              autoFocus
              value={value}
              onChangeText={onChange}
              style={styles.textinput}
              placeholder="Email"
              error={!!fieldError}
              hint={fieldError?.message}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            * Thông tin bắt buộc
          </Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Mật khẩu</Text>
            <Controller
              control={control}
              render={({
                field: {onChange, value, ref},
                fieldState: {error: fieldError},
              }) => (
                <TextInput
                  ref={ref}
                  autoFocus
                  value={value}
                  onChangeText={onChange}
                  style={styles.textinput}
                  placeholder="Mật khẩu"
                  error={!!fieldError}
                  hint={fieldError?.message}
                />
              )}
              name="password"
            />
          </View>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Xác nhận</Text>
            <Controller
              control={control}
              render={({
                field: {onChange, value, ref},
                fieldState: {error: fieldError},
              }) => (
                <TextInput
                  ref={ref}
                  autoFocus
                  value={value}
                  onChangeText={onChange}
                  style={styles.textinput}
                  placeholder="Xác nhận"
                  error={!!fieldError}
                  hint={fieldError?.message}
                />
              )}
              name="confirmPassword"
            />
          </View>
        </View>
        {errors.password && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            * Hãy nhập mật khẩu
          </Text>
        )}
        {errors.confirmPassword && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            * Hãy nhập lại mật khẩu
          </Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Lĩnh Vực</Text>
            <Controller
              control={control}
              render={({
                field: {onChange, value, ref},
                fieldState: {error: fieldError},
              }) => (
                <DropDownPicker
                  stickyHeader={true}
                  autoScroll={true}
                  style={styles.textinput}
                  open={open}
                  value={value}
                  items={careers}
                  setOpen={setOpen}
                  setValue={onChange}
                  setItems={careers.label}
                  onChangeValue={onChange}
                  onPress={() => {
                    dispatch(setCareer(value));
                    console.log(value);
                  }}
                />
              )}
              name="idCareer"
            />
          </View>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Quốc Gia</Text>
            <Controller
              control={control}
              render={({
                field: {onChange, value, ref},
                fieldState: {error: fieldError},
              }) => (
                <DropDownPicker
                  stickyHeader={true}
                  autoScroll={true}
                  style={styles.textinput}
                  open={open1}
                  value={value}
                  items={countries}
                  setOpen={setOpen1}
                  setValue={onChange}
                  setItems={countries.label}
                  onChangeValue={onChange}
                  onPress={() => {
                    dispatch(setCountry(value));
                    console.log(value);
                  }}
                />
              )}
              name="idCountry"
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <CheckBox
          isChecked={isAcceptTerm}
          onClick={() => setIsAcceptTerm(true)}
        />
        <Text style={{alignSelf: 'center', marginLeft: 5, fontSize: 16}}>
          Chấp nhận với điều khoản của chúng tôi
        </Text>
      </View>

      <ButtonGradient
        text="ĐĂNG KÝ"
        // disabled={false}
        onPress={handleSubmit(submit)}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 200,
        }}>
        <Text>Copyright @ 2022 by Namviet Telecom</Text>
      </View>
    </SafeAreaView>
  );
}
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
    borderRadius: 5,
  },
});
export default SignUpScreen;
