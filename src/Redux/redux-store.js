import {combineReducers, createStore} from "redux";
import dialogsreducer from "./dialogs-reducer";
import profilereducer from "./profile-reducer";
import Usersreducer from "./users-reducer";

let reducers = combineReducers({
    
    profilePage: profilereducer,
    dialogsPage: dialogsreducer,
    UsersPage: Usersreducer
});

let store = createStore(reducers);

export default store;