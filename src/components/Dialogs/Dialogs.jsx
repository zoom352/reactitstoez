import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { UpdateNewMessageBodyCreator, SendMessageCreator } from '../../Redux/state';

const Dialogs = (props) => {

    let state = props.Store.getElement().dialogsPage;

    // take it in the props
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let NewMessageBody = state.NewMessageBody;

    // let newmessage = React.createRef();
    // React create me link

    let onSendMessageClick = () => {
        props.Store.dispatch(SendMessageCreator());
    }

    let OnNewMessageChange = (e) => {
        let body = e.target.value;
        props.Store.dispatch(UpdateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={OnNewMessageChange} value={NewMessageBody} />
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;