import {setInitAddSchedule} from '../action/InitAddSchedule';

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
    case setInitAddSchedule.SET_DATA:
      return action.payload;
    default: {
      return state;
    }
  }
};

export default InitAddScheduleReducer;
