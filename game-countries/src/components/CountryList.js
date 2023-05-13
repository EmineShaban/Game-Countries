// import Country from "./Country"
import { useState, useEffect } from "react"
export default function CountryList({
    countriesDetails,

}) {
    console.log('jj')
    console.log(countriesDetails)
    const [country, setCountry] = useState([])

    let a = Number(Math.round(Math.random() * 10))
    useEffect(() => {

        // console.log(a)
        // console.log(countriesDetails[a])
        const first = countriesDetails[a]
        // console.log(first)
                        .then(setCountry(first))
                .catch(err =>{
                  console.log(err)
                })
              },[])
    



   
    return (
        <div>
            <p>
                 {country?.capital} is the capital of?
            </p>





            {/* {countriesDetails.map((c, index) => 
      // console.log(index)
      <Country key={index} {...c}/>
      )
      } */}

        </div>
    );
    // })}

}