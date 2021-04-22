import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileThunk } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { usersAPI } from '../../Api/Api';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = 2;
        }
        this.props.profileThunk()
    }
    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
    isauth: state.auth.isauth
});



export default compose(
    connect(mapStateToProps, {profileThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);