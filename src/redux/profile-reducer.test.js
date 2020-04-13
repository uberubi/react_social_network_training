import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "blabalbal", likesCount: 11 },
    { id: 4, message: "dadada", likesCount: 11 },
  ]
};

test('length of posts should be incremented', () => {
  // 1. initial data
  let action = addPostActionCreator("put your message")

  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectations
  expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].message).toBe("put your message");
});

test('message of new post should be correct', () => {
  // 1. initial data
  let action = addPostActionCreator("put your message")
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectations
  expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].message).toBe("put your message");
});

test('after delete length of messages shoud be decrement', () => {
  // 1. initial data
  let action = deletePost(1)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectations
  expect(newState.posts.length).toBe(3);
});

