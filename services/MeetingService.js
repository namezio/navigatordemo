import HTTPHelper from '../helpers/HTTPHelpers';

const MeetingService = {
  async MettingList() {
    return await HTTPHelper.get(
      '/MeetingSchedule/List?start=2022-04-01&end=2022-04-25',
    );
  },
  async MettingAdd() {
    return await HTTPHelper.get('/MeetingSchedule/Add');
  },
  async MeetPostAdd(data) {
    return await HTTPHelper.post('/MeetingSchedule/List');
  },
};
export default MeetingService;
