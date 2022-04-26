import {InitAddAction, setInitAddSchedule} from '../action/InitAddSchedule';

const initialState = {
  rooms: [
    {
      id: 0,
      name: '',
      isSelected: true,
      isMine: true,
    },
  ],
  hosts: [
    {
      id: 0,
      name: '',
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
};
const InitAddScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case InitAddAction.SET_DATA:
      const data = action.payload;
      return {
        ...state,
        rooms: data.rooms,
        hosts: data.hosts,
      };
    default: {
      return state;
    }
  }
};

export default InitAddScheduleReducer;
