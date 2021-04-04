const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE= 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [ ],
    PageSize: 5,
    totalUsersCount: 20,
    currentPage: 4
};

const Usersreducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.Id === action.UserId){
                       return{...u, followed: true}
                    }
                    return u;
                })
            } 
        

        case UN_FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.Id === action.UserId){
                        return{...u, followed: false};
                    }
                    return u;
                })
            }
        

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        default:
            return state;
    }
}

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId })

export const UnfollowAC = (UserId) => {
    return { type: UN_FOLLOW, UserId }
}

export const SetUsersAC = (users) => {
    return {type: SET_USERS, users}
}

export const SetCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const SetUsersTotalCountAC = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
}

export default Usersreducer;