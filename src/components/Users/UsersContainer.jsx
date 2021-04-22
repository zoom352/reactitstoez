import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, SetCurrentPage, toggleFollowingProgress, getUsers } from '../../Redux/users-reducer';
import Users from './Users';
import Load from '../../Common/Load/Load';
import { usersAPI} from '../../Api/Api';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
// import load from './../../assets/images/load.svg';

class UsersAPIComponent extends React.Component {
    
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.PageSize);
        
        // this.props.ToggleIsFetching(true)
        // usersAPI.getUser(this.props.currentPage, this.props.PageSize)
        // .then(data => {
            
        //     this.props.ToggleIsFetching(false)
        //     this.props.SetUsers(data.items);

        //     // its array our users
        //     this.props.SetUsersTotalCount(data.totalCount);
        // });
    }

    onPageChanged = (pagenumber) => {
        this.props.getUsers(pagenumber, this.props.PageSize);

     
    }

    render() {
        return <> 
        {this.props.isFetching ? <Load/> : null}
        <Users 
        totalUsersCount = {this.props.totalUsersCount}
        PageSize = {this.props.PageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.props.onPageChanged}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        users = {this.props.users}
        onPageChanged = {this.onPageChanged}
        followinginprogress = {this.props.followinginprogress}
        />
        </>
    }
        

}



let mapStateToProps = (state) => {
    return {
       users: state.UsersPage.users,
       PageSize: state.UsersPage.PageSize,
       totalUsersCount: state.UsersPage.totalUsersCount,
       currentPage: state.UsersPage.currentPage,
       isFetching: state.UsersPage.isFetching,
       followinginprogress: state.UsersPage.followinginprogress,
       isauth: state.auth.isauth
    }
}




export default compose(
    connect(mapStateToProps,  {
        follow,
        unfollow,
        SetCurrentPage,
        toggleFollowingProgress,
        getUsers
  }
  ),
    withAuthRedirect
)(UsersAPIComponent);


