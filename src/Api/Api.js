import React from 'react';
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '108eb552-96a1-4288-a89e-baf34d664520'
    }
})

export const usersAPI = {
    getUser(currentPage = 1, PageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${PageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        console.warn(';;;')
        return profileAPI.getProfile (userId);
    }

}

export const profileAPI = {
   
    getProfile (userId) {
        return instance.get(`profile/` + userId );
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status})
    }

}

export const authAPI  = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    } 
    
}
    





    











