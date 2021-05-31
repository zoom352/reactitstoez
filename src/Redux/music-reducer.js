import React from 'react';

const MUSIC_ADD = 'MUSIC_ADD'


let initialState = {
    musicAdd: [
        { id: 1, music: 'i need to add a music', likes: 30 },
        { id: 2, music: 'i wanna add a music', likes: 30 },
        { id: 3, music: 'ive already added a music', likes: 30 },
        { id: 4, music: 'i need to add a music', likes: 30 },
    ],
    NewPostMusic: 'we are done'
}

const musicreducer = (state = initialState, action) => {
    
    switch (action.type) {
        case MUSIC_ADD:
            let newMusic = {
                id: 5,
                music: action.NewPostMusic,
                likes: 777
            };
            return {
                ...state,
                musicAdd: [...state.musicAdd, newMusic],
                NewPostMusic: 'we are done'
            };


        default:
            return state;
    }
}

export const addMusicAC = (NewPostMusic) => {
    return {
        type: MUSIC_ADD, NewPostMusic
    }
}



export default musicreducer;