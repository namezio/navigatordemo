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
  const isRecurring = info.isRecurring;
  const meetingId = info.meetingId;
  const isOnHostVideo = info.isOnHostVideo;
  const isOnParticipantVideos = info.isOnParticipantVideos;
  const isOnDingDongSound = info.isOnDingDongSound;
  const isUsePassCode = info.isUsePassCode;
  const passCode = info.passCode;
  const isBlocked = info.isBlocked;
  const openMeetingMode = info.openMeetingMode;
  const canEdit = info.canEdit;
  const canDelete = info.canDelete;
  const idGet = info.id;
  // console.log('hhhh', host1);
  const hosts = info.hosts
    .filter(x => x.isSelected === true)
    .map(a => ({
      id: a.id,
      name: a.name,
    }));
  const rooms = info.rooms
    .filter(x => x.isSelected === true)
    .map(a => ({
      id: a.id,
      name: a.name,
    }));
  const HostsID = hosts[0].id;
  const RoomsID = rooms[0].id;
  const participants = info.participants.map(a => ({
    id: a.id,
    name: a.name,
  }));
  const getInfomation = {
    HostsID,
    RoomsID,
    idGet,
    name,
    timeStart,
    timeEnd,
    dateStart,
    dateEnd,
    hosts,
    rooms,
    participants,
    isRecurring,
    meetingId,
    isOnHostVideo,
    isOnParticipantVideos,
    isOnDingDongSound,
    isUsePassCode,
    passCode,
    isBlocked,
    openMeetingMode,
    canEdit,
    canDelete,
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
