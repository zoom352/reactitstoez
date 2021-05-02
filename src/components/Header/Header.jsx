import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />


        <div className={s.item}>
            {props.isauth 
            ? <div>{props.login}-<button onClick={props.logoutThunk}>Log out</button></div>
            :<NavLink to='/login'>
                Login
            </NavLink>}
        </div>

    </header>
}

export default Header;