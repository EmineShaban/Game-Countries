// import Country from "./Country"

import shuffle from "../services/shuffle"

// import { useState, useEffect } from "react"
export default function CountryList({
    countriesDetails,

}) {

    let result = []
    let a = 0
    // console.log(result)
    let rightAnswer = null
    // const [country, setCountry] = useState();

    // useEffect(() => {
    function randomCountry() {
        if (countriesDetails) {
            a = Number(Math.round(Math.random() * countriesDetails.length))
            result = countriesDetails[a]
            rightAnswer = result.name
            console.log(result)
            console.log(rightAnswer)
            // setCountry(result)

        }
        console.log(result)

    }
    randomCountry()

    let optionAnswersIndex = []
    let optionAnswers = []
    function randomAnswers() {

        if (countriesDetails) {
            // console.log(rundomIndex)
            for (let index = 0; index < 3; index++) {
                let rundomIndex = Number(Math.round(Math.random() * countriesDetails.length))
                if (rundomIndex !== a) {
                    optionAnswersIndex.push(rundomIndex)
                    // optionAnswers.push(countriesDetails[rundomIndex])
                } else {
                    index -= 1
                }

            }
            optionAnswersIndex.push(a)

            console.log(optionAnswersIndex)
            console.log(a)
            for (let index = 0; index < optionAnswersIndex.length; index++) {
                // let r = Number(Math.round(Math.random() * optionAnswersIndex.length))
                // console.log(r)
                optionAnswers.push(countriesDetails[optionAnswersIndex[index]])
            }
  

shuffle(optionAnswers)


            
        }
    }
    
    randomAnswers()
    
  





    return (
        <div>
            <p>
                Hello!
                {result.capital} is the capital of?
            </p>

            
                {optionAnswers.map((countries, index) =>(

                    <div key={index}>
                        <p>

                        {countries.name}
                        </p>
                    </div>
                ))}
 

        </div>
    );

}