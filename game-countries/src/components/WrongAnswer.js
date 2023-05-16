import { Link } from "react-router-dom"
export default function WrongAnswer()


{
    return (
        <div>
      
            <p>Wrong Answer</p>
            <button><Link to={'/'}>Try again</Link></button>

        </div>
    )
}