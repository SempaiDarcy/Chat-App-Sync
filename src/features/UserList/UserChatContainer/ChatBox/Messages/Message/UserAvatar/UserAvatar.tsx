import React, {FC} from 'react';
import {InitialStateType} from "../../../../../users-reducer";
import s from './UserAvatar.module.css'

type UserAvatarProps = {
    user: InitialStateType,
}
const TIME_DISPLAY_FORMAT = 5;
export const UserAvatar: FC<UserAvatarProps> = (props) => {
    const {user} = props
    const time = new Date().toTimeString().slice(0, TIME_DISPLAY_FORMAT);
    return (
        <div className={s.ava}>
            <img className={s.avatar} src={user.avatar} alt={''}></img>
            <div className={s.time}>{time}</div>
        </div>
    );
};

