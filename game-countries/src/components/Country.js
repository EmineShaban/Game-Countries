import { Navigate, useNavigate } from "react-router-dom"
import shuffle from "../services/shuffle"
import { useState } from 'react'
import './Country.css';




export default function Country({
    countriesDetails,

}) {

    const navigate = useNavigate();
    let optionAnswersIndex = []
    let optionAnswers = []
    let result = []
    let a = 0
    let rightAnswer = null
    let correctAnswer
    let listItems =''

    function randomCountry() {

        if (countriesDetails) {
            a = Number(Math.round(Math.random() * countriesDetails.length))
            if (countriesDetails[a] !== undefined) {
                result = countriesDetails[a]
                rightAnswer = result.name
                console.log(rightAnswer)

            } else {
                result = countriesDetails[a + 1]
                rightAnswer = result.name
                console.log(rightAnswer)
            }
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
                if (countriesDetails[optionAnswersIndex[index]] !== undefined) {
                    optionAnswers.push(countriesDetails[optionAnswersIndex[index]])
                } else {
                    optionAnswers.push(countriesDetails[optionAnswersIndex[index] + 1])
                }

            }

            console.log(optionAnswers)
            shuffle(optionAnswers)
            console.log(optionAnswers)
            optionAnswers.map((k, i) => {
                console.log(k)
            })
            // console.log(r)
        }
    }

    randomAnswers()




    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

    function handleInput(e) {

        if (e.target.value === rightAnswer) {
            e.currentTarget.classList.add("right")

            window.setTimeout(() => {
                e.target.classList.remove("right")
                setCountCorrectAnswer(countCorrectAnswer + 1)

                return <Navigate to={'/capital-quiz'} />
            }, 1000)

        } else {
            e.currentTarget.classList.add("wrong")
            console.log(e)


            listItems = e.target.parentElement.parentElement.children
            // console.log(listItems)
            // console.log(listItems[2].innerText)

            for (let i = 0; i < 4; i++) {
              if (listItems[i].innerText === rightAnswer) {
                correctAnswer = listItems[i]
                correctAnswer = correctAnswer.children[0]
                // let correctAns = correctAnswer
                correctAnswer.classList.add("right")
        console.log(correctAnswer)
        // return correctAnswer
              }
            }
            window.setTimeout(() => {
                e.target.classList.remove("wrong")
                correctAnswer.classList.remove("right")

                setCountCorrectAnswer(0)

                console.log(correctAnswer)

                return navigate('/wrong', {
                    state: {
                        answers: countCorrectAnswer,
                    }
                });
            }, 2000)
        }
    }




    return (

        <div>
            <p className="question">
                {result.capital} is the capital of?
            </p>


            {optionAnswers.map((countries, index) => (

                <div key={index}>
                    <button className="choose-answers" value={countries.name} onClick={handleInput}>
                        {countries.name}
                    </button>
                </div>
            ))}
            {/* <button className="next">Next</button> */}

        </div>
    );

}