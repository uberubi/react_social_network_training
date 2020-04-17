import React from "react";
import Textarea, { createField, Input } from "../../common/FormsControls/FormControls";
import { reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css"
import styles2 from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <button>save</button>
      </div>
      {error && <div className={styles2.formSummaryError}>
        {error}
      </div>}
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My Professional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>About me</b>
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
      <b>Contacts</b>:
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
    </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataReduxForm;