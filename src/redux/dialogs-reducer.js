const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return { 
        ...state,
        messages: [ ...state.messages, { id: 6, message: body }]  
      }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
