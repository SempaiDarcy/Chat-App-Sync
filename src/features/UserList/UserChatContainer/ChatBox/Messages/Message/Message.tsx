import {FC, useCallback} from 'react';
import {useDispatch} from "react-redux";
import {InitialStateType, removeUserMessageAC} from "../../../../users-reducer";
import {MessageWithActions} from "./MessageWithActions/MessageWithActions";
import {UserAvatar} from "./UserAvatar/UserAvatar";
import s from './Message.module.css'

type MessagePropsType = {
    user: InitialStateType
    messageText: string
    myMessage: boolean
    deleteMessage: (idMessage: string) => void
    idMessage: string
    auth: number
}

export const Message: FC<MessagePropsType> = (props) => {

    const {myMessage, user, messageText, deleteMessage, idMessage, auth} = props;
    const dispatch = useDispatch()

    const deleteMessageHandler = useCallback(() => {
        deleteMessage(idMessage);
    }, [deleteMessage, idMessage]);

    const removeUserMessageHandler = useCallback(() => {
        dispatch(removeUserMessageAC(user.userId, idMessage, auth));
    }, [dispatch, user.userId, idMessage, auth]);


    return (
        <div className={myMessage ? `${s.block} ${s.myMessage}` : s.block}>
            <UserAvatar user={user}/>
            <MessageWithActions
                idMessage={idMessage}
                messageText={messageText}
                deleteMessageHandler={deleteMessageHandler}
                removeUserMessageHandler={removeUserMessageHandler}
                isAuthor={myMessage}/>
        </div>
    );
};

