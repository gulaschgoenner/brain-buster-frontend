import '../App.css'
import {QuizShort} from "../utils/types.tsx";
import {PLAYER_SCORES, QUIZZES} from "../test/mock/responses.ts";
import {Helmet} from "react-helmet";
import Leaderboard from "../components/LeaderBoard.tsx";

function HomePage() {
    // const {data, error, isLoading} = useSWR('/quiz', fetcher);
    const data: QuizShort[] = QUIZZES;
    console.log(data);
    return (
        <>
            <Helmet title={"Home | BrainBuster"}/>
            <h2>
                HomePage
            </h2>
            <Leaderboard scores={PLAYER_SCORES}/>
        </>
    )
}

export default HomePage;
