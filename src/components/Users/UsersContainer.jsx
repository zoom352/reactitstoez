import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, SetUsers, SetCurrentPage, SetUsersTotalCount, ToggleIsFetching,  } from '../../Redux/users-reducer';
import Users from './Users';
import Load from '../../Common/Load/Load';
import { usersAPI} from '../../Api/Api';
// import load from './../../assets/images/load.svg';

class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        
        this.props.ToggleIsFetching(true)
        usersAPI.getUser(this.props.currentPage, this.props.PageSize)
        .then(data => {
            
            this.props.ToggleIsFetching(false)
            this.props.SetUsers(data.items);

            // its array our users
            this.props.SetUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pagenumber) => {
        this.props.SetCurrentPage(pagenumber)
        this.props.ToggleIsFetching(true)
        usersAPI.getUser(pagenumber, this.props.PageSize)
        .then(data => {
            this.props.ToggleIsFetching(false)
            this.props.SetUsers(data.items);
            
        });
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
       isFetching: state.UsersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//       follow: (UserId) => {
//           dispatch(FollowAC(UserId));
//       },
//       unfollow: (UserId) => {
//           dispatch(UnfollowAC(UserId));
//       },
//       SetUsers: (users) => {
//           dispatch(SetUsersAC(users));
//       },
//       SetCurrentPage: (pagenumber) => {
//           dispatch(SetCurrentPageAC(pagenumber));
//       },
//       SetTotalUsersCount: (totalCount) => {
//         dispatch(SetUsersTotalCountAC(totalCount));
//     },
//       ToggleIsFetching: (isFetching) => {
//         dispatch(ToggleIsFetchingAC(isFetching));
//     }
// }
// }



export default connect(mapStateToProps,  {
      follow,
      unfollow,
      SetUsers,
      SetCurrentPage,
      SetUsersTotalCount,
      ToggleIsFetching,
}
)(UsersAPIComponent);

