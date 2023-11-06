import { darcy, elizabeth } from "../../assets/images"
import { wall1, wall2, wall4, wall7, wall9, wall10 } from "./../../assets/wallpapers/BennetWallPapers"
import { wall3, wall5, wall6, wall8, wall11, wall12 } from "../../assets/wallpapers/darcyWallPapers"
import { v1 } from "uuid"

export type UserType = {
  userId: string
  userName: string
  phone: string
  messages: MessagesType[]
  avatar: string
  wallImage: string
  availableWallpapers: string[]
}

export type MessagesType = {
  id: string
  idUser: string
  message: string | Blob
  messageType: "audio" | "text" | "sticker"
}

export type ChangeMessageAT = ReturnType<typeof changeMessageAC>
export type RemoveUserMessageAT = ReturnType<typeof removeUserMessageAC>
export type AddMessageAT = ReturnType<typeof addMessageAC>
export type DeleteMessageAT = ReturnType<typeof deleteMessageAC>
export type RemoveChatAT = ReturnType<typeof removeChatAC>
export type ChangeWallpaperAT = ReturnType<typeof changeWallpaperAC>
export type ChangeUserNameAT = ReturnType<typeof changeUserNameAC>
export type UploadUserAvatarAT = ReturnType<typeof uploadUserAvatarAC>
export type AddAudioMessageAT = ReturnType<typeof addAudioMessageAC>
type ActionsType =
  | AddMessageAT
  | DeleteMessageAT
  | RemoveUserMessageAT
  | ChangeMessageAT
  | RemoveChatAT
  | ChangeWallpaperAT
  | ChangeUserNameAT
  | UploadUserAvatarAT
  | AddAudioMessageAT
const initialState: UserType[] = [
  {
    userId: "Elizabeth",
    userName: "Elizabeth",
    phone: "77777777771",
    avatar: elizabeth,
    wallImage: wall1,
    messages: [],
    availableWallpapers: [wall1, wall2, wall4, wall7, wall9, wall10],
  },
  {
    userId: "Darcy",
    userName: "Darcy",
    phone: "77777777772",
    avatar: darcy,
    wallImage: wall5,
    messages: [],
    availableWallpapers: [wall3, wall5, wall6, wall8, wall11, wall12],
  },
]

export const usersReducer = (state: UserType[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      return state.map((el) => ({
        ...el,
        messages: [...el.messages, action.newMessage],
      }))

    case "DELETE-MESSAGE":
      return state.map((el) => ({
        ...el,
        messages: el.messages.filter((message) => message.id !== action.id),
      }))

    case "REMOVE-USER":
      return state.map((user, index) => ({
        ...user,
        messages: index === action.auth ? user.messages.filter((message) => message.id !== action.id) : user.messages,
      }))

    case "CHANGE-MESSAGE":
      return state.map((user) => ({
        ...user,
        messages: user.messages.map((message) =>
          message.id === action.messageId ? { ...message, message: action.newMessage } : message,
        ),
      }))
    case "REMOVE-CHAT":
      return state.map((el) => (el.userId === action.userId ? { ...el, messages: [] } : el))
    case "CHANGE-WALLPAPER":
      return state.map((user) => (user.userId === action.userId ? { ...user, wallImage: action.newWallpaper } : user))
    case "CHANGE-USER-NAME":
      return state.map((user) => (user.userId === action.userId ? { ...user, userName: action.newName } : user))
    case "UPLOAD-USER-AVATAR":
      return state.map((user) => (user.userId === action.userId ? { ...user, avatar: action.newImage } : user))
    case "ADD-AUDIO-MESSAGE":
      return state.map((user) => {
        if (user.userId === action.userId) {
          const newMessage: MessagesType = {
            id: v1(),
            idUser: action.userId,
            message: action.audioBlob,
            messageType: "audio",
          }
          return {
            ...user,
            messages: [...user.messages, newMessage],
          }
        }
        return user
      })
    default:
      return state
  }
}

export const addMessageAC = (newMessage: MessagesType) =>
  ({
    type: "ADD-MESSAGE",
    newMessage,
  }) as const

export const deleteMessageAC = (id: string) =>
  ({
    type: "DELETE-MESSAGE",
    id,
  }) as const

export const removeUserMessageAC = (userId: string, id: string, auth: number) =>
  ({
    type: "REMOVE-USER",
    userId,
    id,
    auth,
  }) as const

export const changeMessageAC = (messageId: string, newMessage: string) =>
  ({
    type: "CHANGE-MESSAGE",
    messageId,
    newMessage,
  }) as const
export const removeChatAC = (userId: string) => {
  return {
    type: "REMOVE-CHAT",
    userId,
  } as const
}
export const changeWallpaperAC = (userId: string, newWallpaper: string) => {
  return {
    type: "CHANGE-WALLPAPER",
    userId,
    newWallpaper,
  } as const
}
export const changeUserNameAC = (userId: string, newName: string) => {
  return {
    type: "CHANGE-USER-NAME",
    userId,
    newName,
  } as const
}
export const uploadUserAvatarAC = (userId: string, newImage: string) => {
  return {
    type: "UPLOAD-USER-AVATAR",
    userId,
    newImage,
  } as const
}
export const addAudioMessageAC = (audioBlob: Blob, userId: string) => {
  return {
    type: "ADD-AUDIO-MESSAGE",
    audioBlob,
    userId,
  } as const
}
