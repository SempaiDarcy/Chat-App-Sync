import React, {FC} from 'react';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

type DeleteConfirmationModuleProps = {
    text:string,
    openDialog:boolean,
    handleCloseCallback:()=>void,
    handleDeleteCallback:()=>void,
}

export const DeleteConfirmationModule:FC<DeleteConfirmationModuleProps> = (props) => {
    const {text,
        openDialog,
        handleCloseCallback,
        handleDeleteCallback} = props
    return (
        <>
            <Dialog
                open={openDialog}
                onClose={handleCloseCallback}
            >
                <DialogContent>
                    <DialogContentText>
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCallback} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleDeleteCallback} color="primary" autoFocus>
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
