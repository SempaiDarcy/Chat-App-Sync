import { useState, useCallback, useRef } from "react"
import { useDispatch } from "react-redux"
import { changeMessageAC, deleteMessageAC, removeUserMessageAC } from "features/UserList/users-reducer"
import { useToggle } from "../ui/useToogle"

type UseMessageEditorReturn = {
  isEditing: boolean
  editedMessage: string
  isOpen: boolean
  setEditedMessage: (message: string) => void
  handleCloseDialog: () => void
  handleDeleteMessage: () => void
  changeMessageHandler: () => void
  removeUserMessageHandler: () => void
}

export const useMessageActions = (
  idMessage: string,
  userId: string,
  auth: number,
  messageText: string,
): UseMessageEditorReturn => {
  const { isOpen, open, close } = useToggle(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedMessage, setEditedMessage] = useState<string>(messageText)
  const originalMessageRef = useRef<string>(messageText)
  const dispatch = useDispatch()

  const deleteMessageHandler = useCallback(() => {
    dispatch(deleteMessageAC(idMessage))
  }, [dispatch, idMessage])

  const removeUserMessageHandler = useCallback(() => {
    dispatch(removeUserMessageAC(userId, idMessage, auth))
  }, [dispatch, userId, idMessage, auth])

  const handleCloseDialog = useCallback(() => {
    setEditedMessage(originalMessageRef.current)
    setIsEditing(false)
    close()
  }, [originalMessageRef, close])

  const handleDeleteMessage = useCallback(() => {
    deleteMessageHandler()
    close()
  }, [close, deleteMessageHandler])

  const changeMessageHandler = useCallback(() => {
    if (isEditing) {
      if (editedMessage.trim() !== "") {
        dispatch(changeMessageAC(idMessage, editedMessage))
        setIsEditing(false)
      } else {
        open()
      }
    } else {
      originalMessageRef.current = editedMessage
      setIsEditing(true)
    }
  }, [isEditing, dispatch, idMessage, editedMessage, open])

  return {
    isEditing,
    editedMessage,
    isOpen,
    setEditedMessage,
    handleCloseDialog,
    handleDeleteMessage,
    changeMessageHandler,
    removeUserMessageHandler,
  }
}
