import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
// import StoreContext from '../../../Redux/Store.Context';
import MyPosts from './MyPosts';





// const MyPostsContainer = (props) => {

//     // let state = props.store.getState();

    

//     return (
//     <StoreContext.Consumer>
//         { 
//         (store) => {

//             let state = store.getState();

//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
         
//             let onPostChange = (text) => {
//                 let action = UpdateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//             }

//         return <MyPosts UpdateNewPosttext={onPostChange} addPost={addPost} posts={state.profilePage.posts} 
//         NewPostText={state.profilePage.NewPostText}/>
//     }
// }
//     </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.NewPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateNewPosttext: (text) => {
            let action = UpdateNewPostTextActionCreator(text);
                dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;