import {BrowserRouter, Navigate, Route, Routes as ReactRoutes, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Login from "./components/Login.tsx";
import {UserContext} from "./App.tsx";
import {useContext} from "react";
import QuizPage from "./pages/QuizPage.tsx";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({children}) => {
    const userContext = useContext(UserContext);
    const location = useLocation();
    const loggedIn = !!userContext?.user?.name;

    return loggedIn ? children : <Navigate to="/login" state={{from: location}}/>;
};

function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/"}
                       element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
                <Route path={"/quiz/:quizId"}
                       element={<ProtectedRoute><QuizPage/></ProtectedRoute>}/>
            </ReactRoutes>
        </BrowserRouter>
    )
}

export default Routes;
