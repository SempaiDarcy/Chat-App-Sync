import React, {FC} from 'react';
import {v1} from "uuid";
import {useDispatch} from "react-redux";

import {addMessageAC, InitialStateType, MessagesType} from "../users-reducer";

import {Header} from "./Header/Header";
import {ChatBox} from "./ChatBox/ChatBox";
import {Footer} from "./Footer/Footer";

import s from './UserChatContainer.module.css';

type ComponentsProps = {
    user: InitialStateType
    users: InitialStateType[],
    auth: number
}

export const UserChatContainer: FC<ComponentsProps> = (props) => {
    const { user, users, auth } = props
    const dispatch = useDispatch();

    const addMessageHandler = (message: string) => {
        const newMessage: MessagesType = {id: v1(), idUser: user.userId, message};
        dispatch(addMessageAC(newMessage));
    };
    return (
        <div className={s.components}>
            <Header user={user}/>
            <ChatBox user={user} users={users} auth={auth}/>
            <Footer addMessage={addMessageHandler} userID={user.userId}/>
        </div>
    );
};
