import React, {useState} from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';
import ProfileStatuswithHook from './ProfileStatuswithHook';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataform from './ProfileInfoForm';

const ProfileInfo = ({ profile, status, updatestatusThunk, isOwner, savePhotoThunk, saveProfileThunk }) => {

    const [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Load />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoThunk(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfileThunk(formData)
        .then(
            () => {
                setEditMode(false)
            })
    }


    return (

        <div>
            
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

                {editMode ? 
                <ProfileDataform initialValues={profile} profile={profile} onSubmit={onSubmit}/> : 
                      <ProfileData profile={profile} isOwner={isOwner} ProfileChange={() => setEditMode(true)}/>}


                <ProfileStatuswithHook status={status} updatestatusThunk={updatestatusThunk} />
            </div>
        </div>
    )
}


const ProfileData = ({ profile, ProfileChange, isOwner }) => {

    return <div>
         {isOwner && <div><button onClick={ProfileChange}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <ProfileContact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}




const ProfileContact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b> : {contactValue}
    </div>

}



export default ProfileInfo;