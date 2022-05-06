import HTTPHelper from '../helpers/HTTPHelpers';
import dayjs from 'dayjs';
const MeetingService = {
  async MettingList() {
    const date = dayjs(new Date()).format('YYYY-MM-DD');
    const params = {
      start: '2022-05-01',
      end: '2022-05-31',
      date: date,
      analytic: true,
    };
    let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    return await HTTPHelper.get('/MeetingSchedule/List?' + query);
  },
  async MettingSchedule() {
    const params = {
      start: '2022-01-01',
      end: '2022-12-31',
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
