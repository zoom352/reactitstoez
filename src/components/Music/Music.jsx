import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/Load/textarea';
import { maxLengthCreator, required } from '../../utils/validate/validates';
import s from './Music.module.css';
import MusicPost from './MusicPost/MusicPost';

const Music = (props) => {

    let postsMusic =
        props.musicAdd.map(m => <MusicPost music={m.music} likes={m.likes}/>)
    
    
debugger;
    let addNewMusic = (values) => {
        props.sendMusic(values.NewPostMusic)
    }

    return (
        <div className={s.item}>
            {postsMusic}
           
            <AddMusicFormRedux onSubmit={addNewMusic}/>
        </div>
    )
}

let maxLengthContainer = maxLengthCreator(20)

const AddMusicForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'NewPostMusic'}
                   placeholder={'password'}
                   validate={[required, maxLengthContainer]}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

const AddMusicFormRedux = reduxForm({
    form: 'lddl'
})(AddMusicForm)

export default Music;