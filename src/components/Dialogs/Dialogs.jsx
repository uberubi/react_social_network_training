import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = props => {

  let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)
  let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let newMessage = React.createRef();
  let sendMessage = () => {
    let text = newMessage.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <textarea ref={newMessage}> </textarea>
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
};

export default Dialogs;
