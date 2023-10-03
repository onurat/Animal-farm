import React from 'react';
import './App.css';
import Calendar from './components/calender_components/Calendar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="background-image">
      <img src="/images/BackgroundImage.jpg" alt="Background" />
      </div>
      <Navbar />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
