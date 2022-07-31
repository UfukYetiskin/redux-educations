import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import listReducer from './todo/listSlice';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todo : listReducer,
  },
});
