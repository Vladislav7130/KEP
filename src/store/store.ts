import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import certificatesReducer from './reducers';

const store = configureStore({
  reducer: certificatesReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;