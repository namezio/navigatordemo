import React, {useState} from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {setData} from '../redux/action/MeetingSchedule';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';

function HomeSchedule() {
  const dispatch = useDispatch();
  const meeting = useSelector(state => state.meetingSchedule.meetings).map(
    x => ({
      title: x.name,
      timeS: dayjs(x.startDate).format('HH:mm'),
      timeE: dayjs(x.endDate).format('HH:mm'),
    }),
  );
  console.log('meeting', meeting);
  async function initSelect() {
    const response = await dispatch(setData());
    if (response.error) {
      return;
    }
  }
  useState(() => {
    initSelect();
  }, []);
  return (
    <ScrollView style={styles.body}>
      {meeting.map(object => {
        return (
          <View style={styles.item}>
            <Image
              source={require('../icons/vn.png')}
              style={{
                borderRadius: 50,
                width: 50,
                height: 50,
                margin: 10,
              }}
            />
            <View>
              <Text style={styles.text}>{object.title}</Text>
              <Text style={styles.time}>
                {object.timeS} - {object.timeE}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 10,

    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    maxWidth: 250,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  time: {
    margin: 5,
    fontSize: 15,
    color: 'red',
  },
});
export default HomeSchedule;
