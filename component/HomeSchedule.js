import React, {useCallback, useState} from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {setData} from '../redux/action/MeetingList';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import {useFocusEffect} from '@react-navigation/native';

function HomeSchedule() {
  const dispatch = useDispatch();
  const meeting = useSelector(state => state.meetingList.meetings).map(x => ({
    title: x.name,
    timeS: dayjs(x.startDate).format('HH:mm'),
    timeE: dayjs(x.endDate).format('HH:mm'),
  }));
  async function initSelect() {
    const response = await dispatch(setData());
    if (response.error) {
      return;
    }
  }
  useFocusEffect(
    useCallback(() => {
      initSelect();
    }, []),
  );
  return (
    <ScrollView style={styles.body}>
      {meeting.map(x => {
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
              <Text style={styles.text}>{x.title}</Text>
              <Text style={styles.time}>
                {x.timeS} - {x.timeE}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#29ffb4',
                    margin: 5,
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Text>Bắt đầu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#29ffb4',
                    margin: 5,
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Text>Điểm danh</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#29ffb4',
                    margin: 5,
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Text>Tài liệu</Text>
                </TouchableOpacity>
              </View>
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
    margin: 5,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    maxWidth: 250,
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 3,
  },
  time: {
    margin: 3,
    fontSize: 15,
    color: 'blue',
  },
});
export default HomeSchedule;
