
/* eslint-disable react/jsx-pascal-case */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Education from "./Components/Education";
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Not_Found from './Components/Not_Found';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Not_Found/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
