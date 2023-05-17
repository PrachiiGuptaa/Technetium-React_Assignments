import './App.css'
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Pages/HomePage/HeroSection';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Contact from './Components/Pages/Contact/Contact';
import AboutUs from './Components/Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main-content'>
      <Routes>
      <Route path = '/' element ={<HeroSection/>}></Route>
		  <Route exact path = '/register' element ={<Register/>}></Route>
		  <Route exact path = '/login' element ={<Login/>}></Route>
      <Route exact path = '/contact' element ={<Contact/>}></Route>
		  <Route exact path = '/aboutus' element ={<AboutUs/>}></Route>
	  </Routes>
      </div>
    </div>
  );
}

export default App;
