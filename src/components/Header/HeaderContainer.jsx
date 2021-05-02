import React from 'react';
import { connect } from 'react-redux';
import { authThunk, logoutThunk } from '../../Redux/auth-reducer';
import Header from './Header';


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

const mapStateToProps = (state) => ({
    isauth: state.auth.isauth,
    login: state.auth.login
})
export default connect (mapStateToProps, {authThunk, logoutThunk})(HeaderContainer);

