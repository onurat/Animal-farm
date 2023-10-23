import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BookingForm from './components/Bookings_form/BookingsForm';
import Calendar from './components/calender_components/Calendar'; 

function App() {
  return (
    <div className="App">
    <Navbar />
    <BookingForm />
    <Calendar />
    <Footer />
    </div>
  );
}

export default App;