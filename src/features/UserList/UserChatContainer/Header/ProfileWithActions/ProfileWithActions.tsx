import { FC } from "react"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import { ProfileActions } from "./ProfileActions/ProfileActions"
import { ContextMenu } from "common/components/ContextMenu/ContextMenu"
import { useContextMenu } from "hooks/ui/useContextMenu"
import { UserType } from "../../../users-reducer"
import { useDeleteChatModalHandler } from "hooks/ui/modals/useDeleteChatModalHandler"
import { useChangeWallModalHandler } from "hooks/ui/modals/useChangeWallModalHandler"
import { useChangeProfileModalHandler } from "hooks/ui/modals/useChangeProfileModalHandler"
import { WallpaperSelector } from "./ModalComponents/WallpaperSelector"
import { ProfileSelector } from "./ModalComponents/ProfileSelector"
import { DeleteConfirmationModule } from "common/components/ModalWindow/DeleteConfirmationModule"
import { ConfigModal } from "common/components/ModalWindow/ConfigModal"

type ProfileWithActionsProps = {
  user: UserType
}
export const ProfileWithActions: FC<ProfileWithActionsProps> = (props) => {
  const { user } = props
  const contextMenu = useContextMenu()
  const deleteModal = useDeleteChatModalHandler(user)
  const wallModal = useChangeWallModalHandler()
  const profileModal = useChangeProfileModalHandler()

  return (
    <>
      <ContextMenu
        open={contextMenu.open}
        anchorEl={contextMenu.anchorEl}
        handleClick={contextMenu.handleClick}
        handleClose={contextMenu.handleClose}
        icon={<SettingsApplicationsIcon style={{ color: "#ffffff" }} fontSize={"large"} />}
      >
        <ProfileActions
          openDeleteChatDialog={deleteModal.openDialog}
          openProfileDialog={profileModal.openProfileDialog}
          openWallDialog={wallModal.openWallDialog}
          handleClose={contextMenu.handleClose}
        />
      </ContextMenu>
      <ConfigModal
        dialogOpen={wallModal.wallDialogOpen}
        closeDialog={wallModal.closeWallDialog}
        children={<WallpaperSelector user={user} closeWallDialog={wallModal.closeWallDialog} />}
      />
      <ConfigModal
        dialogOpen={profileModal.profileDialogOpen}
        closeDialog={profileModal.closeProfileDialog}
        children={<ProfileSelector user={user} />}
      />
      <DeleteConfirmationModule
        text={"Вы действительно хотите удалить этот чат?"}
        openDialog={deleteModal.isDialogOpen}
        handleCloseCallback={deleteModal.closeDialog}
        handleDeleteCallback={deleteModal.deleteChat}
      />
    </>
  )
}
