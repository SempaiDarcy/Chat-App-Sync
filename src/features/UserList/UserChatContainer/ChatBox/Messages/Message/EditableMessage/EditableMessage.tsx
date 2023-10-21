import {KeyboardEvent, FC, ChangeEvent} from 'react';
import {UniversalTextField} from "../../../../../../../common/UniversalTextField";
import s from './EditableMessage.module.css'

type EditableMessageProps = {
    isEditing: boolean;
    editedMessage: string;
    messageText: string;
    onMessageChange: (text: string) => void;
    onSave: () => void;
};

export const EditableMessage: FC<EditableMessageProps> = ({isEditing, editedMessage, messageText, onMessageChange,onSave}) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSave();
        }
    };
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onMessageChange(e.target.value)
    }
    return (
        <div className={s.message}>
            {
                isEditing ? (
                        <UniversalTextField
                            value={editedMessage}
                            onChange={onChangeHandler}
                            onBlur={onSave}
                            onKeyDown={handleKeyDown}
                        />
                    )
                    : <div>{messageText}</div>
            }
        </div>
    );
};


