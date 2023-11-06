import { FC } from "react"
import { UserType } from "../../../../users-reducer"
import { MessageWithActions } from "./MessageWithActions/MessageWithActions"
import { UserAvatar } from "./UserAvatar/UserAvatar"
import s from "./Message.module.css"

type MessagePropsType = {
  user: UserType
  messageText: any
  myMessage: boolean
  idMessage: string
  auth: number
}

export const Message: FC<MessagePropsType> = (props) => {
  const { myMessage, user, messageText, idMessage, auth } = props

  return (
    <div className={myMessage ? `${s.block} ${s.myMessage}` : s.block}>
      <UserAvatar user={user} />
      <MessageWithActions
        userId={user.userId}
        auth={auth}
        idMessage={idMessage}
        messageText={messageText}
        isAuthor={myMessage}
      />
    </div>
  )
}
