import elizabet from "../../assets/images/elizabet.jpg";
import bennetWall from "../../assets/images/bennetWall.jpg";
import darcy from "../../assets/images/darcy.jpg";
import darcyWall from "../../assets/images/darcyWall.jpg";

export type InitialStateType = {
    userId: string,
    userName: string,
    messages: MessagesType[]
    avatar: string,
    wallImage: string
}

export type MessagesType = {
    id: string,
    idUser: string
    message: string,
}

export type ChangeMessageAT = ReturnType<typeof changeMessageAC>;
export type RemoveUserMessageAT = ReturnType<typeof removeUserMessageAC>;
export type AddMessageAT = ReturnType<typeof addMessageAC>;
export type DeleteMessageAT = ReturnType<typeof deleteMessageAC>;

type ActionsType = AddMessageAT | DeleteMessageAT | RemoveUserMessageAT | ChangeMessageAT;

const initialState: InitialStateType[] = [
    {userId: 'Беннет', userName: 'Беннет', avatar: elizabet, wallImage: bennetWall, messages: []},
    {userId: 'Дарси', userName: 'Дарси', avatar: darcy, wallImage: darcyWall, messages: []},
]

export const usersReducer = (state: InitialStateType[] = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return state.map(el => ({
                ...el,
                messages: [...el.messages, action.newMessage]
            }));

        case "DELETE-MESSAGE":
            return state.map(el => ({
                ...el,
                messages: el.messages.filter(message => message.id !== action.id)
            }));

        case "REMOVE-USER":
            return state.map((user, index) => ({
                ...user,
                messages: index === action.auth
                    ? user.messages.filter(message => message.id !== action.id)
                    : user.messages
            }));

        case "CHANGE-MESSAGE":
            return state.map(user => ({
                ...user,
                messages: user.messages.map(message =>
                    message.id === action.messageId
                        ? {...message, message: action.newMessage}
                        : message
                )
            }));

        default:
            return state;
    }
};

export const addMessageAC = (newMessage: MessagesType) => ({
    type: 'ADD-MESSAGE',
    newMessage
} as const);

export const deleteMessageAC = (id: string) => ({
    type: 'DELETE-MESSAGE',
    id
} as const);

export const removeUserMessageAC = (userId: string, id: string, auth: number) => ({
    type: 'REMOVE-USER',
    userId,
    id,
    auth
} as const);

export const changeMessageAC = (messageId: string, newMessage: string) => ({
    type: 'CHANGE-MESSAGE',
    messageId,
    newMessage
} as const);
