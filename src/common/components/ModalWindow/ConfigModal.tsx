import {FC, ReactNode} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

type ConfigModalProps = {
    dialogOpen:boolean
    closeDialog:()=>void,
    children:ReactNode
};
export const ConfigModal:FC<ConfigModalProps> = (props) => {
    const {dialogOpen, closeDialog, children}=props
    return (
        <Dialog open={dialogOpen} onClose={closeDialog}>
            <DialogContent>
                {children}
            </DialogContent>
            <Button variant='contained' onClick={closeDialog}>Закрыть</Button>
        </Dialog>
    );
};
