import React, { Component } from 'react';

class BookingManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookedDates: [],
        };
    }


    addBookedDate = (date) => {
        this.setState((prevState) => ({
            bookedDates: [...prevState.bookedDates, date],
        }));
    }

    render() {
        const { bookedDates } = this.state;
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                bookedDates: this.state.bookedDates,
                onBookingSubmit: this.addBookedDate,
            });
        });

        return <div>{childrenWithProps}</div>;
    }
}

export default BookingManager;
