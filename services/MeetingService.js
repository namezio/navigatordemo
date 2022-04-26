import HTTPHelper from '../helpers/HTTPHelpers';

const MeetingService = {
  async MettingList() {
    return await HTTPHelper.get(
      '/MeetingSchedule/List?start=2022-04-01&end=2022-04-25',
    );
  },
  async AddSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Add', data);
  },
  async MeetingSchedule() {
    return await HTTPHelper.get('/MeetingSchedule/List');
  },
  async InitAddSchedule() {
    return await HTTPHelper.get('/MeetingSchedule/Add');
  },
  async GetSchedule(id) {
    return await HTTPHelper.get('MeetingSchedule/Get', id);
  },
  async EditSchedule(id) {
    return await HTTPHelper.post('/MeetingSchedule/Edit', id);
  },
  async DeleteSchedule(id) {
    return await HTTPHelper.post('/MeetingSchedule/Delete', id);
  },
};
export default MeetingService;
