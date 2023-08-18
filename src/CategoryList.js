import React, { useEffect, useState } from "react";

function CategoryList({ categoryMovieList, setDisplayList }) {
  useEffect(() => {
    setDisplayList(categoryMovieList);
  }, [categoryMovieList]);

  const filterMovie = (filterBy) => {
    if (filterBy === "all") {
      setDisplayList(categoryMovieList);
    } else {
      const filteredArray = categoryMovieList.filter(
        (categoryMovieList) => categoryMovieList.choice === filterBy
      );
      setDisplayList(filteredArray);
    }
  };
  return (
    <>
      {categoryMovieList.length > 0 && (
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => filterMovie("all")}
            type="button"
            className="btn btn-primary"
          >
            All
          </button>
          <button
            onClick={() => filterMovie("awesome")}
            type="button"
            className="btn btn-success"
          >
            Awesome
          </button>
          <button
            onClick={() => filterMovie("boring")}
            type="button"
            className="btn btn-warning"
          >
            Boring
          </button>
        </div>
      )}
      ;
    </>
  );
}

export default CategoryList;
