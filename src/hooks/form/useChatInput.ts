import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMessageAC } from "features/UserList/users-reducer"
import { v1 } from "uuid"

type UseMessageComposerReturn = {
  inputValue: string
  setInput: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
  telegramClicked: boolean
  addMessageHandler: () => void
}

export const useChatInput = (userID: string): UseMessageComposerReturn => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>("")
  const [telegramClicked, setTelegramClicked] = useState<boolean>(false)

  const setInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const addMessageHandler = () => {
    setTelegramClicked(!telegramClicked)
    if (inputValue.trim() !== "") {
      const newMessage = { id: v1(), idUser: userID, message: inputValue, messageType: "text" as const }
      dispatch(addMessageAC(newMessage))
      setInputValue("")
    }
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addMessageHandler()
  }

  useEffect(() => {
    if (telegramClicked) {
      const timer = setTimeout(() => setTelegramClicked(false), 200)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [telegramClicked])

  return {
    inputValue,
    setInput,
    onKeyPressHandler,
    telegramClicked,
    addMessageHandler,
  }
}
