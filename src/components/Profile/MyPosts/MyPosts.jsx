import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    
        let NewPostText = props.NewPostText;
    

    let newPostElement = React.createRef();

    let onaddPost = () => {
        props.addPost();
    }
 
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.UpdateNewPosttext(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={NewPostText}/>
                </div>
                <div>
                    <button onClick={ onaddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}


export default MyPosts;