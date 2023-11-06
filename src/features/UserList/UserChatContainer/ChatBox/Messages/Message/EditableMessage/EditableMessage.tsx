import { FC } from "react"
import { UniversalTextField } from "common/components/TextField/UniversalTextField"
import { useEditableFieldHandlers } from "hooks/messages/useEditableFieldHandlers"
import s from "./EditableMessage.module.css"

type EditableMessageProps = {
  isEditing: boolean
  editedMessage: string
  messageText: string
  onMessageChange: (text: string) => void
  onSave: () => void
}

export const EditableMessage: FC<EditableMessageProps> = ({
  isEditing,
  editedMessage,
  messageText,
  onMessageChange,
  onSave,
}) => {
  const editableField = useEditableFieldHandlers(onSave, onMessageChange)

  return (
    <div className={s.message}>
      {isEditing ? (
        <UniversalTextField
          value={editedMessage}
          onChange={editableField.onChangeHandler}
          onBlur={onSave}
          onKeyDown={editableField.handleKeyDown}
        />
      ) : (
        <div>{editableField.linkify(messageText)}</div>
      )}
    </div>
  )
}
