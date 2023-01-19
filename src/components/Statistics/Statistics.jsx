import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul>
      <li className="stat-item">Good: {good}</li>
      <li className="stat-item">Neutral: {neutral}</li>
      <li className="stat-item">Bad: {bad}</li>
      <li className="stat-item">Total: {total}</li>
      <li className="stat-item">Positive feedback: {positive} %</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
