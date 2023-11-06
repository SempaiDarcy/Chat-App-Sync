import React, { FC } from "react"

import { UserType } from "../users-reducer"

import { Header } from "./Header/Header"
import { ChatBox } from "./ChatBox/ChatBox"
import { Footer } from "./Footer/Footer"

import s from "./UserChatContainer.module.css"

type ComponentsProps = {
  user: UserType
  users: UserType[]
  auth: number
}

export const UserChatContainer: FC<ComponentsProps> = (props) => {
  const { user, users, auth } = props

  return (
    <div className={s.components}>
      <Header user={user} />
      <ChatBox user={user} users={users} auth={auth} />
      <Footer userID={user.userId} />
    </div>
  )
}
