import '../App.css'
import {useNavigate, useParams} from "react-router-dom";
import {Helmet} from 'react-helmet';

function Quiz() {
    const {quizId} = useParams();
    const navigate = useNavigate();


    return (
        <>
            <Helmet title={"Quiz | BrainBuster"}/>
            <button onClick={() => navigate("/")}>Zur Homepage</button>
            <h2>
                Quiz {quizId}
            </h2>
        </>
    )
}

export default Quiz;