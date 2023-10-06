import React, { Component } from 'react';

class BookingManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookedDates: {},
      maxBookingsPerDate: 2,
    };
  }

  addBookedDate = (date) => {
    const { bookedDates } = this.state;

    if (bookedDates[date] && bookedDates[date].length >= this.state.maxBookingsPerDate) {
      alert('Sorry, this date is fully booked.');
    } else {
      this.setState((prevState) => {
        const newBookedDates = { ...prevState.bookedDates };
        if (!newBookedDates[date]) {
          newBookedDates[date] = [];
        }
        newBookedDates[date].push(date);

        return { bookedDates: newBookedDates };
      });
    }
  };

  render() {
    const { bookedDates } = this.state;
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        bookedDates: bookedDates,
        onBookingSubmit: this.addBookedDate,
      });
    });

    return <div>{childrenWithProps}</div>;
  }
}

export default BookingManager;
