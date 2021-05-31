import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profile-reducer';
// import StoreContext from '../../../Redux/Store.Context';
import MyPosts from './MyPosts';




let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.NewPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (NewPostText) => {
            dispatch(addPostActionCreator(NewPostText));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;