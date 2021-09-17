import { usersAPI } from '../Api/Api';


const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    PageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    // id: null,
    // name: null,
    followinginprogress: []
};

const Usersreducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }


        case SET_USERS: {//////
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followinginprogress: action.isFetching
                    ? [...state.followinginprogress, action.UserId]
                    : state.followinginprogress.filter(id => id != action.UserId)
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (UserId) => ({ type: FOLLOW, UserId })

export const unfollowSuccess = (UserId) => {
    return { type: UN_FOLLOW, UserId }
}

export const SetUsers = (users) => {
    return { type: SET_USERS, users }
}

export const SetCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const SetUsersTotalCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}

export const ToggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const toggleFollowingProgress = (isFetching, UserId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, UserId }
}

export const getUsers = (currentPage, PageSize) => {

    return (dispatch) => {
        ToggleIsFetching(true)
        usersAPI.getUser(currentPage, PageSize)
            .then(data => {

                dispatch(ToggleIsFetching(false));
                dispatch(SetUsers(data.items));

                // its array our users
                dispatch(SetUsersTotalCount(data.totalCount));
            });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(responce => {
                if (responce.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(responce => {
                if (responce.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export default Usersreducer;