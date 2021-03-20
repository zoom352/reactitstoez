import React from 'react';
import s from './News.module.css';


const News = (props) => {
    return (
        <div className={s.item}>
            <h2>Last news</h2>
            <p>Barselona 1-4 PSG</p>
        </div>
    )
}

export default News;