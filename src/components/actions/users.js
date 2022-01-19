import axios from "axios";
import { setUsers, setUser, setUserRepos } from "../../reducers/usersReducer";

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/users`)
        dispatch(setUsers(response.data))
    }
}

export const getUser = (userLogin) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/users/${userLogin}`)
        dispatch(setUser(response.data))
    }
}

export const getUserRepos = (userLogin) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/users/${userLogin}/repos`)
        dispatch(setUserRepos(response.data))
    }
}