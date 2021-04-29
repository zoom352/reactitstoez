
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
    
};

const dialogsreducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        
            

        case SEND_MESSAGE_BODY:
            let body = action.NewMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 6, message: body}]
            };
            
            default:
                return state;   
    }
}

export const SendMessageCreator = (NewMessageBody) => {
    return {
        type: SEND_MESSAGE_BODY, NewMessageBody
    }
}



export default dialogsreducer;