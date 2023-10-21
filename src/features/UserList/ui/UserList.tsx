import {FC} from "react";
import {InitialStateType} from "../users-reducer";
import {UserChatContainer} from "../UserChatContainer/UserChatContainer";

type UserListProps = {
    users: InitialStateType[];
};

export const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <div key={user.userId} className="Components">
                    <UserChatContainer
                        user={user}
                        users={users}
                        auth={index}
                    />
                </div>
            ))}
        </>
    );
}