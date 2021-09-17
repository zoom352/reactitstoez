import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileThunk, statusThunk, updatestatusThunk, savePhotoThunk, saveProfileThunk } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
// import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    ProfileRefresh () {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileThunk(userId);
        this.props.statusThunk(userId);
    }
    

    componentDidMount () {
        
        this.ProfileRefresh();
    }

    componentDidUpdate (prevProps, prevState) {
        
        if (this.props.match.params.userId != prevProps.match.params.userId)
        this.ProfileRefresh();
    }
    

    render() {
        return(
            <Profile 
                     {...this.props}
                     isOwner={!this.props.match.params.userId} 
                     profile={this.props.profile} 
                     status={this.props.status} 
                     updatestatusThunk={this.props.updatestatusThunk}
                     savePhotoThunk={this.props.savePhotoThunk}/>
                     
        )
    }
}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    // aboutMe: state.profilePage.aboutMe,
    authorizedUserId: state.auth.userId,
    isauth: state.auth.isauth
});



export default compose(
    connect(mapStateToProps, {profileThunk, statusThunk, updatestatusThunk, savePhotoThunk, saveProfileThunk}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);