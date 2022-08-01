import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import textAreaSlice  from './homework/textAreaSlice';
import listSlice from './todo/listSlice';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todos : listSlice,
    texts : textAreaSlice,
  },
});
