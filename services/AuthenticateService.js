import HTTPHelper from '../helpers/HTTPHelpers';

const AuthenticateService = {
  async initSignUp() {
    return await HTTPHelper.get('/Auth/InitSignUp');
  },
  async signUp(data) {
    return await HTTPHelper.post('/Auth/SignUp', {
      ...data,
      country: data.idCountry,
    });
  },
  async signIn(data) {
    // data.appType = 'application/json';
    data.idDevice = 'string';
    data.save = true;
    data.timeZoneOffset = 0;
    return await HTTPHelper.post('/Auth/SignIn', data);
  },
  async recoveryPassword(data) {
    return await HTTPHelper.post('/Auth/RecoveryPassword', data);
  },
  async ChangePasswordByCode(data) {
    return await HTTPHelper.post('/Auth/ChangePasswordByCode', data);
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
  async GetSchedule() {
    return await HTTPHelper.get('MeetingSchedule/Get');
  },
  async EditSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Edit', data);
  },
  async DeleteSchedule(data) {
    return await HTTPHelper.post('/MeetingSchedule/Delete', data);
  },
};

export default AuthenticateService;
