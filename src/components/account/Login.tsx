import '../../App.css'
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from "axios";
import {BACKEND_BASE_URL} from "../../utils/constants.ts";

function Login() {
    const userContext = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const from = location.state?.from?.pathname || "/";

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.shiftKey) {
            switch (event.code) {
                case "Digit1":
                    setUsername("Player 1");
                    setPassword("password");
                    userContext!.setUser!({name: "Player 1"});
                    navigate(from, {replace: true});
                    break;
                case "Digit2":
                    setUsername("Player 2");
                    setPassword("password");
                    userContext!.setUser!({name: "Player 2"});
                    navigate(from, {replace: true});
                    break;
                case "Digit3":
                    setUsername("GulaschGönner");
                    setPassword("Dönerstag");
                    userContext!.setUser!({name: "GulaschGönner"});
                    navigate(from, {replace: true});
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

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
                        axios.get(BACKEND_BASE_URL + "/player/" + username)
                            .then(response => {
                                if (response.data && userContext?.setUser != undefined) {
                                    userContext.setUser({name: response.data.username, id:response.data.id});
                                    navigate(from, {replace: true});
                                }
                            })
                            .catch(error => {
                                setError(true)
                                console.error('Error fetching data:', error);
                            })
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
