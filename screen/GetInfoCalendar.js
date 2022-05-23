import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetInfo} from '../redux/action/GetSchedule';

function GetInfoCalendar() {
  const dispatch = useDispatch();
  const info = useSelector(state => state.getSchedule.info);
  console.log(info);
  async function initSelect() {
    const response = await dispatch(GetInfo());
    if (response.error) {
      return;
    }
  }
  useEffect(() => {
    initSelect();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

export default GetInfoCalendar;
