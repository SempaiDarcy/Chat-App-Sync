import { FC } from "react"
import { Avatar } from "@mui/material"
import { UserType } from "../../users-reducer"
import { ProfileWithActions } from "./ProfileWithActions/ProfileWithActions"
import s from "./Header.module.css"

type HeaderPropsType = {
  user: UserType
}

export const Header: FC<HeaderPropsType> = ({ user }) => {
  return (
    <div className={s.Header}>
      <div className={s.avaName}>
        <Avatar className={s.ava} src={user.avatar} alt={""} />
        <span className={s.name}>
          <b>{user.userName}</b>
        </span>
      </div>
      <ProfileWithActions user={user} />
    </div>
  )
}
