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
    data.appType = 'application';
    return await HTTPHelper.post('/Auth/SignIn', data);
  },
  async recoveryPassword(data) {
    return await HTTPHelper.post('/Auth/RecoveryPassword', data);
  },
};

export default AuthenticateService;
