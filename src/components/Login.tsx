import '../App.css'
import {useContext, useState} from "react";
import {UserContext} from "../App.tsx";
import {useNavigate} from "react-router-dom";


function Login() {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    console.log(userContext);
    return (
        <div className={"d-flex flex-column"}>
            <h2>
                Login
            </h2>
            {error && <p>Anmeldedaten ungültig, versuche es erneut.</p>}
            <label htmlFor="username-input">Benutzername</label>
            <input id={"username-input"}
                   name={"username"}
                   value={username}
                   onChange={(event) => {
                       setUsername(event.target.value);
                   }}
            />
            <label htmlFor="password-input">Passwort</label>
            <input id={"password-input"}
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
                        navigate('/');
                    }
                    }>
                Anmelden
            </button>
        </div>
    )
}

export default Login;