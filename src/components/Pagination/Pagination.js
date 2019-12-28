import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, ...props }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log({ ...props });
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <div className="page-link" onClick={() => paginate(number)}>
                {number}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
