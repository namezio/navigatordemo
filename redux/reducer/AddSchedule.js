import {AddScheduleAction} from '../action/AddSchedule';

const initialState = {
  name: '',
  idMeetingRoom: 0,
  startDate: '',
  startTime: {
    ticks: 0,
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
  },
  endTime: {
    ticks: 0,
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
  },
  endDate: '',
  isRecurring: true,
  days: [0],
  idHost: 0,
  isParticipants: [''],
  isOnHostVideo: true,
  isOnParticipants: true,
  isOnDingDongSound: true,
  passCode: '',
  isBlocked: '',
};
const AddScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddScheduleAction.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default AddScheduleReducer;
