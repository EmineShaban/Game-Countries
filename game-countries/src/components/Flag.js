import { Navigate, useNavigate } from "react-router-dom"
import shuffle from "../services/shuffle"
import { useState } from 'react'
import './Flag.css';




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
    let undefinedArr =[6, 82, 163, 231, 35]




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
//иногда пишет undefined на country.name
        if (countriesDetails) {
            for (let index = 0; index < 3; index++) {
                let rundomIndex = Number(Math.round(Math.random() * countriesDetails.length))
                if (rundomIndex !== a && !optionAnswersIndex.includes(rundomIndex) && !undefinedArr.includes(rundomIndex)) {
                    optionAnswersIndex.push(rundomIndex)
                    console.log(rundomIndex)
                    console.log(optionAnswersIndex)

                // }if else(){
                //     if (countriesDetails[a] !== undefined) {

                } else {
                    index -= 1
                }

            }
            optionAnswersIndex.push(a)
console.log(optionAnswersIndex)

            for (let index = 0; index < optionAnswersIndex.length; index++) {
                if (countriesDetails[optionAnswersIndex[index]] !== undefined) {
                    optionAnswers.push(countriesDetails[optionAnswersIndex[index]])

                } else {
                     
                    optionAnswers.push(countriesDetails[optionAnswersIndex[index] + 1])

                }

            }
// console.log(optionAnswers)
            shuffle(optionAnswers)



        }
    }

    randomAnswers()




    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);



    function handleInput(e) {


        if (e.target.value === rightAnswer) {

            e.currentTarget.classList.add("right")

            nextButton = e.target.parentElement.parentElement.children
            nextButton[6].classList.add("next2")
            console.log(nextButton[6])


            listItems = e.target.parentElement.parentElement.children
            // console.log(listItems)

            for (let i = 2; i <= 5; i++) {
                console.log(listItems[i].children[0].disabled)
                listItems[i].children[0].disabled = true
                console.log(listItems[i].children[0].disabled)

                if (listItems[i].innerText === rightAnswer) {
                    correctAnswer = listItems[i]
                    correctAnswer = correctAnswer.children[0]
                    // console.log(correctAnswer)
                    correctAnswer.classList.add("right")

                }
            }

            time = window.setTimeout(() => {
                e.target.classList.remove("right")
                correctAnswer.classList.remove("right")

                for (let i = 2; i <= 5; i++) {
                    nextButton[i].children[0].disabled = false
                    console.log(nextButton[i].children[0])
                }
                nextButton[6].classList.remove("next2")

                setCountCorrectAnswer(countCorrectAnswer + 1)


                return <Navigate to={'/flag-quiz'} />
            }, 2000)

        } else {

            console.log('wrong')

            e.currentTarget.classList.add("wrong")



            nextButton = e.target.parentElement.parentElement.children

            listItems = e.target.parentElement.parentElement.children
            // console.log(listItems)

            for (let i = 2; i <=5; i++) {
                nextButton[i].children[0].disabled = true

                if (listItems[i].innerText === rightAnswer) {
                    correctAnswer = listItems[i]
                    correctAnswer = correctAnswer.children[0]
                    correctAnswer.classList.add("right")
                }
            }


            window.setTimeout(() => {
                e.target.classList.remove("wrong")
                correctAnswer.classList.remove("right")
                setCountCorrectAnswer(0)

                for (let i = 2; i <= 5; i++) {
                    nextButton[i].children[0].disabled = false
                    console.log(nextButton[i].children[0])
                }

                return navigate('/wrong-flag', {
                    state: {
                        answers: countCorrectAnswer,
                    }
                });
            }, 1500)



        }
    }

    function timoutFunc() {
        for (let i = 2; i <= 5; i++) {
            nextButton[i].children[0].disabled = false
            console.log(nextButton[i].children[0])
        }

        nextButton[6].classList.remove("next2")
        correctAnswer.classList.remove("right")

        window.clearTimeout(time)
        setCountCorrectAnswer(countCorrectAnswer + 1)

        // return <Navigate to={'/flag-quiz'} />
        return navigate('/flag-quiz')

    }




    return (

        <div>
            {/* <p>ggggg</p> */}
            <div className="img-flag"><img src={result.flags} alt="flag"></img></div>

            <p className="question">Which country does this flag belong to?</p>


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