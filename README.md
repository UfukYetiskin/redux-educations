# redux-educations

## How install redux toolkit

```
npm add @reduxjs/toolkit react-redux
```

komutu ile redux toolkit' i projemize ekledik. @redux/toolkit ile redux' ı kullanabiliriz. react-redux ile de store' u kullanabiliriz.

### How Create Redux Store file

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

### How Create Provider Redux in Main Index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//store, bütün state'lerin tutulduğu yer
import {store} from './redux/store'
//Proviver ile kendisine gelen bütün dataları sarmaladığı bütün componentlere dağıtmaya yarar.
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```