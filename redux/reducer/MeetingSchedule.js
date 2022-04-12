import {ScheduleAction} from '../action/MeetingSchedule';
const initialState = {
  meeting: [
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
  analytics: [
    {
      date: '',
      total: '',
    },
  ],
};
const meetingScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScheduleAction.SET_DATA:
      return action.payload;
    default: {
      return state;
    }
  }
};
export default meetingScheduleReducer;
