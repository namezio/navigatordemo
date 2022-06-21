import {startMeetingActions} from '../action/MeetingStart';

const initialState = {
  idMeetingType: 0,
  meetingId: '',
  token: '',
  userId: '',
  password: '',
  displayName: '',
  zak: '',
  apiKey: '',
  signature: '',
  meetingToken: '',
};
const startMeetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case startMeetingActions.START:
      const data = action.payload;
      return {
        data,
      };
    default:
      return state;
  }
};
export default startMeetingReducer;
