import '../App.css'
import {useNavigate, useParams} from "react-router-dom";
import {Helmet} from 'react-helmet';
import Navigation from "../components/Navigation.tsx";

function Quiz() {
    const {quizId} = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Helmet title={"Quiz | BrainBuster"}/>
            {/*TODO: Beantwortete Fragen zu Count umwandeln*/}
            <Navigation progress={90}/>
            <h2>
                Quiz {quizId}
            </h2>
        </>
    )
}

export default Quiz;