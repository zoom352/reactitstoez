import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsreducer from "./dialogs-reducer";
import profilereducer from "./profile-reducer";
import Usersreducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    
    profilePage: profilereducer,
    dialogsPage: dialogsreducer,
    UsersPage: Usersreducer,
    auth: authReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;