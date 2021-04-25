import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileThunk, statusThunk, updatestatusThunk } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = 16217;
        }
        this.props.profileThunk(userId);
        this.props.statusThunk(userId);
    }
    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updatestatusThunk={this.props.updatestatusThunk}/>
        )
    }
}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    aboutMe: state.profilePage.aboutMe,
    isauth: state.auth.isauth
});



export default compose(
    connect(mapStateToProps, {profileThunk, statusThunk, updatestatusThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);