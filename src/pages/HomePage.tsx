import './App.css'
import useSWR from "swr";

function HomePage() {
    const {data, error, isLoading} = useSWR('/quiz', fetcher)


    return (
        <>
            <div>
                Test
            </div>
        </>
    )
}

export default HomePage;
