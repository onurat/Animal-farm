import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Calendar from './components/calender_components/Calendar';
import BookingForm from './components/Bookings_form/BookingsForm';
import BookingManager from './components/Booking_Manager.js/BookingManager';

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <Navbar />
        <BookingManager>
          <Calendar />
          <BookingForm />
        </BookingManager>
        <Footer />
      </div>
    </div>
  );
}

export default App;
