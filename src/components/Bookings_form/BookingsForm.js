import React, { useState } from 'react';
import './BookingsForm.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isDateAvailable, setIsDateAvailable] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateAvailable(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      phone,
      email,
      selectedDate,
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log('Booking successfully submitted.');
        setName('');
        setPhone('');
        setEmail('');
        setSelectedDate('');
        setIsDateAvailable(true);
      } else {
        console.error('Error submitting booking.');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <div className="date-picker">
          <label>Select a Date:</label>
          <input
            type="date"
            name="selectedDate"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        {!isDateAvailable && (
          <p className="error">This date is already booked. Please choose another date.</p>
        )}
        <button type="submit" disabled={!selectedDate || !isDateAvailable}>
          Book
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
