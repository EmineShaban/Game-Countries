import Country from "./Country"

// import { v4 as uuid } from 'uuid';


import nextId from "react-id-generator";



export default function CountryList({
    country,

}){

    // const unique_id = uuid();
   
                {/* {country.map(c => <Country {...c} />)} */}
                {country.map((country) => {
                    console.log(country.capital)
                    console.log(nextId)

        return (
          <div key={nextId || 0}>
            <h2>name: {country.name}</h2>
            <h2>country: {country.capital}</h2>

            <hr />
          </div>
        );
        })}

                }