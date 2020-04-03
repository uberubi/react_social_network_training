import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user_img.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(page => {
          return (
            <span
              className={props.currentPage === page && styles.selectedPage}
              onClick={e => {
                props.onPageChanged(page);
              }}
            >
              {page + " "}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "31fca19b-46d4-4562-87ef-a79218334047"
                        }
                      }
                    )
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    });

                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                        {}, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "31fca19b-46d4-4562-87ef-a79218334047"
                          }
                        })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>
                {u.name}
                {u.status}
              </div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
