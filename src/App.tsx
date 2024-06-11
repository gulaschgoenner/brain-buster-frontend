import './App.css'
import {createContext, Dispatch, SetStateAction, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes.tsx";

interface User {
    name?: string;
}

interface UserContext {
    user?: User;
    setUser?: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContext | undefined>(undefined);

function App() {
    const [user, setUser] = useState<User>({name: undefined});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Routes/>
        </UserContext.Provider>
    )
}

export default App;
