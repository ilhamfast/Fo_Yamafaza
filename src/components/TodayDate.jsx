import React from "react";

class TodayDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: this.getCurrentDate(),
    };
  }

  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Formatting month and day to have leading zeros if needed
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div>
        <p>{this.state.currentDate}</p>
      </div>
    );
  }
}

export default TodayDate;
