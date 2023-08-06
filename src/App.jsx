import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Footer from './components/layout/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  //make route movie not found

  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
      <Footer/>
    </Router>

  );

}

export default App;
