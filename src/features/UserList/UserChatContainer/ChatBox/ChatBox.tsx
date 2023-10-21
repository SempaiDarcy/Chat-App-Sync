import React, {FC, useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {deleteMessageAC, InitialStateType} from "../../users-reducer";
import {Messages} from "./Messages/Messages";
import s from './ChatBox.module.css';


type ChatBoxProps={
    user: InitialStateType,
    users: InitialStateType[],
    auth: number
}

export const ChatBox: FC<ChatBoxProps> = ({user, users, auth}) => {

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    const backgroundImageStyle = {
        backgroundImage: `url(${user.wallImage})`,
        backgroundSize: 'cover'
    };

    const dispatch = useDispatch();

    const deleteMessageHandler = (messageId: string) => {
        dispatch(deleteMessageAC(messageId));
    };

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [user.messages]);

    return (
        <div className={s.mainContainer} ref={messagesContainerRef} style={backgroundImageStyle}>
            <Messages user={user} users={users} deleteMessageHandler={deleteMessageHandler} auth={auth}/>
        </div>
    );
};

