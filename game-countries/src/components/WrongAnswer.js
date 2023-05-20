import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "./WrongAnswer.css"



export default function WrongAnswer(answers) {

    const location = useLocation();
    let countOfRightAnswers = location?.state?.answers;

    console.log(countOfRightAnswers)

    return (
        <div>
            <div className="img">
                <img className="quiz-result-img" src="/images/quiz-result.PNG" alt="quiz-result" />
            </div>
<h1 className="results">Results</h1>
            <p className="results2">You got <b><span className="results3">{countOfRightAnswers}</span></b> correct answers </p>

            <Link className="try-again2" to={'/'}><button className="try-again">Try again</button></Link>

        </div>
    )
}