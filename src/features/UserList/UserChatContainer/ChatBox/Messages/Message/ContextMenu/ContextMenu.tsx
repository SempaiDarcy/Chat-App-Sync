import {FC, useState, MouseEvent} from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


type BasicMenuPropsType = {
    deleteMessage: () => void,
    deleteUserMessage: () => void
    changeUserMessage: () => void,
    isEditing: boolean,
    isAuthor: boolean
}
export const ContextMenu: FC<BasicMenuPropsType> = ({
                                                        deleteMessage,
                                                        deleteUserMessage,
                                                        changeUserMessage,
                                                        isEditing,
                                                        isAuthor
                                                    }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
            >
                <MoreHorizIcon color={'primary'}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isAuthor ? <div>
                        <MenuItem onClick={() => {
                            handleClose()
                            deleteUserMessage()
                        }}>Удалить у меня</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose()
                            deleteMessage()
                        }}>Удалить у всех</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            changeUserMessage()
                        }}>{isEditing ? 'Сохранить' : 'Изменить'}</MenuItem>
                    </div> :
                    <MenuItem onClick={() => {
                        handleClose()
                        deleteUserMessage()
                    }}>Удалить у меня</MenuItem>}
            </Menu>
        </div>
    );
}