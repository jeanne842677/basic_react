import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import GuguDan from './guguDan';
import reportWebVitals from './reportWebVitals';
//import NumberBaseBall from "./NumberBaseBall";
//import Todo from './Todo';
import ResponseCheck from './ResponseCheck';
//import WordRelay from './WordRelay';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<App />*/}
      {/*<GuguDan />*/}
      {/*<Todo />*/}
      {/*<WordRelay />*/}
      {/*<NumberBaseBall />*/}
      <ResponseCheck />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
