import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Calendar from './components/calender_components/Calendar';
import BookingForm from './components/Bookings_form/BookingsForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="calendar-and-form">
        <Calendar />
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
