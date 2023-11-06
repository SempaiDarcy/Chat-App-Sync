import {useToggle} from "../useToogle";

type UseChangeWallModalHandlerReturn = {
    wallDialogOpen:boolean,
    openWallDialog:()=>void,
    closeWallDialog:()=>void
}
export const useChangeWallModalHandler = ():UseChangeWallModalHandlerReturn => {
    const { isOpen, open, close } = useToggle();

    return {
        wallDialogOpen: isOpen,
        openWallDialog: open,
        closeWallDialog: close,
    };
};


