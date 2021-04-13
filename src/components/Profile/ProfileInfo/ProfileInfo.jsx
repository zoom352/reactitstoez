import React from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';

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
                 ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;