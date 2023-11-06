import { FC } from "react"
import MenuItem from "@mui/material/MenuItem"
type ProfileActionsProps = {
  openDeleteChatDialog: () => void
  openProfileDialog: () => void
  handleClose: () => void
  openWallDialog: () => void
}
export const ProfileActions: FC<ProfileActionsProps> = (props) => {
  const { openDeleteChatDialog, openProfileDialog, handleClose, openWallDialog } = props
  const onCLickDeleteChatHandler = () => {
    handleClose()
    openDeleteChatDialog()
  }
  const onCLickChangeWallHandler = () => {
    handleClose()

    openWallDialog()
  }
  const onCLickChangeProfile = () => {
    handleClose()
    openProfileDialog()
  }
  return (
    <>
      <MenuItem onClick={onCLickChangeProfile}>Изменить профиль</MenuItem>
      <MenuItem onClick={onCLickChangeWallHandler}>Поменять обои</MenuItem>
      <MenuItem onClick={onCLickDeleteChatHandler}>Удалить чат</MenuItem>
    </>
  )
}
