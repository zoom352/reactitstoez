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
                ...action.data,
                isauth: true
            }

        default:
            return state;
    }
}


export const SetAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} })



export const authThunk = (userId) => (dispatch) => {
    authAPI.me(userId)
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(SetAuthUserData(id, email, login));
            }
        });
}


export default authReduser;