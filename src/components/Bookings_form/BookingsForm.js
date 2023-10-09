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
    // You can implement date availability checks here if needed
    setSelectedDate(date);
    setIsDateAvailable(true); // Update with your date availability logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic can be implemented here

    setName('');
    setPhone('');
    setEmail('');
    setSelectedDate('');
    setIsDateAvailable(true);
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
