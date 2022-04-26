import {InitAddAction} from '../action/InitAddSchedule';

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
