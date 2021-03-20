import React from 'react';
import s from './../Dialogs.module.css';

import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.item}>
        <img src='https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dbe32cd7cccba00afd5b6c0_5dbe333ed7859b00b18fd124/scale_1200'/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;