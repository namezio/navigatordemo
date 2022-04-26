import {AddScheduleAction} from '../action/AddSchedule';

const initialState = {
<<<<<<< HEAD
  name: '',
  idMeetingRoom: 0,
  startDate: '',
  startTime: '',
  endTime: '',
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
=======
  rooms: [
    {
      isMine: true,
      id: 0,
      name: '',
      isSelected: true,
    },
  ],
  hosts: [
    {
      avatarUrl: '',
      shortName: '',
      meetingId: '',
      id: 0,
      name: '',
      isSelected: true,
    },
  ],
>>>>>>> 4f3c8713da75895b3ec09b560f97c9e30faf785f
};
const AddScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddScheduleAction.GET_DATA:
<<<<<<< HEAD
      return action.payload;
    case AddScheduleAction.SET_ROOM:
      return {
        ...state,
=======
      const data = action.payload;
      return {
        ...state,
        rooms: data.rooms,
        hosts: data.hosts,
      };
    case AddScheduleAction.SET_ROOM:
      return {
        ...state,
>>>>>>> 4f3c8713da75895b3ec09b560f97c9e30faf785f
        data: {
          ...state.data,
          room: action.payload,
        },
      };

    case AddScheduleAction.SET_HOST:
      return {
        ...state,
        data: {
          ...state.data,
          host: action.payload,
        },
      };
    default:
      return state;
  }
};

export default AddScheduleReducer;
