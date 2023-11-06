import { useState, useCallback } from 'react';

type UseToggleReturn = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useToggle = (initialState: boolean = false): UseToggleReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        open,
        close
    };
};
