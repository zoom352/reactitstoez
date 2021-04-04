import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => {
            this.props.SetUsers(response.data.items);
            // its array our users
            this.props.SetTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pagenumber) => {
        this.props.SetCurrentPage(pagenumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagenumber}&count=${this.props.PageSize}`).then(response => {
            this.props.SetUsers(response.data.items);
            // its array our users
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.PageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {pages.map( p => {
                    return <span className={this.props.currentPage === p && s.span} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}
                <div>
                    
                </div>
                {
                    this.props.users.map(u => <div key={u.Id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.item} />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.Id) }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.Id)
                                    }}>Follow</button>}
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
}

export default Users;