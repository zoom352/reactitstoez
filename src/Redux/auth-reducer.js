import { stopSubmit } from "redux-form";
import { authAPI } from "../Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isauth: false
};

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                
            }

        default:
            return state;
    }
}


export const SetAuthUserData = (id, login, email, isauth) => ({ type: SET_USER_DATA, payload: {id, login, email, isauth} })



export const authThunk = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(SetAuthUserData(id, email, login, true));
            }
        });
}


export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'error'
            dispatch(stopSubmit('login', {_error: message}))
            } 
        })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false))
            }
        })
}


export default authReduser;