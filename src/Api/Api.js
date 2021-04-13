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
    deleteUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    postUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }

}





// export const getHeader = () => {
//     return instance.get(`auth/me`)
//         .then(response => {
//             return response.data;
//         })

// }