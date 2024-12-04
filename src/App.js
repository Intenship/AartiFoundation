import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Donation from './Pages/Donation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Media from './Pages/Media';
import OurWork from './Pages/OurWork';

function App() {
  const stripePromise = loadStripe('pk_test_51QQWUx06AlCGR9YcTnaUtDzxGAVSpl8CaR4y96A9d9PcJrltFQE2B4cW6AQqZ5ElGdhqG9nZtASte0WeF7YU5TCR00YuqcAPYT'); 
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<OurWork/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route
            path="/donation"
            element={
              <Elements stripe={stripePromise}>
                <Donation />
              </Elements>
            }
          />
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
