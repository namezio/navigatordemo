export const AuthAction = {
  SIGN_IN: 'SIGN_IN',
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: AuthAction.SET_DATA,
    payload: data,
  });
export const SignIn = fullname => async dispatch => {
  try {
    await console.log('Loading data');
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    await console.log('Loading Success !');
    dispatch({
      type: AuthAction.SIGN_IN,
      fullname: fullname,
    });
  } catch (error) {}
};
