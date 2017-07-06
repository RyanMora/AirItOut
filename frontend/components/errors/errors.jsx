import React from 'react';

const Errors = ({errors}) => {
  if (typeof errors[0] === 'undefined') {
    return <p></p>;
  } else if (typeof errors[0] === 'string') {
    return (
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  } else {
    return (
      <ul>
        {errors[0].map((error, idx) => <li key={idx} id="error">{error}</li>)}
      </ul>
    );
  }
};

export default Errors;
