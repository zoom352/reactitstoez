import { authThunk } from "./auth-reducer";

const INITIAL_UPDATE = 'INITIAL_UPDATE';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIAL_UPDATE:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const InitialSucces = () => ({ type: INITIAL_UPDATE })



export const InitialThunk = () => (dispatch) => {
    let promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(InitialSucces())
        })
}


export default appReducer;