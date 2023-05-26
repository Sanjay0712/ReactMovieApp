import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Pagenotfound from './Components/PageNotFound/Pagenotfound';
import MovieDetail from './Components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
