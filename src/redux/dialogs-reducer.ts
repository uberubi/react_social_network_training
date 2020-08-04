const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Terent" },
    { id: 4, name: "Vovan" },
    { id: 5, name: "Nastyha" },
    { id: 6, name: "Petos" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Awright" },
    { id: 3, message: "Hiya" },
    { id: 4, message: "What's up!" },
    { id: 5, message: "Aye" },
    { id: 6, message: "HEY" },
  ] as Array <MessageType>
};

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
