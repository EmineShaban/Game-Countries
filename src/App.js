// import { useEffect, useState } from 'react';
import './App.css';
// import * as countryService from './services/countryService';
import CountryList from './components/CountryList';
import { Routes, Route } from 'react-router-dom'
import WrongAnswer from './components/WrongAnswer';
import WrongAnswerFlag from './components/WrongAnswerFlag';

import FlagList from './components/FlagList';
import Mode from './components/Mode';

import { Link } from "react-router-dom"




function App() {


  return (
    <div className='first-div'>
      <div className="component">
        <div className='link'>
        <Link to={'/'}><h1 className='country-h1'>COUNTRY QUIZ</h1></Link>

        </div>
        <div className="quiz">

          <Routes>
            <Route path='/' element={<Mode />} />
            <Route path='/flag-quiz' element={<FlagList />} />
            <Route path='/capital-quiz' element={<CountryList />} />
            <Route path='/wrong' element={<WrongAnswer />} />
            <Route path='/wrong-flag' element={<WrongAnswerFlag />} />

          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;