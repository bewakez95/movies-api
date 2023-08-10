import React from "react";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    console.log(i);
    pageNumbers.push(i);
  }
  //   console.log(pageNumbers);

  return (
    <nav aria-label="Page navigation example mt-3">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              onClick={() => {
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
