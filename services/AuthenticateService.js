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
  async GetSchedule() {
    return await HTTPHelper.get('MeetingSchedule/Get');
  },
};

export default AuthenticateService;
