import MeetingService from '../../services/MeetingService';
import dayjs from 'dayjs';
import {uniq, reduce} from 'lodash/';

export const ScheduleAction = {
  SET_DATA_FULL: 'SET_DATA_FULL',
};
export const setDataFull = () => async dispatch => {
  const response = await MeetingService.MettingSchedule();
  if (!response) {
    return {
      error: true,
      message: null,
    };
  }

  if (response.error) {
    return {
      error: true,
      message: response.message,
    };
  }

  const meetings = {};
  const schedules = response.data.meetings.map(x => ({
    date: dayjs(x.startDate).format('YYYY-MM-DD'),
    title: x.name,
    time: dayjs(x.startDate).format('HH:mm'),
  }));
  let dates = schedules.map(({date}) => date);
  dates = uniq(dates);
  dates.filter(date => {
    const items = schedules.filter(schedule => schedule.date === date);
    // let z = {[date]: items};
    meetings[date] = items;
  });

  dispatch({
    type: ScheduleAction.SET_DATA_FULL,
    payload: meetings,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
