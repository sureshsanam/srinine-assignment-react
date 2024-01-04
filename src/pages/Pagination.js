import React from 'react';
import './Pagination.css'; // Import your CSS file for pagination styles

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map(number => (
        <button key={number} className="pagination-button" onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
