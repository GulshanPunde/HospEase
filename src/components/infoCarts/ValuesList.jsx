import React from 'react';

const ValuesList = ({ values }) => (
  <ul className="list-unstyled">
    {values.map((value, index) => (
      <li key={index}>
        <i className="bi bi-check-circle text-success"></i> {value}
      </li>
    ))}
  </ul>
);

export default ValuesList;
