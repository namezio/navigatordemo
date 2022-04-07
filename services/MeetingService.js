import HTTPHelper from '../helpers/HTTPHelpers';

const MeetingService = {
  async MettingList() {
    return await HTTPHelper.get('/MeetingSchedule/List');
  },
  async MettingAdd() {
    return await HTTPHelper.get('/MeetingSchedule/Add');
  },
  async MeetPostAdd(data) {
    return await HTTPHelper.post('/MeetingSchedule/List');
  },
};
