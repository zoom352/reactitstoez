import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

//     let newmessage = React.createRef();
//     // React create me link

//    let addmessage = () => {
//        let text = newmessage.current.value;
//        props.addmessage(text);
//    }
    

    return <div className={s.dialog}>{props.message}
                 
            </div>
}

export default Message;