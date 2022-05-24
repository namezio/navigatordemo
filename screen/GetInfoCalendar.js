import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetInfo} from '../redux/action/GetSchedule';
import GradientText from '../component/GradientText';
import dayjs from 'dayjs';
import ButtonGradient from '../component/ButtonGradient';

function GetInfoCalendar() {
  const dispatch = useDispatch();
  const customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  async function initSelect() {
    const response = await dispatch(GetInfo());
    if (response.error) {
      return;
    }
  }
  useEffect(() => {
    initSelect();
  }, []);
  const info = useSelector(state => state.getSchedule.info);
  // console.log(info);
  const hosts = useSelector(state => state.getSchedule.info.hosts).map(x => ({
    name: x.name,
  }));
  const ts = dayjs(info.startTime.toString(), 'hh:mm:ss');
  const te = dayjs(info.endTime.toString(), 'hh:mm:ss');
  const timeStart = dayjs(ts).format('HH:mm');
  const timeEnd = dayjs(te).format('HH:mm');
  const dateStart = dayjs(info.startDate).format('DD/MM/YYYY');
  const dateEnd = dayjs(info.endDate).format('DD/MM/YYYY');
  // console.log(hosts[0].name);

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
        <Text style={styles.text}>{info.name}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/time.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>
          {timeStart} - {timeEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/calendar.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>
          {dateStart} - {dateEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/user.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>{hosts[0].name}</Text>
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
  text: {fontSize: 18},
});
export default GetInfoCalendar;
