import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import dialogsreducer from "./dialogs-reducer";
import profilereducer from "./profile-reducer";
import Usersreducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import musicreducer from "./music-reducer";



let reducers = combineReducers({
    
    profilePage: profilereducer,
    dialogsPage: dialogsreducer,
    UsersPage: Usersreducer,
    auth: authReduser,
    form: formReducer,
    Initial: appReducer,
    musicInitial: musicreducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;