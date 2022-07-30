import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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


reportWebVitals();
