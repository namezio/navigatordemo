import {AddScheduleAction} from '../action/AddSchedule';

const initialState = {
  name: '',
  idMeetingRoom: 0,
  startDate: '',
  startTime: '',
  endTime: '',
  endDate: '',
  isRecurring: true,
  days: [0],
  idHost: 0,
  isParticipants: [],
  isOnHostVideo: true,
  isOnParticipants: true,
  isOnDingDongSound: true,
  passCode: '',
  isBlocked: false,
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
