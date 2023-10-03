import React from 'react';
import './App.css';
import Calendar from './components/calender_components/Calendar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <Navbar />
        <Calendar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
