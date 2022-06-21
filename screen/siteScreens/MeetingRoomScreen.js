import {View, Text, SafeAreaView} from 'react-native';
import React, {useCallback} from 'react';
import {getContact} from '../../redux/action/Contact';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {start} from '../../redux/action/MeetingStart';
function MeetingRoomScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function initSelect() {
    const response = await dispatch(start());
    if (response.error) {
      return;
    }
  }
  useFocusEffect(
    useCallback(() => {
      initSelect();
    }, []),
  );
  const starts = useSelector(state => state.startMeeting.data);
  console.log(starts);
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(starts)}</Text>
    </SafeAreaView>
  );
}

export default MeetingRoomScreen;
