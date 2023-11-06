import React, { FC } from "react"
import TelegramIcon from "@mui/icons-material/Telegram"
import Button from "@mui/material/Button"
import { UniversalTextField } from "common/components/TextField/UniversalTextField"
import { textFieldStyles } from "styles/textFieldStyles"
import { useChatInput } from "hooks/form/useChatInput"
import s from "../Footer.module.css"

type MessageInputBoxProps = {
  userId: string
}

export const MessageInputBox: FC<MessageInputBoxProps> = ({ userId }) => {
  const chatInput = useChatInput(userId)

  return (
    <>
      <UniversalTextField
        overrideStyles={textFieldStyles.input}
        placeholder="Введите сообщение..."
        value={chatInput.inputValue}
        onChange={chatInput.setInput}
        onKeyDown={chatInput.onKeyPressHandler}
        autoComplete="off"
      />
      <div className={s.send}>
        <Button>
          <TelegramIcon
            onClick={chatInput.addMessageHandler}
            style={{ color: chatInput.telegramClicked ? "green" : "inherit" }}
          />
        </Button>
      </div>
    </>
  )
}
