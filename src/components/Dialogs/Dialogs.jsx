import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/Load/textarea';
import { maxLengthCreatorMessage, required } from '../../utils/validate/validates';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    // take it in the props
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    // let NewMessageBody = state.NewMessageBody;

  


    let addNewMessage = (values) => {
        props.SendMessage(values.NewMessageBody)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                
                
            </div>
            
        <AddmessageformRedux onSubmit={addNewMessage}/>
                   
        </div>
    )
}

let maxLengthM = maxLengthCreatorMessage(20)

const Addformmessage = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'NewMessageBody'} placeholder={'password'}
            validate={[required, maxLengthM ]}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

const AddmessageformRedux = reduxForm({
    form: 'DialogAddformmessage'
})(Addformmessage)



export default Dialogs;