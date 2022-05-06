import HTTPHelper from '../helpers/HTTPHelpers';
const MeetingService = {
  async MettingList() {
    const params = {
      start: '2022-05-01',
      end: '2022-05-31',
      date: '2022-05-06',
      analytic: true,
    };
    let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    return await HTTPHelper.get('/MeetingSchedule/List?' + query);
  },
  async MettingAdd() {
    return await HTTPHelper.get('/MeetingSchedule/Add');
  },
  async MeetPostAdd(data) {
    return await HTTPHelper.post('/MeetingSchedule/List');
  },
};
export default MeetingService;
