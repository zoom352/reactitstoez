import React from 'react';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '31d77dae-07ed-48cf-9c9f-357e768f3298'
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
        .then(response => {
            return response.data;
        })
    }
    
}
    





    











