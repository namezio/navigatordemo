import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './Auth';
import dialogReducer from './Dialog';
import freeJoinReducer from './FreeJoin';
import recoveryPasswordReducer from './RecoveryPassword';
import settingsReducer from './Setting';
import signUpReducer from './SignUp';
import meetingScheduleReducer from './MeetingSchedule';
import ChangePasswordByCodeReducer from './ChangePasswordByCode';
import AddScheduleReducer from './AddSchedule';
import EditScheduleReducer from './EditSchedule';
import GetScheduleReducer from './GetSchedule';
import InitAddScheduleReducer from './InitAddSchedule';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const freeJoinPersistConfig = {
  key: 'freeJoin',
  storage: AsyncStorage,
  blacklist: ['loading', 'error', 'message'],
};

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  dialog: dialogReducer,
  recoveryPassword: recoveryPasswordReducer,
  signUp: signUpReducer,
  changePasswordByCode: ChangePasswordByCodeReducer,
  meetingSchedule: meetingScheduleReducer,
  getSchedule: GetScheduleReducer,
  addSchedule: AddScheduleReducer,
  editSchedule: EditScheduleReducer,
  initAddSchedule: InitAddScheduleReducer,
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  freeJoin: persistReducer(freeJoinPersistConfig, freeJoinReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
