import { useEffect, useState } from 'react';
import './App.css';
import * as countryService from './services/countryService';
import CountryList from './components/CountryList';




function App() {

  const [countriesDetails, setCountriesDetails] = useState();

  useEffect(() => {

    async function getCountryDetails() {
      const url = "https://restcountries.com/v3.1/all";
      try {
        console.log('1.5')

        const response = await (await fetch(url)).json();
        console.log('1.5')

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

  console.log('2')


  return (
    <div>

      <p>Hello, </p>
      <CountryList countriesDetails={countriesDetails} />
    </div>

  );
}

export default App;