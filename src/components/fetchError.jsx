import React from "react";
import PropTypes from "prop-types";

export const FetchError = ({ message, onRetry }) => (
  <div>
    <p>{message}</p>
    <button onClick={onRetry}>retry</button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
};
