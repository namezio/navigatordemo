import HTTPHelper from '../helpers/HTTPHelper';

const AuthenticateService = {
  async initSignUp() {
    return await HTTPHelper.get('/RestApi/Authenticate/InitSignUp');
  },
  async signUp(data) {
    return await HTTPHelper.post('/RestApi/Authenticate/SignUp', {
      ...data,
      country: data.idCountry,
    });
  },
  async signIn(data) {
    data.appType = 'application';
    return await HTTPHelper.post('/RestApi/Authenticate/SignIn', data);
  },
  async recoveryPassword(data) {
    return await HTTPHelper.post(
      '/RestApi/Authenticate/RecoveryPassword',
      data,
    );
  },
};

export default AuthenticateService;
