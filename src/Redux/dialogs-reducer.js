const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE_BODY = 'SEND-MESSAGE-BODY';

let initialState = {
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
};

const dialogsreducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                NewMessageBody: action.body
            };
            

        case SEND_MESSAGE_BODY:
            let body = state.NewMessageBody;
            return {
                ...state,
                NewMessageBody: '',
                messages:[...state.messages, {id: 6, message: body}]
            };
            
            default:
                return state;   
    }
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



export default dialogsreducer;