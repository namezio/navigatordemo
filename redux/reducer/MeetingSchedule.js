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
      const data = action.payload;
      return {
        ...state,
        meetings: data.meetings,
        analytics: data.analytics,
      };
    default: {
      return state;
    }
  }
};
export default meetingScheduleReducer;
