import { FC } from "react"
import { MessageInputBox } from "./MessageInputBox/MessageInputBox"
import s from "./Footer.module.css"

type FooterPropsType = {
  userID: string
}

export const Footer: FC<FooterPropsType> = (props) => {
  const { userID } = props
  return (
    <div className={s.footer}>
      <MessageInputBox userId={userID} />
    </div>
  )
}
