import '../App.css'
import {QuizShort} from "../utils/types.tsx";
import {QUIZZES} from "../test/mock/responses.ts";
import {Helmet} from "react-helmet";
import Navigation from "../components/Navigation.tsx";

function HomePage() {
    // const {data, error, isLoading} = useSWR('/quiz', fetcher);
    const data: QuizShort[] = QUIZZES;

    return (
        <>
            <Helmet title={"Home | BrainBuster"}/>
            <Navigation/>
            <h2>
                Home
            </h2>
        </>
    )
}

export default HomePage;
