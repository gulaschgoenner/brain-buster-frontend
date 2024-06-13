import '../App.css';
import {Helmet} from "react-helmet";
import Navigation from "../components/Navigation.tsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BACKEND_BASE_URL} from '../utils/constants.ts'
import {useEffect, useState} from "react";
import {QuizShort} from "../utils/types.tsx";
import {INITIAL_QUIZZES} from "../utils/initial.tsx";

function HomePage() {
    const [data, setData] = useState<QuizShort[]>(INITIAL_QUIZZES);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BACKEND_BASE_URL + "/quiz")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching quizzes:', error);
            });
    }, []);

    return (
        <>
            <Helmet title={"Home | BrainBuster"}/>
            <Navigation/>
            <h2>Übersicht</h2>
            {data && data.map(quiz =>
                <section key={quiz.id} className="quiz-section" onClick={() => {
                    navigate("/quiz/" + quiz.id)
                }}>
                    <h2>{quiz.name}</h2>
                    <div className="content">
                        <p>{quiz.description}</p>
                        <p>Anzahl der Fragen: {quiz.questionCount}</p>
                    </div>
                </section>
            )}
        </>
    )
}

export default HomePage;
