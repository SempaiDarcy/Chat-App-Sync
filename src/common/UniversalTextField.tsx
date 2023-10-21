import {ChangeEvent, FC, KeyboardEvent} from 'react';
import {TextField} from "@mui/material";

type UniversalTextFieldProps = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void,
    onBlur?: () => void
    autoComplete?: string
    placeholder?: string
    overrideStyles?: any
}

export const UniversalTextField: FC<UniversalTextFieldProps> = (props) => {
    const {value, onChange, onKeyDown, onBlur, autoComplete, placeholder, overrideStyles} = props
    return (
        <>
            <TextField style={overrideStyles}
                       value={value}
                       onChange={onChange}
                       onKeyDown={onKeyDown}
                       onBlur={onBlur}
                       autoComplete={autoComplete}
                       placeholder={placeholder}/>
        </>
    );
};