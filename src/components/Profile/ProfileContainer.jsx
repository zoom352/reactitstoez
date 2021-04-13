import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { SetUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
        .then(response => {
            this.props.SetUserProfile(response.data);
            
        });
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
    
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {SetUserProfile }) (WithUrlDataContainerComponent);