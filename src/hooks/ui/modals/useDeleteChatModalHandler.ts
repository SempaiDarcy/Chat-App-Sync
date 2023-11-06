import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { removeChatAC, UserType } from "features/UserList/users-reducer"
import { useToggle } from "../useToogle"

type UseDeleteChatModalHandlerReturn = {
  isDialogOpen: boolean
  openDialog: () => void
  closeDialog: () => void
  deleteChat: () => void
}

export const useDeleteChatModalHandler = (user: UserType): UseDeleteChatModalHandlerReturn => {
  const { isOpen, open, close } = useToggle()
  const dispatch = useDispatch()

  const deleteChat = useCallback(() => {
    dispatch(removeChatAC(user.userId))
    close()
  }, [dispatch, close])

  return {
    isDialogOpen: isOpen,
    openDialog: open,
    closeDialog: close,
    deleteChat,
  }
}
