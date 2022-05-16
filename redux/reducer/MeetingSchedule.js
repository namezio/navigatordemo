import {ScheduleAction} from '../action/MeetingSchedule';

const initialState = {
  meetings: [
    {
      id: 0,
      name: '',
      isOwner: true,
      isHost: true,
      isRecurring: true,
      isBlock: true,
      startDate: '',
      endDate: '',
    },
  ],
};
const meetingScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScheduleAction.SET_DATA_FULL:
      const data = action.payload;
      return {
        ...state,
        meetings: data,
      };
    default: {
      return state;
    }
  }
};
export default meetingScheduleReducer;
