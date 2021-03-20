import * as serviceWorker from './serviceWorker';
import Store from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
                 dispatch={Store.dispatch.bind(Store)} Store={Store}/>
                 
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(Store.getElement());
// we imported state and uesed it here
Store.subscribe (rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
