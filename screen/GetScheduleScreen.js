import * as React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {GetSchedule} from '../redux/action/GetSchedule';
import CommonHelper from '../helpers/CommonHelper';
import GradientText from '../component/GradientText';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import * as dialogAction from '../redux/action/Dialog';
import DeleteSchedule from '../redux/reducer/DeleteSchedule';
import {Delete} from '../redux/action/DeleteSchedule';

function GetScheduleScreen() {
  const info = useSelector(state => state.getSchedule.info);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  const name = info.name;
  const ts = dayjs(info.startTime.toString(), 'hh:mm:ss');
  const te = dayjs(info.endTime.toString(), 'hh:mm:ss');
  const timeStart = dayjs(ts).format('HH:mm');
  const timeEnd = dayjs(te).format('HH:mm');
  const dateStart = dayjs(info.startDate).format('DD/MM/YYYY');
  const dateEnd = dayjs(info.endDate).format('DD/MM/YYYY');
  const id = info.id;
  const deleteID = {id};
  const hosts = info.hosts
    .filter(x => x.isSelected === true)
    .map(a => ({
      name: a.name,
    }));
  const hostname = hosts[0].name;
  const items = {
    id,
    name,
    timeStart,
    timeEnd,
    dateStart,
    dateEnd,
    hostname,
  };
  console.log(items);
  console.log(deleteID);
  const DeleteScheduleByID = async id => {
    dispatch(dialogAction.showLoading());
    const response = await dispatch(Delete(id));
    dispatch(dialogAction.dismissLoading());
    if (response.error) {
      Alert.alert(response.message);
    }
    navigation.navigate('CalendarScreen');
  };
  const confirmAlert = id => {
    //function to make two option alert
    Alert.alert(
      //title
      'Xóa Lịch',
      //body
      'Bạn có chắc muốn xóa lịch họp này ?',
      [
        {
          text: 'Có',
          onPress: () => DeleteScheduleByID(id),
        },
        {
          text: 'Không',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 10,
      }}>
      <GradientText style={{fontSize: 30, fontWeight: '700'}}>
        Thông tin lịch họp
      </GradientText>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/font.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>{items.name}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/time.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>
          {items.timeStart} - {items.timeEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/calendar.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>
          {items.dateStart} - {items.dateEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/user.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>{items.hostname}</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginBottom: 10,
            paddingBottom: 10,
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'yellow',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => confirmAlert(deleteID)}
          style={{
            marginTop: 10,
            marginBottom: 10,
            paddingBottom: 10,
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {fontSize: 20, alignSelf: 'center'},
});
export default GetScheduleScreen;
