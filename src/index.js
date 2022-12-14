import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//store, bütün state'lerin tutulduğu yer
import {store} from './redux/store'
//Proviver ile kendisine gelen bütün dataları sarmaladığı bütün componentlere dağıtmaya yarar.
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  );


