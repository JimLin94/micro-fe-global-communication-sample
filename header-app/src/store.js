import { configureStore } from '@reduxjs/toolkit';
import headerNotificationReducer from './reducer';

export const store = configureStore({
  name: 'footer',
  devTools: true,
  reducer: {
    headerNotificationReducer,
  },
});

export default store;
