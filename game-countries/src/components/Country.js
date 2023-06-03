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
    let listItems = ''
    let nextButton = ''
    let time
    let undefinedArr = [6, 82, 163, 231]


    
    
    function randomCountry() {

        if (countriesDetails) {
            a = Number(Math.round(Math.random() * countriesDetails.length))

            if (countriesDetails[a] !== undefined && !undefinedArr.includes(a)) {
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

                if (rundomIndex !== a && !optionAnswersIndex.includes(rundomIndex) && !undefinedArr.includes(rundomIndex)) {
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

            shuffle(optionAnswers)

            console.log(optionAnswers)
            optionAnswers.map((k, i) => {
                console.log(k)
            })
        }
    }

    randomAnswers()



    
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

    function handleInput(e) {

        if (e.target.value === rightAnswer) {
            e.currentTarget.classList.add("right")
            listItems = e.target.parentElement.parentElement.children
            nextButton = e.target.parentElement.parentElement.children
            nextButton[5].classList.add("next2")

            for (let i = 1; i <= 4; i++) {
                // console.log(listItems[i].children[0])
                listItems[i].children[0].disabled = true

                if (listItems[i].innerText === rightAnswer) {
                    correctAnswer = listItems[i]
                    correctAnswer = correctAnswer.children[0]
                    correctAnswer.classList.add("right")
                }
            }


            time = window.setTimeout(() => {

                for (let i = 1; i <= 4; i++) {
                    nextButton[i].children[0].disabled = false
                    console.log(nextButton[i].children[0])
                }
                
                e.target.classList.remove("right")
                nextButton[5].classList.remove("next2")
                setCountCorrectAnswer(countCorrectAnswer + 1)

                return <Navigate to={'/capital-quiz'} />

            }, 2000)

        } else {
            e.currentTarget.classList.add("wrong")

            listItems = e.target.parentElement.parentElement.children
            nextButton = e.target.parentElement.parentElement.children

            for (let i = 1; i <= 4; i++) {
                nextButton[i].children[0].disabled = true

                if (listItems[i].innerText === rightAnswer) {
                    correctAnswer = listItems[i]
                    correctAnswer = correctAnswer.children[0]
                    correctAnswer.classList.add("right")
                }
            }


            window.setTimeout(() => {
                e.target.classList.remove("wrong")
                
                for (let i = 1; i <= 4; i++) {
                    nextButton[i].children[0].disabled = false
                    console.log(nextButton[i].children[0])
                }

                setCountCorrectAnswer(0)

                return navigate('/wrong', {
                    state: {
                        answers: countCorrectAnswer,
                    }
                });
            }, 1500)
        }
    }


    function timoutFunc() {
        for (let i = 1; i <= 4; i++) {
            nextButton[i].children[0].disabled = false
            console.log(nextButton[i].children[0])
        }

        nextButton[5].classList.remove("next2")
        correctAnswer.classList.remove("right")

        window.clearTimeout(time)
        setCountCorrectAnswer(countCorrectAnswer + 1)

        return navigate('/capital-quiz')

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
            <button className="next" onClick={timoutFunc}>Next</button>

        </div>
    );

}