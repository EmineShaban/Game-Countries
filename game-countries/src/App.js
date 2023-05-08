import { useEffect, useState } from 'react';
import './App.css';
import * as countryService from './services/countryService';
import CountryList from './components/CountryList';




function App() {
const [country, setCountry] = useState([])

  useEffect(() => {
    countryService.getAll()
    .then(setCountry).catch(err =>{
      console.log(err)
    })
  },[])




  return (
    <div>

      <p>Hello, </p>
    <CountryList country={country}/>
    </div>
    
  );
}

export default App;