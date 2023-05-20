import { Link } from "react-router-dom"
import {useLocation} from 'react'
export default function WrongAnswer(){
    
    // const {state} = useLocation();
    // const { id, color } = state; // Read values passed on state

// console.log(state)
// console.log(id)
console.log('cxmdkdmdjcdjn')


    return (
        <div>
      
            <p>Wrong Answer</p>
            <button><Link to={'/'}>Try again</Link></button>

        </div>
    )
}