import '../App.css'
import {PlayerScore} from "../utils/types.tsx";

interface Props {
    scores: PlayerScore[]
}

function Leaderboard({scores}: Props) {

    return (
        <>
            <h3>
                Rangliste
            </h3>
            <table>
                <thead>
                <tr>
                    <td>Platzierung</td>
                    <td>Punktzahl</td>
                    <td>Spieler</td>
                </tr>
                </thead>
                <tbody>{scores.sort((a, b) => b.score - a.score).map((ps, index) =>
                    <tr key={ps.id}>
                        <td>{index + 1}</td>
                        <td>{ps.score}</td>
                        <td>{ps.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Leaderboard;
