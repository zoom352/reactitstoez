import React from 'react';
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'e64f9eaa-cb82-4eaf-aa6f-7386e26928d8'
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
    },
    savePhot (photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile (profile) {
        return instance.put(`profile`, profile)
    },

}

export const authAPI  = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false, captcha=false) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    } 
    
}

export const CaptchaAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}
    





    











