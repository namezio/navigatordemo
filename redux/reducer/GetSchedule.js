import {GetScheduleAction} from '../action/GetSchedule';

const initialState = {
  id: 0,
  name: '',
  rooms: [
    {
      id: 0,
      name: '',
      isSelected: true,
      isMine: true,
    },
  ],
  startDate: '',
  startTime: {},
  endTime: {},
  endDate: '',
  isRecurring: true,
  days: [0],
  hosts: [
    {
      id: 0,
      name: '',
      isSelected: true,
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
  participants: [
    {
      id: 0,
      name: '',
      isSelected: true,
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
  isOnHostVideo: true,
  isOnParticipantsVideos: true,
  isOnDingDongSound: true,
  isUsePassCode: true,
  passCode: '',
  isBlocked: true,
  openMeetingMode: 0,
  canEdit: true,
  canDelete: true,
};
const GetScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetScheduleAction.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default GetScheduleReducer;
