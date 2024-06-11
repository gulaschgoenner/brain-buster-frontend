import {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './components.module.scss'
import {UserContext} from "../App.tsx";
import logo from '../assets/logo.png'
import ProgressBar from "./ProgressBar.tsx";

interface Props {
    progress?: number;
}

function Navigation({progress, ...props}: Props) {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.navigation}>
                <button onClick={() => navigate("/")}><img src={logo} alt="BrainBuster-Logo" height={64}/></button>
                {progress != undefined &&
                    <ProgressBar progress={progress}/>
                }
                <div className={styles.userdata}>
                    <div className="username-navigation">{userContext!.user!.name}</div>
                    <button onClick={() => {
                        userContext!.setUser!({name: undefined})
                        navigate("/login");
                    }}>Abmelden
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navigation;
