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
import {setData} from '../redux/action/MeetingList';
import dayjs from 'dayjs';
import CommonHelper from '../helpers/CommonHelper';
function CalendarScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Agenda
        items={
          ({
            '2022-05-06': [
              {
                time: '10:05',
                title: 'aaa',
                hostname: 'Nam Ezio',
              },
            ],
          },
          {
            '2022-05-06': [
              {
                time: '10:00',
                title: 'aaa',
                hostname: 'Nam Ezio',
              },
            ],
          })
        }
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
