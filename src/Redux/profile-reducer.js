import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../Api/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'i humiliated you', likesCount: 12 },
        { id: 2, message: 'itll be my season', likesCount: 11 },
        { id: 3, message: 'dont feel at all', likesCount: 11 },
        { id: 4, message: 'i need to think it over', likesCount: 11 },

    ],

    NewPostText: 'ive already done',
    profile: null,
    status: '',
   
    // name: "viaceslavziablov"
};

const profilereducer = (state = initialState, action) => {

    // let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.NewPostText,
                likesCount: 1
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                NewPostText: 'ive already done'
            };

        }
       

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        };

        

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId) };
            
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}} 

        default:
            return state;
    }
}

export const addPostActionCreator = (NewPostText) => ({ type: ADD_POST, NewPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})



export const SetUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const SetStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const savePhotoAC = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}


export const profileThunk = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(SetUserProfile(response.data));
        
    });
}

export const statusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(SetStatus(response.data));
    })
}

export const updatestatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(SetStatus(status));
        }
    })

}


export const savePhotoThunk = (file) => (dispatch) => {
    profileAPI.savePhot(file)
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos));
        }
    })

}

export const saveProfileThunk = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
        dispatch(profileThunk(userId));
        } else {
            // dispatch(stopSubmit("MyAddPostForm", {'contacts': { 'facebook': response.data.messages[0] }}));
            dispatch(stopSubmit("MyAddPostForm", { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
}

export default profilereducer;