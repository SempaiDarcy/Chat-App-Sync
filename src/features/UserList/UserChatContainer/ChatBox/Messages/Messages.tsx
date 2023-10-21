import React, {FC} from 'react';

import {InitialStateType} from "../../../users-reducer";

import {Message} from "./Message/Message";

import s from './Messages.module.css'

type MessagesPropsType = {
    user: InitialStateType
    users: InitialStateType[],
    deleteMessageHandler: (messageId: string) => void,
    auth:number
}

export const Messages: FC<MessagesPropsType> = ({user, users, deleteMessageHandler,auth}) => {

    let messagesMap = user.messages.map(el => {

        const userLocal = users.filter(elU => elU.userId === el.idUser)[0]
        const myMessage = user.userId === el.idUser

        return (
            <Message
                key={el.id}
                idMessage={el.id}
                deleteMessage={deleteMessageHandler}
                myMessage={myMessage}
                user={userLocal}
                messageText={el.message}
                auth={auth}
            />
        )
    })

    return (
        <div className={s.messageScreen}>
            {messagesMap}
        </div>
    );
};
