import profilereducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from 'react';

// 1 test data

let state = {
  posts: [
      { id: 1, message: 'i humiliated you', likesCount: 12 },
      { id: 2, message: 'itll be my season', likesCount: 11 },
      { id: 3, message: 'dont feel at all', likesCount: 11 },
      { id: 4, message: 'i need to think it over', likesCount: 11 },

  ]
};

it('length should be correct', () => {
    let action = addPostActionCreator('ive already done')

   
    // 2 action
    let newstate = profilereducer(state, action)

    // 3 expectation
    expect(newstate.posts.length).toBe(5);
  });



it('message of new post should be correct', () => {
    let action = addPostActionCreator('ive already done')

   
    // 2 action
    let newstate = profilereducer(state, action)

    // 3 expectation
    expect(newstate.posts[4].message).toBe('ive already done');
  });



it('delete new post', () => {
    let action = deletePost(1)

    // 2 action
    let newstate = profilereducer(state, action)

    // 3 expectation
    expect(newstate.posts.length).toBe(3);
  });



it('message of new post should be correct', () => {
    let action = deletePost(1000)

    // 2 action
    let newstate = profilereducer(state, action)

    // 3 expectation
    expect(newstate.posts.length).toBe(4);
  });


