export const ScheduleAction = {
  SET_DATA_MEETING: 'SET_DATA_MEETING',
};
export const setDataMeeting = data => dispatch =>
  dispatch({
    type: ScheduleAction.SET_DATA_MEETING,
    payload: data,
  });
