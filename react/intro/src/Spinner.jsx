import React from 'react';

// input: props size
//uotput: jsx

const Spinner = (props) => {
  return <span className="spinner" style={{width: props.size, height: props.size}}></span>;
};

export default Spinner;
