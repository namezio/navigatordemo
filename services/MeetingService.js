import HTTPHelper from '../helpers/HTTPHelpers';
import dayjs from 'dayjs';
const MeetingService = {
  async MettingList() {
    const date = dayjs(new Date()).format('YYYY-MM-DD');
    const params = {
      start: '2022-05-01',
      end: '2022-12-31',
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
  async GetSchedule(id) {
    return await HTTPHelper.get('/MeetingSchedule/Get?id=' + id);
  },
  async MettingAdd() {
    return await HTTPHelper.get('/MeetingSchedule/Add');
  },
  async AddSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Add', data);
  },
  async EditSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Edit', data);
  },
  async DeleteSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Delete', data);
  },
  async StartMeeting() {
    return await HTTPHelper.get('/Meeting/Start');
  },
};
export default MeetingService;
