import { configureStore } from '@reduxjs/toolkit';
import footerNotificationReducer from './reducer';

const store = configureStore({
  name: 'footer',
  devTools: true,
  reducer: {
    footerNotificationReducer,
  },
});

export default store;
