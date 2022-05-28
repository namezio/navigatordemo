import * as React from 'react';
import {
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

function GetScheduleScreen() {
  const info = useSelector(state => state.getSchedule.info);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(info);
  const host = useSelector(state => state.getSchedule);
  console.log('mmm', host);

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
          {info.timeStart} - {info.timeEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/calendar.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>
          {info.dateStart} - {info.dateEnd}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../icons/user.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
        <Text style={styles.text}>{info.hostname}</Text>
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
export default GetScheduleScreen;
