import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import GradientText from '../component/GradientText';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {initData} from '../redux/action/InitAddSchedule';
import {getInit} from '../redux/action/AddSchedule';

function AddCalendar() {
  const [date, setDate] = useState(new Date());
  const [timeEnd, setEnd] = useState(new Date());
  const [timeStart, setStart] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  async function getData() {
    const response = await dispatch(getInit());
    if (response.error) {
      return;
    }
    console.log(response.data);
  }
  useState(() => {
    getData();
  }, []);

  const hosts = useSelector(state => state.addSchedule.hosts).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const countries = useSelector(state => state.addSchedule.rooms).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const addSchedule = useSelector(state => state.addSchedule);

  console.log('aaaaa', addSchedule);
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#09bcc8',
          marginBottom: 10,
        }}>
        Tạo lịch họp
      </GradientText>
      <Text style={styles.text}>Tên lịch họp</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />
      <Text style={styles.text}>Thời gian họp</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => setOpenStart(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeStart).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={openStart}
          date={timeStart}
          onConfirm={timeStart => {
            setOpenStart(false);
            setStart(timeStart);
            console.log(dayjs(timeStart).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenStart(false);
          }}
        />
        <TouchableOpacity style={{flex: 1}} onPress={() => setOpenEnd(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeEnd).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={openEnd}
          date={timeEnd}
          onConfirm={timeEnd => {
            setOpenEnd(false);
            setEnd(timeEnd);
            console.log(dayjs(timeEnd).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenEnd(false);
          }}
        />
      </View>
      <Text style={styles.text}>Ngày họp</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={openDate}
          date={date}
          onConfirm={date => {
            setOpenDate(false);
            setDate(date);
            console.log(dayjs(date).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
      </View>
      <Text style={styles.text}>Phòng họp</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />
      <Text style={styles.text}>Chủ Tọa</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />
      <ButtonGradient text={'Tạo lịch'} onPress={() => navigation.goBack()} />
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
export default AddCalendar;
