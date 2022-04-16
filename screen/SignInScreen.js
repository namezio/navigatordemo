import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGradient from '../component/ButtonGradient';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as dialogAction from '../redux/action/Dialog';
import {initData, signUpActions} from '../redux/action/SignUp';
import {Picker} from '@react-native-picker/picker';

function SignUpScreen({navigation}) {
  const dispatch = useDispatch();
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);
  const signUp = useSelector(state => state.signUp);
  const defaultValues = {
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    country: '',
    idCountry: '',
    career: '',
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
    // confirmPassword: yup
    //   .string()
    //   .required('validate.required')
    //   .oneOf([yup.ref('password'), null], 'validate.confirm_password_wrong'),
    country: yup.string().required('validate.required'),
    career: yup.string().required('validate.required'),
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

  async function InitData() {
    dialogAction.showLoading();
    const response = await dispatch(initData());
    dialogAction.dismissLoading();
    if (!response.error) {
      return;
    }
    dispatch(
      dialogAction.showAlert(
        response.message || 'error.connect_server_failed',
        () => navigation.pop(),
      ),
    );
  }

  useEffect(() => {
    console.log('Country changed');
    setValue('idCountry', signUp.data.country ? signUp.data.country.value : '');
    setValue('country', signUp.data.country ? signUp.data.country.label : '');
  }, [setValue, signUp.data.country]);

  useEffect(() => {
    console.log('Career changed');
    setValue('idCareer', signUp.data.career ? signUp.data.career.value : '');
    setValue('career', signUp.data.career ? signUp.data.career.label : '');
  }, [setValue, signUp.data.career]);

  const submit = async data => {
    dispatch(dialogAction.showLoading());
    const result = await dispatch(submit(data));
    dispatch(dialogAction.dismissLoading());

    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
      );
      return;
    }

    dispatch(dialogAction.showAlert(result.message, () => navigation.pop()));
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
        <TextInput style={styles.textinput} placeholder="Họ và tên" />
        <Text style={styles.text}>Số điện thoại</Text>
        <TextInput style={styles.textinput} placeholder="Số điện thoại" />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textinput} placeholder="Email" />
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Mật khẩu</Text>
            <TextInput
              // secureTextEntry={true}
              style={styles.textinput}
              placeholder="Mật khẩu"
            />
          </View>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Xác nhận</Text>
            <TextInput
              // secureTextEntry={true}
              style={styles.textinput}
              placeholder="Xác nhận"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Lĩnh Vực</Text>
            <PickerJob />
          </View>
          <View style={{flexDirection: 'column', flex: 1, margin: 5}}>
            <Text style={styles.text}>Quốc Gia</Text>
            <PickerQG />
          </View>
        </View>
      </View>
      <ButtonGradient
        text="ĐĂNG KÝ"
        onPress={() => navigation.navigate('Login')}
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
function PickerJob() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Giáo Dục', value: 'education'},
    {label: 'Y tế- Sức khỏe', value: 'health'},
    {label: 'Bất động sản', value: 'bds'},
    {label: 'Tổ chức doanh nghiệp', value: 'bussines'},
    {label: 'Tư vấn đào tạo ', value: 'training'},
    {label: 'khác ', value: 'others'},
  ]);

  return (
    <DropDownPicker
      stickyHeader={true}
      autoScroll={true}
      style={styles.textinput}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
function PickerQG() {
  const [open, setOpen] = useState(false);
  const careers = useSelector(state => state.initSignUp.careers).map(x => ({
    value: x.id,
    label: x.name,
  }));
  // const [items, setItems] = useState([
  //   {label: careers.label, value: careers.value},
  // ]);
  // const [value, setValue] = useState(null);
  return (
    <DropDownPicker
      stickyHeader={true}
      autoScroll={true}
      style={styles.textinput}
      open={open}
      value={careers.value}
      items={careers}
      setOpen={setOpen}
      setValue={careers.value}
      setItems={careers.label}
    />
  );
}
const GradientText = props => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient
      colors={['#0390fc', '#03fc98']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text {...props} style={[props.style, {opacity: 0}]} />
    </LinearGradient>
  </MaskedView>
);
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
