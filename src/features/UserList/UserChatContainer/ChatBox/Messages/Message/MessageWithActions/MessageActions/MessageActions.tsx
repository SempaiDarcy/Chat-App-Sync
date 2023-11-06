import {FC} from "react";
import MenuItem from "@mui/material/MenuItem";

type MenuItemsProps = {
    isAuthor:boolean,
    handleClose:()=>void,
    deleteMessage: () => void,
    deleteUserMessage: () => void
    changeUserMessage: () => void,
    isEditing:boolean
}
export const MessageActions:FC<MenuItemsProps> = (props) => {
    const {isAuthor,
        handleClose,
        deleteMessage,
        deleteUserMessage,
        changeUserMessage,
        isEditing} = props

    const onClickHandler = (callBack:()=>void) => {
        handleClose()
        callBack()
    }
    return (
        <>
            {isAuthor ? <>
                    <MenuItem onClick={()=> onClickHandler(deleteUserMessage)}>Удалить у меня</MenuItem>
                    <MenuItem onClick={() => onClickHandler(deleteMessage)}>Удалить у всех</MenuItem>
                    <MenuItem onClick={() => onClickHandler(changeUserMessage)}>{isEditing ? 'Сохранить' : 'Изменить'}</MenuItem>
                </> :
                <MenuItem onClick={() => onClickHandler(deleteUserMessage)}>Удалить у меня</MenuItem>}
        </>
    );
};

