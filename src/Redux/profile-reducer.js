const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'i humiliated you', likesCount: 12 },
        { id: 2, message: 'itll be my season', likesCount: 11 },
        { id: 3, message: 'dont feel at all', likesCount: 11 },
        { id: 4, message: 'i need to think it over', likesCount: 11 },
        
    ],
    NewPostText: 'ive already done'
};

const profilereducer = (state = initialState, action) => {

    // let stateCopy;
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                NewPostText: ''
            };
            
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                NewPostText: action.newText
            };
            default:
                return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const UpdateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profilereducer;