import React from 'react';
import { UpdateNewMessageBodyCreator, SendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';

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

// let authContainer = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
      
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

// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authContainer);

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

