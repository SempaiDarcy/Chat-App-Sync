import React, {FC, useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

import {EditableMessage} from "../EditableMessage/EditableMessage";
import {ContextMenu} from "../ContextMenu/ContextMenu";

import {changeMessageAC} from "../../../../../users-reducer";

import s from './MessageWithActions.module.css'

type MessageWithActionsProps = {
    idMessage: string
    messageText: string;
    deleteMessageHandler: () => void;
    removeUserMessageHandler: () => void;
    isAuthor: boolean;
}
export const MessageWithActions: FC<MessageWithActionsProps> = (props) => {
    const {
        idMessage,
        messageText,
        deleteMessageHandler,
        removeUserMessageHandler,
        isAuthor
    } = props

    const [isEditing, setIsEditing] = useState(false);
    const [editedMessage, setEditedMessage] = useState(messageText);
    const [originalMessage, setOriginalMessage] = useState(messageText);
    const [openDialog, setOpenDialog] = useState(false);

    const dispatch = useDispatch()

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditedMessage(originalMessage);
        setIsEditing(false);
    };

    const handleDeleteMessage = () => {
        deleteMessageHandler();
        setOpenDialog(false);
    };

    const changeMessageHandler = useCallback(() => {
        if (isEditing) {
            if (editedMessage.trim() !== "") {
                dispatch(changeMessageAC(idMessage, editedMessage));
                setIsEditing(false);
            } else {
                setOpenDialog(true);
            }
        } else {
            setOriginalMessage(editedMessage);
            setIsEditing(true);
        }
    }, [isEditing, dispatch, idMessage, editedMessage]);



    return (
        <div className={s.messageBlock}>
            <EditableMessage isEditing={isEditing}
                             editedMessage={editedMessage}
                             messageText={messageText}
                             onMessageChange={setEditedMessage}
                             onSave={changeMessageHandler}
            />
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Вы хотите удалить это сообщение?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleDeleteMessage} color="primary" autoFocus>
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

            <div className={s.icons}>
                <ContextMenu
                    deleteMessage={deleteMessageHandler}
                    deleteUserMessage={removeUserMessageHandler}
                    changeUserMessage={changeMessageHandler}
                    isEditing={isEditing}
                    isAuthor={isAuthor}
                />
            </div>
        </div>
    );
};