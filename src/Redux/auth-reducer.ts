import { stopSubmit } from "redux-form";
import { authAPI, CaptchaAPI } from "../Api/Api";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

export type InitialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isauth: boolean,
    captchaURL: string | null
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isauth: false,
    captchaURL: null
};

const authReduser = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number;
    login: string;
    email: string;
    isauth: boolean;
};

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA, 
        payload:
            SetAuthUserDataActionPayloadType
}


export const SetAuthUserData = (userId: number, login: string, email: string, isauth: boolean): SetAuthUserDataActionType => (
    { type: SET_USER_DATA, 
        payload:
            { userId, login, email, isauth }
    })
 

type CaptchaACActionType = {
    type: typeof GET_CAPTCHA_SUCCESS
    payload:
        { captchaURL: string}
}


export const CaptchaAC = (captchaURL: string):CaptchaACActionType => (
    {type: GET_CAPTCHA_SUCCESS, 
        payload: {captchaURL}}
)    



export const authThunk = () => (dispatch: any) => {
    return authAPI.me()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(SetAuthUserData(id, email, login, true));
            }
        });
}




export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } 
            else if (response.data.resultCode === 10) {
                dispatch(captchaThunk())
            }
            else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'error'
            dispatch(stopSubmit('login', {_error: message}))
            } 
        
}

export const logoutThunk = () => async (dispatch: any) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false))
            }
        
}

export const captchaThunk = () => async (dispatch: any) => {
    const response = await CaptchaAPI.getCaptchaUrl()
    const captchaURL = response.data.url
            dispatch(CaptchaAC(captchaURL))
            }


export default authReduser;