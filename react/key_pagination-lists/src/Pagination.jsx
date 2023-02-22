import React from 'react';

//state
// current page
//toggleNextBtn
//togglePrevtBtn
//usersCount
//usersPerpage


const Pagination = () => {


  return (
    <div className="pagination">
      <button className="btn">←</button>
      <span className="pagination__page">1</span>
      <button className="btn">→</button>
    </div>
  );
};
export default Pagination;
