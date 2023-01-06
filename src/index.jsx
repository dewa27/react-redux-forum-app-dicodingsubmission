import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp, faThumbsDown, faComment, faMessage, faRankingStar, faUser,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './states';

library.add(faThumbsUp, faThumbsDown, faComment, faMessage, faRankingStar, faUser);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
