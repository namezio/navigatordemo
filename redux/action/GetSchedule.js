import MeetingService from '../../services/MeetingService';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const GetScheduleAction = {
  GET_DATA: 'GET_DATA',
};
export const GetSchedule = id => async dispatch => {
  const response = await MeetingService.GetSchedule(id);
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
  const info = response.data;
  const hosts = info.hosts.map(x => ({
    name: x.name,
  }));
  // console.log(info);
  const customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  const name = info.name;
  const ts = dayjs(info.startTime.toString(), 'hh:mm:ss');
  const te = dayjs(info.endTime.toString(), 'hh:mm:ss');
  const timeStart = dayjs(ts).format('HH:mm');
  const timeEnd = dayjs(te).format('HH:mm');
  const dateStart = dayjs(info.startDate).format('DD/MM/YYYY');
  const dateEnd = dayjs(info.endDate).format('DD/MM/YYYY');
  const hostname = hosts[0].name;

  const getInfomation = {
    name,
    timeStart,
    timeEnd,
    dateStart,
    dateEnd,
    hostname,
  };
  dispatch({
    type: GetScheduleAction.GET_DATA,
    payload: getInfomation,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
