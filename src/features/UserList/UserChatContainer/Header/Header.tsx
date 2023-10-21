import {FC} from "react";
import {InitialStateType} from "../../users-reducer";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import s from './Header.module.css';
import Button from "@mui/material/Button";

type HeaderPropsType = {
    user: InitialStateType
}

export const Header: FC<HeaderPropsType> = ({user}) => {
    return (
        <div className={s.Header}>
            <div className={s.avaName}>
                <img className={s.ava} src={user.avatar} alt={''}/>
                <span className={s.name}><b>{user.userName}</b></span>
            </div>
            <Button><SettingsApplicationsIcon fontSize='large' color="action" className={s.setting}/></Button>
        </div>
    )
}

