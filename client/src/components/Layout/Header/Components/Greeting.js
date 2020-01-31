import React from 'react';
import Moment from 'react-moment';

const date = new Date();
const curHr = date.getHours();
let greetingMsg;
if (curHr < 12) { greetingMsg = 'Good Morning'; }
else if (curHr < 18) { greetingMsg = 'Good Afternoon'; }
else { greetingMsg = 'Good Evening'; }

const Greeting = ({ style, name }) => {
  return (
    <div className={style}>
      <strong>Hi {name}, </strong>{greetingMsg} <br />
      <Moment format='ddd, MMM Do YYYY' date={date} />
    </div>
  )
}

export default Greeting
