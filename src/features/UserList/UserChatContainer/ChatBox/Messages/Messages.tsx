import React, { FC } from "react"

import { UserType } from "../../../users-reducer"

import { Message } from "./Message/Message"

import s from "./Messages.module.css"

type MessagesPropsType = {
  user: UserType
  users: UserType[]
  auth: number
}

export const Messages: FC<MessagesPropsType> = ({ user, users, auth }) => {
  let messagesMap = user.messages.map((el) => {
    const userLocal = users.filter((elU) => elU.userId === el.idUser)[0]
    const myMessage = user.userId === el.idUser

    return (
      <Message
        key={el.id}
        idMessage={el.id}
        myMessage={myMessage}
        user={userLocal}
        messageText={el.message}
        auth={auth}
      />
    )
  })

  return <div className={s.messageScreen}>{messagesMap}</div>
}
