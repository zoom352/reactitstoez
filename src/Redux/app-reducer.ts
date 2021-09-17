import { authThunk } from "./auth-reducer";

const INITIAL_UPDATE = 'INITIAL_UPDATE';


export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIAL_UPDATE:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};


type InitializedSuccesActionType = {
  type: typeof INITIAL_UPDATE;
};


export const InitialSucces = (): InitializedSuccesActionType => ({ type: INITIAL_UPDATE })


export const InitialThunk = () => (dispatch: any) => {
    let promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(InitialSucces())
        })
}


export default appReducer;