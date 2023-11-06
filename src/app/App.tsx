import { FC } from "react"
import { useSelector } from "react-redux"
import { AppRootStateType } from "./store"
import { UserType } from "features/UserList/users-reducer"
import { UserList } from "features/UserList/ui/UserList"
import "./App.css"

const App: FC = () => {
  const users = useSelector<AppRootStateType, UserType[]>((state) => state.users)
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  )
}

export default App
