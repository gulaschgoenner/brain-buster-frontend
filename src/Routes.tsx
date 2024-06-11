import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {useContext} from "react";
import Login from "./components/Login.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes as ReactRoutes} from "react-router-dom";
import {UserContext} from "./App.tsx";

interface UserContext {
    name?: string;
}


function Routes() {
    const userContext = useContext(UserContext);
    const loggedIn = !!userContext?.user?.name
    console.log(loggedIn);
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path={"/"} element={loggedIn ? <HomePage/> : <Navigate to={"/login"}/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </ReactRoutes>
        </BrowserRouter>
    )
}

export default Routes;
