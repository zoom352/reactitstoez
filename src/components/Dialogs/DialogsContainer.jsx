import React from 'react';
import { UpdateNewMessageBodyCreator, SendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';

// const DialogsContainer = (props) => {


    

//     return (
//         <StoreContext.Consumer>
//             { 
//             (store) => {
//                 let state = store.getState().dialogsPage;
                
//                 let onSendMessageClick = () => {
//                     store.dispatch(SendMessageCreator());
//                 }
            
//                 let OnNewMessageChange = (body) => {
                    
//                     store.dispatch(UpdateNewMessageBodyCreator(body))
            
//                 }
            
//         return <Dialogs UpdateNewMessageBody={OnNewMessageChange} SendMessage={onSendMessageClick} dialogsPage={state}/>
//             }
// }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch(SendMessageCreator());
        },
        UpdateNewMessageBody: (body) => {
            dispatch(UpdateNewMessageBodyCreator(body));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);




export default DialogsContainer;