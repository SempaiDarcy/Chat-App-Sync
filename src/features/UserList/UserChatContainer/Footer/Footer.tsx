import React, {
    KeyboardEvent,
    ChangeEvent,
    useState,
    FC, useEffect
} from 'react';

import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

import { UniversalTextField } from "../../../../common/UniversalTextField";
import { textFieldStyles } from "../../../../styles/textFieldStyles";

import s from './Footer.module.css';

type FooterPropsType = {
    addMessage: (idUser: string, message: string) => void
    userID: string
}

export const Footer:FC<FooterPropsType> = (props) => {
    const {addMessage,userID} =props
    const [inputValue, setInputValue] = useState('')
    const [telegramClicked, setTelegramClicked] = useState(false);
    const setInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const addMessageHandler = () => {
        setTelegramClicked(!telegramClicked);
        if (inputValue.trim() !== '') {
            addMessage(inputValue, userID,);
            setInputValue('');
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addMessageHandler();
    }
    useEffect(() => {
        if (telegramClicked) {
            const timer = setTimeout(() => setTelegramClicked(false), 200);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [telegramClicked]);
    return (
        <div className={s.footer}>
            <UniversalTextField
                overrideStyles={textFieldStyles.input}
                placeholder='Введите сообщение...'
                value={inputValue}
                onChange={setInput}
                onKeyDown={onKeyPressHandler}
                autoComplete="off"
            />
            <div className={s.send}>
                <TelegramIcon onClick={addMessageHandler} style={{color: telegramClicked ? 'green' : 'inherit'}}/>
                <KeyboardVoiceOutlinedIcon/>
                <AddReactionOutlinedIcon/></div>
        </div>
    );
};

