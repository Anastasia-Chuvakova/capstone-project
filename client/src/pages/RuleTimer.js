import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const RuleTimer = (props) => {
  return (
    <div>
   <h2>It is: {props.currentTimer}</h2>
      <h1>Current timer:{props.count}</h1>
      <div>
        <Link to={'/endrecord'}>finish early</Link>
      </div>
    </div>
  );
};
export default RuleTimer;