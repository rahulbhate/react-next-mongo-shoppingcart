import React from 'react';

const TextArea = ({id, title, name, rows, cols, value, placeholder, ...props}) => (
  <div className="form-group">
    <label className="form-label">{title}</label>
    <textarea
      className="form-control"
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      value={value}
      title={title}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default TextArea;
