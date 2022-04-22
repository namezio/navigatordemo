import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import HomeService from '../services/HomeService';
import * as settingsAction from '../redux/action/Setting';
import {authActions} from '../redux/action/Auth';
import CommonHelper from '../helpers/CommonHelper';
import {dialogActions} from '../redux/action/Dialog';

function SplashScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [message, setMessage] = useState('Initializing the application...');
  const {settings, auth} = useSelector(state => state);

  const apiServerComparer = (a, b) => {
    if (a.default > b.default) {
      return 1;
    }

    if (a.default < b.default) {
      return -1;
    }

    return 0;
  };

  async function checkAliveApiServer() {
    let isValid = false;
    const apiServers = settings.apiServers.sort(apiServerComparer);
    for (let i = 0; i < apiServers.length; i++) {
      const apiServer = apiServers[i];
      const response = await HomeService.initApplication(apiServer.url);
      if (!response || response.error) {
        continue;
      }

      dispatch(
        settingsAction.setApiServers(
          apiServers
            .map(s => {
              return {
                default: s.url == apiServer.url,
                url: s.url,
              };
            })
            .sort(apiServerComparer),
        ),
      );

      isValid = true;
      break;
    }

    return isValid;
  }

  async function checkLogin() {
    // If storage has not data => gotoMainScreen;
    if (
      !auth ||
      !auth.username ||
      auth.username.length === 0 ||
      !auth.password ||
      auth.password.length === 0
    ) {
      gotoMainScreen();
      return;
    }

    setMessage('Checking signed account...');
    const result = await dispatch(
      authActions.LOGIN({
        username: auth.username,
        password: auth.password,
      }),
    );

    if (result.error) {
      gotoMainScreen();
      return;
    }

    gotoHomeScreen();
  }

  function gotoMainScreen() {
    // If the first go to app
    if (settings.isShowWelcomeScreen) {
      dispatch(settingsAction.setWelcomeScreen(false));
      navigation.navigate('Login');
      return;
    }

    navigation.navigate('Login');
  }

  const gotoHomeScreen = function (data) {
    navigation.navigate('Home');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await CommonHelper.delay();

    // Check alive API
    if (!(await checkAliveApiServer())) {
      dispatch(
        dialogActions.showAlert(
          'Connect to server failed. Please re-open this application.',
          () => {},
        ),
      );
      return;
    }

    // Check login state
    await checkLogin();
  }, [checkAliveApiServer, checkLogin, dispatch]);
  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  );
}

export default SplashScreen;
