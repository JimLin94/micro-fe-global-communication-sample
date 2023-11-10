import { configureStore } from '@reduxjs/toolkit';
import homeNotificationReducer from './reducer';

const store = configureStore({
  name: 'home',
  devTools: true,
  reducer: {
    homeNotificationReducer,
  },
});

export default store;
