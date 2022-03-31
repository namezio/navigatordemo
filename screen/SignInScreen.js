import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import ButtonSignIn from '../component/ButtonSignIn';

function SignInScreen({navigation}) {
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
      <ButtonSignIn />
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
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'VIệt Nam', value: 'vn'},
    {label: 'Nước ngoài', value: 'other'},
  ]);

  return (
    <DropDownPicker
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
export default SignInScreen;
