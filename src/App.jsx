import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import MovieNotFound from './components/pages/MovieNotFound';
import Footer from './components/layout/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/search/movienotfound' element={<MovieNotFound/>} />
      </Routes>
      <Footer/>
    </Router>

  );

}

export default App;
