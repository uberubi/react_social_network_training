let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "blabalbal", likesCount: 11 },
        { id: 4, message: "dadada", likesCount: 11 }
      ],
      newPostText: "put message here"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Terent" },
        { id: 4, name: "Vovan" },
        { id: 5, name: "Nastyha" },
        { id: 6, name: "Petos" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Awright" },
        { id: 3, message: "Hiya" },
        { id: 4, message: "What's up!" },
        { id: 5, message: "Aye" },
        { id: 6, message: "HEY" }
      ]
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State has been changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель, observer // publisher-subscriber
  }
};

export default store;
window.state = store;
