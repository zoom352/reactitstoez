import * as serviceWorker from './serviceWorker';
// import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import TestApp from './App';




// let rerenderEntireTree = (state) => {
ReactDOM.render(<TestApp />,  document.getElementById('root'));


// let rerenderEntireTree = (state) => {

// rerenderEntireTree(store.getState());
// // we imported state and uesed it here
// store.subscribe (() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
