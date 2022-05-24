import React, {useCallback, useEffect, useState} from 'react';
import {Agenda} from 'react-native-calendars';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import {setDataFull} from '../redux/action/MeetingSchedule';
import _ from 'lodash';

function CalendarScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function initSelect() {
    const response = await dispatch(setDataFull());
    if (response.error) {
      return;
    }
    // console.log(response.data);
  }

  useEffect(() => {
    initSelect();
  }, []);
  const meetings = useSelector(state => state.meetingSchedule.meetings);
  // console.log(meetings);
  // let id = meetings.id;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Agenda
        items={meetings}
        renderItem={item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('GetInfo')}>
              <View style={styles.CardEvent}>
                <View style={{margin: 10, flex: 2}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{marginBottom: 10, fontSize: 18, color: 'red'}}>
                      Thời gian : <Text>{item.time}</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                        fontWeight: '600',
                      }}>
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
            </TouchableOpacity>
          );
        }}
        scrollEnabled={true}
        theme={{
          calendarBackground: 'blue',
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
