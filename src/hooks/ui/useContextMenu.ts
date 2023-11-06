import { useState, MouseEvent } from "react"
import { useToggle } from "./useToogle"

type UseContextMenuReturn = {
  anchorEl: null | HTMLElement
  open: boolean
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
  handleClose: () => void
}

export const useContextMenu = (): UseContextMenuReturn => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const { isOpen, open, close } = useToggle()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    open()
  }

  const handleClose = () => {
    setAnchorEl(null)
    close()
  }

  return {
    anchorEl,
    open: isOpen,
    handleClick,
    handleClose,
  }
}
