import React from 'react';
import s from './Users.module.css';
import { NavLink, Redirect } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png';
import { usersAPI } from '../../Api/Api';


let User = ({user, followinginprogress, unfollow, follow}) => {

    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} 
                                     className={s.item} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followinginprogress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id) }}>unfollow</button>
                                    
                                : <button disabled={followinginprogress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id) }}>follow</button>}

                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                    </span>
                </div>
    
}


export default User;
