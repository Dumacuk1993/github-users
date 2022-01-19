const SET_USERS = 'SET_USERS'
const SET_USER = 'SET_USER'
const SET_USER_REPOS ='SET_USER_REPOS'

const defaultState = {
    users: [],
    user: [],
    repos: [],
    isFetching: null
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case SET_USER:
            return {
                ...state,
                isFetching: true,
                user: action.payload 
            }
        case SET_USER_REPOS:
            return {
                ...state,
                repos: action.payload,
                isFetching: false
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USERS, payload: users })
export const setUser = (user) => ({ type: SET_USER, payload: user })
export const setUserRepos = (repos) => ({type: SET_USER_REPOS, payload: repos})