import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';
import GradientText from '../component/GradientText';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
function FreeJoinScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#09bcc8',
        }}>
        Tham gia tự do
      </GradientText>
      <Text style={{fontSize: 18, marginBottom: 10}}>
        Hãy nhập Trans ID để tham gia họp
      </Text>
      <Text>Tên Hiển Thị</Text>
      <TextInput style={styles.textInput} placeholder={'Ten hien thi'} />
      <Text>TranS ID</Text>
      <TextInput style={styles.textInput} placeholder={'TranS ID'} />
      <Text>Phòng họp</Text>
      <TextInput style={styles.textInput} placeholder={'Select option'} />
      <ButtonGradient text={'Tham gia'} />
      <TouchableOpacity
        style={{alignItems: 'center', margin: 10}}
        onPress={() => navigation.goBack()}>
        <GradientText style={{fontSize: 18}}>
          Quay về trang đăng nhập
        </GradientText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default FreeJoinScreen;
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
  textInput: {
    borderRadius: 3,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 10,
    maxWidth: 360,
    padding: 10,
  },
});
