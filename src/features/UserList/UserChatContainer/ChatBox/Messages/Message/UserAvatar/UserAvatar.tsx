import React, { FC } from "react"
import { UserType } from "../../../../../users-reducer"
import s from "./UserAvatar.module.css"

type UserAvatarProps = {
  user: UserType
}

export const UserAvatar: FC<UserAvatarProps> = (props) => {
  const { user } = props
  return (
    <div className={s.ava}>
      <img className={s.avatar} src={user.avatar} alt={""}></img>
    </div>
  )
}
