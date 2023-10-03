import React from 'react';
import './BookingPage.css'; //
import Calendar from './components/calender_components/Calendar';
import BookingForm from './components/Bookings_form/BookingsForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="calendar-wrapper">
        <Calendar />
      </div>
      <div className="form-wrapper">
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;
