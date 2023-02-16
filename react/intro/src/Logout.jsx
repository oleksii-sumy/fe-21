import React from 'react';
// input: callback fun
//uotput: jsx

const Logout = (props) => {
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
