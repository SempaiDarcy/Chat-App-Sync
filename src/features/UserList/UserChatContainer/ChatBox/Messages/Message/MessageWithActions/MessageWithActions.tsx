import { FC } from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { DeleteConfirmationModule } from "common/components/ModalWindow/DeleteConfirmationModule"
import { ContextMenu } from "common/components/ContextMenu/ContextMenu"
import { useContextMenu } from "hooks/ui/useContextMenu"
import { useMessageActions } from "hooks/messages/useMessageActions"
import { EditableMessage } from "../EditableMessage/EditableMessage"
import { MessageActions } from "./MessageActions/MessageActions"
import s from "./MessageWithActions.module.css"

type MessageWithActionsProps = {
  userId: string
  auth: number
  idMessage: string
  messageText: string
  isAuthor: boolean
}
const TIME_DISPLAY_FORMAT = 5
export const MessageWithActions: FC<MessageWithActionsProps> = (props) => {
  const { userId, auth, idMessage, messageText, isAuthor } = props

  const messageHandlers = useMessageActions(idMessage, userId, auth, messageText)

  const contextMenu = useContextMenu()
  const time = new Date().toTimeString().slice(0, TIME_DISPLAY_FORMAT)
  return (
    <div className={s.messageBlock}>
      <EditableMessage
        isEditing={messageHandlers.isEditing}
        editedMessage={messageHandlers.editedMessage}
        messageText={messageText}
        onMessageChange={messageHandlers.setEditedMessage}
        onSave={messageHandlers.changeMessageHandler}
      />
      <DeleteConfirmationModule
        text={"Вы хотите удалить это сообщение?"}
        openDialog={messageHandlers.isOpen}
        handleCloseCallback={messageHandlers.handleCloseDialog}
        handleDeleteCallback={messageHandlers.handleDeleteMessage}
      />
      <div className={s.icons}>
        <div className={s.time}>{time}</div>
        <ContextMenu
          open={contextMenu.open}
          anchorEl={contextMenu.anchorEl}
          handleClick={contextMenu.handleClick}
          handleClose={contextMenu.handleClose}
          icon={<MoreHorizIcon />}
        >
          <MessageActions
            isAuthor={isAuthor}
            handleClose={contextMenu.handleClose}
            deleteMessage={messageHandlers.handleDeleteMessage}
            deleteUserMessage={messageHandlers.removeUserMessageHandler}
            changeUserMessage={messageHandlers.changeMessageHandler}
            isEditing={messageHandlers.isEditing}
          />
        </ContextMenu>
      </div>
    </div>
  )
}
