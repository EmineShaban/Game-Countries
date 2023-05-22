
import { useEffect, useState } from 'react';
// import './App.css';
// import * as countryService from './services/countryService';
import Country from './Country';
// import Flag from './Flag';




function CountryList() {

    const [countriesDetails, setCountriesDetails] = useState();

    useEffect(() => {

        async function getCountryDetails() {
            const url = "https://restcountries.com/v3.1/all";
            try {
                const response = await (await fetch(url)).json();

                const details = response.map((country) => {
                    const countryDetail = {
                        name: country.name.common,
                        capital: country.capital,
                        flags: country.flags.png,
                    };
                    return countryDetail;
                });
                console.log(details)
                setCountriesDetails(details);
            } catch (error) {
                console.log(error);
            }
        }
        getCountryDetails();
    }, []);



    return (
        <div>
            {/* <Flag countriesDetails={countriesDetails} /> */}

            <Country countriesDetails={countriesDetails} />
        </div>


    );
}

export default CountryList;