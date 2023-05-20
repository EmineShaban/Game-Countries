// import { useEffect, useState } from 'react';
import './App.css';
// import * as countryService from './services/countryService';
import CountryList from './components/CountryList';
import {Routes, Route} from 'react-router-dom'
import WrongAnswer from './components/WrongAnswer';






function App() {


  return (
    <div>
     <div className="component">
            <h1>COUNTRY QUIZ</h1>
            <div className="quiz">

      <Routes>

<Route path='/' element={<CountryList />}/> 
<Route path='/wrong' element={<WrongAnswer />}/> 

      </Routes>
    </div>
    </div>
    </div>

  );
}

export default App;