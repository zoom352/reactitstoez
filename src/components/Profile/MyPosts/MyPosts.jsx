import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../../../Common/Load/textarea';
import { maxLengthCreator, required } from '../../../utils/validate/validates';

import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} 
            likesCount={p.likesCount} />);


    
    let addNewPost = (values) => {
        props.addPost(values.NewPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            <AddPostFormRedux onSubmit={addNewPost}/>
        </div>
    )
}

let maxLengthContainer= maxLengthCreator(10)

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'NewPostText'} 
            placeholder={'password'} 
            validate={[required, maxLengthContainer ]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm({
    form: 'MyAddPostForm'
})(AddPostForm)
export default MyPosts;