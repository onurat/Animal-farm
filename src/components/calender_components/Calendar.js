import React, { Component } from 'react';
import './Calendar.css';

class Heading extends Component {
  render() {
    const { date, changeMonth, resetDate } = this.props;

    const formattedMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const formattedYear = date.getFullYear();

    return (
      <nav className="calendar--nav">
        <a href="#" onClick={() => changeMonth(date.getMonth() - 1)}>&#8249;</a>
        <h1 onClick={() => resetDate()}>
          {formattedMonth} <small>{formattedYear}</small>
        </h1>
        <a href="#" onClick={() => changeMonth(date.getMonth() + 1)}>&#8250;</a>
      </nav>
    );
  }
}

class Day extends Component {
  render() {
    const { currentDate, date, startDate, endDate, onClick, isBooked, selectedDate } = this.props;
    let className = [];

    const isSameDay = date.toDateString() === currentDate.toDateString();
    const isStartDay = date.toDateString() === startDate.toDateString();
    const isBetween = date > startDate && date < endDate;
    const isEndDay = date.toDateString() === endDate.toDateString();
    const isMuted = date.getMonth() !== currentDate.getMonth();

    if (isSameDay) {
      className.push('active');
    }

    if (isStartDay) {
      className.push('start');
    }

    if (isBetween) {
      className.push('between');
    }

    if (isEndDay) {
      className.push('end');
    }

    if (isMuted) {
      className.push('muted');
    }

    if (isBooked) {
      className.push('booked');
    }

    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

    return (
      <span
        onClick={() => onClick(date)}
        href="#"
        role="button"
        tabIndex="0"
        currentDate={date}
        className={className.join(' ') + (isSelected ? ' selected' : '')}
      >
        {date.getDate()}
      </span>
    );
  }
}

class Days extends Component {
  render() {
    const { date, startDate, endDate, onClick, bookedDates, selectedDate } = this.props;
    const thisDate = new Date(date);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    const previousMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let days = [];
    let labels = [];

    for (let i = 1; i <= 7; i++) {
      labels.push(
        <span className="label">
          {new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date().setDate(i))}
        </span>
      );
    }

    for (let i = firstDayDate.getDay(); i > 0; i--) {
      previousMonth.setDate(previousMonthDays - i + 1);

      days.push(
        <Day
          key={previousMonth.toDateString()}
          onClick={(date) => onClick(date)}
          href="#"
          role="button"
          tabIndex="0"
          currentDate={date}
          date={new Date(previousMonth)}
          startDate={startDate}
          endDate={endDate}
          isBooked={bookedDates.includes(previousMonth.toDateString())}
          selectedDate={selectedDate}
        />
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      thisDate.setDate(i);

      days.push(
        <Day
          key={thisDate.toDateString()}
          onClick={(date) => onClick(date)}
          href="#"
          role="button"
          tabIndex="0"
          currentDate={date}
          date={new Date(thisDate)}
          startDate={startDate}
          endDate={endDate}
          isBooked={bookedDates.includes(thisDate.toDateString())}
          selectedDate={selectedDate}
        />
      );
    }

    const daysCount = days.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
      nextMonth.setDate(i);
      days.push(
        <Day
          key={nextMonth.toDateString()}
          onClick={(date) => onClick(date)}
          href="#"
          role="button"
          tabIndex="0"
          currentDate={date}
          date={new Date(nextMonth)}
          startDate={startDate}
          endDate={endDate}
          isBooked={bookedDates.includes(nextMonth.toDateString())}
          selectedDate={selectedDate}
        />
      );
    }

    return (
      <nav className="calendar--days">
        {labels.concat()}
        {days.concat()}
      </nav>
    );
  }
}

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      startDate: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
      endDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    };
  }

  resetDate() {
    this.setState({
      date: new Date(),
    });
  }

  changeMonth(month) {
    const { date } = this.state;
    date.setMonth(month);

    this.setState({
      date,
    });
  }

  render() {
    return (
      <div className="calendar--container">
        <Heading
          date={this.state.date}
          changeMonth={(month) => this.changeMonth(month)}
          resetDate={() => this.resetDate()}
        />
        <Days
          date={this.state.date}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onClick={(date) => console.log('Clicked on date:', date)}
          bookedDates={this.props.bookedDates}
          selectedDate={this.props.selectedDate}
        />
      </div>
    );
  }
}

export default Calendar;
