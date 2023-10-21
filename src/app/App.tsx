import {FC} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {InitialStateType} from "../features/UserList/users-reducer";
import {UserList} from "../features/UserList/ui/UserList";
import './App.css';

const App: FC = () => {
    const users = useSelector<AppRootStateType, InitialStateType[]>(state => state.users);
    return (
        <div className="App">
            <UserList users={users}/>
        </div>
    );
}

export default App;

