import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseApp from 'firebase/app';

function initializeFirebase(){ 
  const firebaseConfig = {
    apiKey: "AIzaSyDlzz0scQxdtCRmw8ojdYHgGBfNJl-VRzk",
    authDomain: "dilip-f5fda.firebaseapp.com",
    projectId: "dilip-f5fda",
    storageBucket: "dilip-f5fda.appspot.com",
    messagingSenderId: "545143488520",
    appId: "1:545143488520:web:97391584162bca134d11bd",
    measurementId: "G-X1724QNSZQ"
  };

  firebaseApp.initializeApp(firebaseConfig);
}
initializeFirebase()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
