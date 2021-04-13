const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE= 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [ ],
    PageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    id: null,
    name: null
};

const Usersreducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.UserId){
                       return{...u, followed: true}
                    }
                    return u;
                })
            } 
        

        case UN_FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId){
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}

export const follow = (UserId) => ({ type: FOLLOW, UserId })

export const unfollow = (UserId) => {
    return { type: UN_FOLLOW, UserId }
}

export const SetUsers = (users) => {
    return {type: SET_USERS, users}
}

export const SetCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const SetUsersTotalCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
}

export const ToggleIsFetching  = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}


export default Usersreducer;