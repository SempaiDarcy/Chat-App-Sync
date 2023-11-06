import { combineReducers, legacy_createStore } from "redux"
import { usersReducer } from "features/UserList/users-reducer"

export const rootReducer = combineReducers({
  users: usersReducer,
})
export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
