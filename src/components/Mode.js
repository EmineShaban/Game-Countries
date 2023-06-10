import { Link } from "react-router-dom"
// import { useLocation } from "react-router-dom";
import "./Mode.css"



export default function Mode({
    country,

}) {

    // const location = useLocation();
    // let countOfRightAnswers = location?.state?.answers;

    // console.log(countOfRightAnswers)

    return (
        <div>
           <h1 className="select"><b>Select the game mode</b></h1>

            <Link className="try-again2" to={'/capital-quiz'} ><button className="choose-mode">City is the capital of...</button></Link>
            <Link className="try-again2" to={'/flag-quiz'}><button className="choose-mode">Flag belong to country...</button></Link>

        </div>
    )
}