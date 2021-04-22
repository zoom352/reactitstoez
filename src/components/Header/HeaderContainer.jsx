import React from 'react';
import { connect } from 'react-redux';
import { authThunk } from '../../Redux/auth-reducer';
import Header from './Header';
import s from './Header.module.css';
import * as axios from 'axios';
import { authAPI } from '../../Api/Api';

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.authThunk()
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
export default connect (mapStateToProps, {authThunk})(HeaderContainer);

// usersAPI.headerlogin()
// .then(data => {
//     if (data.resultCode === 0) {
//         let {id, login, email} = data.data;
//         this.props.SetAuthUserData(id, email, login);
//     }
// });