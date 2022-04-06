import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['dialog', 'recoveryPassword', 'signUp'],
  whitelist: ['settings', 'auth', 'freeJoin'],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};
