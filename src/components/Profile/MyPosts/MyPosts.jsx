import React from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let NewPostText = props.NewPostText;


    let newPostElement = React.createRef();

    
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

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'NewPostText'} placeholder={'password'}/>
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