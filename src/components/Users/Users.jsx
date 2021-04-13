import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png';
import axios from 'axios';
import { usersAPI } from '../../Api/Api';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.PageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.span}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.item} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                   usersAPI.deleteUser(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        
                                        });
                                     }}>unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.postUser(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        
                                        });
                                    
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users;
