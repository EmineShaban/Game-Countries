import { Navigate, useNavigate} from "react-router-dom"
import shuffle from "../services/shuffle"
import {useState } from 'react'
// import WrongAnswer from './WrongAnswer'

export default function Country({
    countriesDetails,

}) {

    let optionAnswersIndex = []
    let optionAnswers = []
    let result = []
    let a = 0
    let rightAnswer = null
    const navigate = useNavigate();


    function randomCountry() {

        if (countriesDetails) {
            a = Number(Math.round(Math.random() * countriesDetails.length))
            result = countriesDetails[a]
            rightAnswer = result.name
            console.log(rightAnswer)
        }
    }
    randomCountry()

    function randomAnswers() {

        if (countriesDetails) {
            for (let index = 0; index < 3; index++) {
                let rundomIndex = Number(Math.round(Math.random() * countriesDetails.length))
                if (rundomIndex !== a) {
                    optionAnswersIndex.push(rundomIndex)
                } else {
                    index -= 1
                }

            }
            optionAnswersIndex.push(a)


            for (let index = 0; index < optionAnswersIndex.length; index++) {

                optionAnswers.push(countriesDetails[optionAnswersIndex[index]])
            }


            shuffle(optionAnswers)



        }
    }

    randomAnswers()




    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

   
    console.log(countCorrectAnswer)

    function handleInput(e) {

        console.log(e.target.value);

        if (e.target.value == rightAnswer) {
            setCountCorrectAnswer(countCorrectAnswer+1) 
            // console.log(countCorrectAnswer)

            return <Navigate to={'/'}/>
        } else {
            setCountCorrectAnswer(0) 

            console.log('wrong')
            return navigate('/wrong', { state: { id: 7, color: 'green' } })
            // return <Navigate to={'/wrong'} state={ countCorrectAnswer }/>
        }
    }


    


    return (
        <div>
            <p>
                {result.capital} is the capital of?
            </p>


            {optionAnswers.map((countries, index) => (

                <div key={index}>
                    <button value={countries.name} onClick={handleInput}>

                        {countries.name}
                    </button>
                </div>
            ))}


        </div>
    );

}