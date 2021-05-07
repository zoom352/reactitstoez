import React from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatuswithHook from './ProfileStatuswithHook';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Load/>
    }
    
    return (
        
        <div>
            <div className={s.item}>
                <img
                    src='https://i.artfile.ru/2551x1383_1448110_[www.ArtFile.ru].jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                
                {props.profile.aboutMe}
                <ProfileStatuswithHook status={props.status} updatestatusThunk={props.updatestatusThunk}/>
            </div>
        </div>
    )
}

export default ProfileInfo;