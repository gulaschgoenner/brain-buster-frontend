import '../App.css'
import {QuizShort} from "../utils/types.tsx";
import {QUIZZES} from "../test/mock/responses.ts";

function HomePage() {
    // const {data, error, isLoading} = useSWR('/quiz', fetcher);
    const data: QuizShort[] = QUIZZES;
    console.log(data);
    return (
        <>
            <div>
                {data.toString()}
            </div>
        </>
    )
}

export default HomePage;
