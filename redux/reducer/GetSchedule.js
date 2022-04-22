import {GetScheduleAction} from '../action/GetSchedule';

const initialState = {
  id: 0,
  name: '',
  rooms: [
    {
      isSelected: true,
      isMine: true,
    },
  ],
  startDate: '',
  startTime: {
    ticks: 0,
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalHours: 0,
    totalMilliseconds: 0,
    totalMinutes: 0,
    totalSeconds: 0,
  },
  endTime: {
    ticks: 0,
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalHours: 0,
    totalMilliseconds: 0,
    totalMinutes: 0,
    totalSeconds: 0,
  },
  endDate: '',
  isRecurring: true,
  days: [0],
  hosts: [
    {
      id: 0,
      name: '',
      isSelected: true,
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
  participants: [
    {
      id: 0,
      name: '',
      isSelected: true,
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
  isOnHostVideo: true,
  isOnParticipantsVideos: true,
  isOnDingDongSound: true,
  isUsePassCode: true,
  passCode: '',
  isBlocked: true,
  openMeetingMode: 0,
  canEdit: true,
  canDelete: true,
};
const GetScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetScheduleAction.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default GetScheduleReducer;
