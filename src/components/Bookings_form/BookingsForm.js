import React, { Component } from 'react';
import './BookingsForm.css';

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      selectedDate: null,
      isDateAvailable: true,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDateChange = (date) => {
    const { bookings } = this.props;
    const isDateAvailable = !bookings.some((booking) =>
      new Date(booking.date).toDateString() === new Date(date).toDateString()
    );

    this.setState({
      selectedDate: date,
      isDateAvailable,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, selectedDate, isDateAvailable } = this.state;

    if (isDateAvailable && selectedDate) {
      const newBooking = {
        date: selectedDate,
        name,
        phone,
        email,
      };

      this.props.onBookingSubmit(newBooking);

      this.setState({
        name: '',
        phone: '',
        email: '',
        selectedDate: null,
        isDateAvailable: true,
      });
    }
  }

  render() {
    const { name, phone, email, selectedDate, isDateAvailable } = this.state;

    return (
      <div className="booking-form">
        <h2>Book a Slot</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <div className="date-picker">
            <label>Select a Date:</label>
            <input
              type="date"
              name="selectedDate"
              value={selectedDate}
              onChange={(e) => this.handleDateChange(e.target.value)}
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
}

export default BookingForm;
