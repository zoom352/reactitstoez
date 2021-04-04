import React from 'react';
import { connect } from 'react-redux';
import { FollowAC, UnfollowAC, SetUsersAC, SetCurrentPageAC, SetUsersTotalCountAC } from '../../Redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
       users: state.UsersPage.users,
       PageSize: state.UsersPage.PageSize,
       totalUsersCount: state.UsersPage.totalUsersCount,
       currentPage: state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      follow: (UserId) => {
          dispatch(FollowAC(UserId));
      },
      unfollow: (UserId) => {
          dispatch(UnfollowAC(UserId));
      },
      SetUsers: (users) => {
          dispatch(SetUsersAC(users));
      },
      SetCurrentPage: (pagenumber) => {
          dispatch(SetCurrentPageAC(pagenumber));
      },
      SetTotalUsersCount: (totalCount) => {
        dispatch(SetUsersTotalCountAC(totalCount));
    }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

