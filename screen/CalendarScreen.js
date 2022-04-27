import React, {useEffect, useState} from 'react';
import {Agenda} from 'react-native-calendars';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setData} from '../redux/action/MeetingSchedule';
import dayjs from 'dayjs';
function CalendarScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function initSelect() {
    const response = await dispatch(setData());
    if (response.error) {
      return;
    }
    console.log(response.data);
  }
  useState(() => {
    initSelect();
  }, []);
  // const meeting = useSelector(state => state.meetingSchedule.meetings).map(
  //   x => ({
  //     date: dayjs(x.startDate).format('YYYY-MM-DD'),
  //     title: x.name,
  //     time: dayjs(x.startDate).format('HH:mm'),
  //   }),
  // );
  //
  // console.log('meeting', meeting);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Agenda
        items={{
          '2012-05-22': [{name: 'item 1 - any js object'}],
          '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
          '2012-05-24': [],
          '2012-05-25': [
            {name: 'item 3 - any js object'},
            {name: 'any js object'},
          ],
        }}
        renderItem={item => {
          return (
            <View style={styles.CardEvent}>
              <View style={{margin: 10, flex: 2}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{marginBottom: 10, fontSize: 18, color: 'red'}}>
                    Thời gian : <Text>{item.time}</Text>
                  </Text>
                  <Text
                    style={{fontSize: 16, marginBottom: 5, fontWeight: '600'}}>
                    Tên cuộc họp : <Text>{item.title}</Text>
                  </Text>
                  <Text>
                    Chủ Tọa: <Text>{item.hostname}</Text>
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: 'https://source.unsplash.com/1024x768/?girl'}}
                  style={{
                    borderRadius: 50,
                    width: 75,
                    height: 75,
                    margin: 10,
                  }}
                />
              </View>
            </View>
          );
        }}
        scrollEnabled={true}
        theme={{
          calendarBackground: 'pink',
          todayTextColor: '#00adf5',
        }}
      />
      <View style={{marginLeft: 15, marginRigh: 20}}>
        <ButtonGradient
          text={'Thêm lịch'}
          onPress={() => navigation.navigate('AddCalendar')}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  CardEvent: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 20,
  },
});
export default CalendarScreen;
