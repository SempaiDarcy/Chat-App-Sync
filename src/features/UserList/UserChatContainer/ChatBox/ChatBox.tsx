import React, { FC, useEffect, useRef } from "react"
import { UserType } from "../../users-reducer"
import { Messages } from "./Messages/Messages"
import s from "./ChatBox.module.css"

type ChatBoxProps = {
  user: UserType
  users: UserType[]
  auth: number
}

export const ChatBox: FC<ChatBoxProps> = ({ user, users, auth }) => {
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  const backgroundImageStyle = {
    backgroundImage: `url(${user.wallImage})`,
    backgroundSize: "cover",
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [user.messages])

  return (
    <div className={s.mainContainer} ref={messagesContainerRef} style={backgroundImageStyle}>
      <Messages user={user} users={users} auth={auth} />
    </div>
  )
}
