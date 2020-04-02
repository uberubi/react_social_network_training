import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/2748282/30e1090a-71ce-487d-ba64-d3f8dc56dcde/s1200"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img  className={s.userAvatar} src={props.profile.photos.large} alt="profile"/>
        ava + description
        </div>
    </div>
  );
};

export default ProfileInfo;