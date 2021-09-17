import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, SetCurrentPage, toggleFollowingProgress, getUsers } from '../../Redux/users-reducer';
import Users from './Users';
import Load from '../../Common/Load/Load';
import { usersAPI} from '../../Api/Api';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
import { currentPageSelect, followinginprogressSelect, isauthSelect, isFetchingSelect, PageSizeSelect, totalUsersCountSelect, userSelect } from '../../Redux/user-select';
// import load from './../../assets/images/load.svg';



class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        const {currentPage, PageSize} = this.props;
        this.props.getUsers (currentPage, PageSize);
        
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
        const {PageSize} = this.props;
        this.props.getUsers(pagenumber, PageSize);

     
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
       users: userSelect(state),
       PageSize: PageSizeSelect(state),
       totalUsersCount: totalUsersCountSelect(state),
       currentPage: currentPageSelect(state),
       isFetching: isFetchingSelect(state),
       followinginprogress: followinginprogressSelect(state),
       isauth: isauthSelect(state)
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


