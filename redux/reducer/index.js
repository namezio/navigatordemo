import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './Auth';
import dialogReducer from './Dialog';
import freeJoinReducer from './FreeJoin';
import recoveryPasswordReducer from './RecoveryPassword';
import settingsReducer from './Setting';
import signUpReducer from './SignUp';
import meetingListReducer from './MeetingList';
import ChangePasswordByCodeReducer from './ChangePasswordByCode';
import AddScheduleReducer from './AddSchedule';
import EditScheduleReducer from './EditSchedule';
import GetScheduleReducer from './GetSchedule';
import InitAddScheduleReducer from './InitAddSchedule';
import meetingScheduleReducer from './MeetingSchedule';
import ContactReducer from './Contact';
import AddContactReducer from './AddContact';
import InfoContactReducer from './GetContact';
import startMeetingReducer from './MeetingStart';

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
  meetingList: meetingListReducer,
  meetingSchedule: meetingScheduleReducer,
  getSchedule: GetScheduleReducer,
  addSchedule: AddScheduleReducer,
  editSchedule: EditScheduleReducer,
  initAddSchedule: InitAddScheduleReducer,
  contact: ContactReducer,
  search: AddContactReducer,
  getContact: InfoContactReducer,
  startMeeting: startMeetingReducer,
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  freeJoin: persistReducer(freeJoinPersistConfig, freeJoinReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
