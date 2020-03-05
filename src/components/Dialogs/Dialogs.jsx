import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = props => {

  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Terent" },
    { id: 4, name: "Vovan" },
    { id: 5, name: "Nastyha" },
    { id: 6, name: "Petos" }
  ];

  
  
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Awright" },
    { id: 3, message: "Hiya" },
    { id: 4, message: "What's up!" },
    { id: 5, message: "Aye" },
    { id: 6, message: "HEY" }
  ];

  let messagesElements = messagesData.map(m => <Message message={m.message} id={m.id} />)
  let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
