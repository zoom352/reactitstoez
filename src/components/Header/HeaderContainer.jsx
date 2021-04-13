import React from 'react';
import { connect } from 'react-redux';
import { SetAuthUserData } from '../../Redux/auth-reducer';
import Header from './Header';
import s from './Header.module.css';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.SetAuthUserData(id, email, login);
            }
        });
    }
    render() {
        return(
        <Header {...this.props}/>
        )
    }
} 

let mapStateToProps = (state) => ({
    isauth: state.auth.isauth,
    login: state.auth.login
})
export default connect (mapStateToProps, {SetAuthUserData})(HeaderContainer);