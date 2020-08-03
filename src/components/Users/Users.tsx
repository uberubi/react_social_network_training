import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UsersType } from "../../types/types";

type Props = {
  currentPage: number
  onPageChanged: (page: number) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UsersType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const Users: FC<Props> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
