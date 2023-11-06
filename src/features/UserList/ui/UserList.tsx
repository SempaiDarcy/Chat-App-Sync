import { FC } from "react"
import { UserType } from "../users-reducer"
import { UserChatContainer } from "../UserChatContainer/UserChatContainer"

type UserListProps = {
  users: UserType[]
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <div key={user.userId} className="Components">
          <UserChatContainer user={user} users={users} auth={index} />
        </div>
      ))}
    </>
  )
}
