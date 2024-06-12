import '../App.css'
import {QuizShort} from "../utils/types.tsx";
import {QUIZZES} from "../test/mock/responses.ts";
import {Helmet} from "react-helmet";
import Navigation from "../components/Navigation.tsx";
import {useNavigate} from "react-router-dom";

function HomePage() {
    // const {data, error, isLoading} = useSWR('/quiz', fetcher);
    const data: QuizShort[] = QUIZZES;
    const navigate = useNavigate();

    return (
        <>
            <Helmet title={"Home | BrainBuster"}/>
            <Navigation/>
            {data.map(quiz =>
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
