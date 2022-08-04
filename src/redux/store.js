import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import textAreaSlice  from './homework/textAreaSlice';
import listSlice from './todo/listSlice';
import charactersSlice from './breakingbadchars/characterSlice';
import quotesSlice from './breakingbadchars/quotesSlice';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todos : listSlice,
    texts : textAreaSlice,
    characters : charactersSlice,
    quotes : quotesSlice,
  },
});
