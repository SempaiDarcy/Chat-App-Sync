import { useToggle } from "../useToogle"

type useChangeProfileHandlerReturn = {
  profileDialogOpen: boolean
  openProfileDialog: () => void
  closeProfileDialog: () => void
}
export const useChangeProfileModalHandler = (): useChangeProfileHandlerReturn => {
  const { isOpen, open, close } = useToggle()

  return {
    profileDialogOpen: isOpen,
    openProfileDialog: open,
    closeProfileDialog: close,
  }
}
