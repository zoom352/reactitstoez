export const userSelect = (state) => {
    return state.UsersPage.users
}

export const PageSizeSelect = (state) => {
    return state.UsersPage.PageSize
}

export const totalUsersCountSelect = (state) => {
    return state.UsersPage.totalUsersCount
}

export const currentPageSelect = (state) => {
    return state.UsersPage.currentPage
}

export const isFetchingSelect = (state) => {
    return state.UsersPage.isFetching
}

export const followinginprogressSelect = (state) => {
    return state.UsersPage.followinginprogress
}

export const isauthSelect = (state) => {
    return state.auth.isauth
}
