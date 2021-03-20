const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE_BODY = 'SEND-MESSAGE-BODY';

let Store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'i humiliated you', likesCount: 12 },
                { id: 2, message: 'itll be my season', likesCount: 11 },
                { id: 3, message: 'dont feel at all', likesCount: 11 },
                { id: 4, message: 'i need to think it over', likesCount: 11 },
                
            ],
            NewPostText: 'ive already done'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'PSG' },
                { id: 2, name: 'Barcelona' },
                { id: 3, name: 'Real' },
                { id: 4, name: 'Juventus' },
                { id: 5, name: 'Porto' },
                { id: 6, name: 'Liverpool' }
            ],
            messages: [
                { id: 1, message: 'ill tear you' },
                { id: 2, message: 'youve just been humiliated' },
                { id: 3, message: 'youll regret about it i swear' },
                { id: 4, message: 'i need to prepear to the next game' },
                { id: 5, message: 'ill fuck you moron' }
            ],
            NewMessageBody: 'im here'
        },
        Sidebarpage: {
            UnderSidebars: [
                { id: 1, name: 'PSG' }
            ],
        }
    },
    getElement() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state');
    },
    addmessage(Mymessage) {
        let newMessage = {
            id: 6,
            message: Mymessage
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    UpdateNewDialog(NewLetter) {
        this._state.dialogsPage.NewDialog = NewLetter;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.NewPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.NewPostText = action.NewText;
            this._callSubscriber(this._state);
            
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.NewMessageBody = action.body;
            this._callSubscriber(this._state);
            
        } else if (action.type === SEND_MESSAGE_BODY){
            let body = this._state.dialogsPage.NewMessageBody;
            this._state.dialogsPage.NewMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }

    }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const UpdateNewPostTextActionCreator = (text) => {
    return {type:UPDATE_NEW_POST_TEXT, NewText: text}
}

export const SendMessageCreator = () => {
    return {
        type: SEND_MESSAGE_BODY
    }
}

export const UpdateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default Store;
window.Store = Store;