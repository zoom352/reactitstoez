import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from './MyPosts/MyPostContainer';


const Profile = (props) => {


    return (
        <div>
            
            <ProfileInfo profile={props.profile} status={props.status} updatestatusThunk={props.updatestatusThunk}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;