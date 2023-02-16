import React from 'react';
// input: callback fun
//uotput: jsx

const Logout = () => {
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
