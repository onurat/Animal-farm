import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BookingsPage from './components/bookings_pages/Bookings_Page';
import BookingForm from './components/Bookings_form/BookingsForm';
import Calendar from './components/calender_components/Calendar'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calendar />} /> {/* Use "element" prop for home page */}
          <Route path="/bookings" element={<BookingsPage />} /> {/* Use "element" prop for bookings page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;