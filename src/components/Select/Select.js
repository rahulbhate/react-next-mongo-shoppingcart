import React from 'react';
import PropTypes from 'prop-types';
const Select = (props) => {
  return (
    <div className="form-group">
      <label> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        className="form-control"
        {...props}
        onChange={props.handleChange}
      >
        <option value={props.placeholder} disabled selected>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
              {props.placeholder}
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
