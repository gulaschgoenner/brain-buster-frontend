import '../App.css'
import {useContext, useState} from "react";
import {UserContext} from "../App.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";


function Login() {
    const userContext = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const from = location.state?.from?.pathname || "/";


    console.log(userContext);
    return (
        <div className={"d-flex flex-column"}>
            <Helmet title={"Login | BrainBuster"}/>
            <h2>
                Login
            </h2>
            {error && <p>Anmeldedaten ungültig, versuche es erneut.</p>}
            <label htmlFor="username-input">Benutzername</label>
            <input id={"username-input"}
                   type={"text"}
                   name={"username"}
                   value={username}
                   onChange={(event) => {
                       setUsername(event.target.value);
                   }}
            />
            <label htmlFor="password-input">Passwort</label>
            <input id={"password-input"}
                   type={"password"}
                   name={"password"}
                   value={password}
                   onChange={(event) => {
                       setPassword(event.target.value);
                   }}
            />
            <button id={"login-button"}
                    title={"Anmelden"}
                    disabled={username.length < 1 || password.length < 1}
                    onClick={() => {
                        setError(false)
                        // axios.get("/validate/" + username + "/" + sha256(password))
                        //     .then(response => {
                        //         if (response.data) {
                        //             userContext.name = username;
                        //             navigate('/');
                        //         }
                        //     })
                        //     .catch(error => {
                        //         setError(true)
                        //         console.error('Error fetching data:', error);
                        //     })
                        // TODO: rausnehmen, wenn backend angepasst
                        if (userContext?.setUser != undefined) {
                            userContext.setUser({name: username});
                        }
                        navigate(from, {replace: true});
                    }
                    }>
                Anmelden
            </button>
        </div>
    )
}

export default Login;