import React from 'react';
import s from './Music.module.css';


const Music = (props) => {
    return (
        <div className={s.item}>
            <h2 className={s.qoq}>it's songs list</h2>
            <p>you and me we used to be together</p>
            <p>wonderful life</p>
        </div>
    )
}

export default Music;