import {AddScheduleAction} from '../action/AddSchedule';

const initialState = {
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
};
const AddScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddScheduleAction.GET_DATA:
      const data = action.payload;
      return {
        ...state,
        rooms: data.rooms,
        hosts: data.hosts,
      };
    case AddScheduleAction.SET_ROOM:
      return {
        ...state,
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
