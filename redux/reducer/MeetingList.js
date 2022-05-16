import {ListAction} from '../action/MeetingList';
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
const meetingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ListAction.SET_DATA:
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
export default meetingListReducer;
