import "./style.css";
import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const handleOnDelete = (e) => {
    e.preventDefault();
    setMovieList({});
  };
  // get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPostsList = movieList.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(currentPostsList);

  // console.log(movieList);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      {/* {console.log(currentPostsList)} */}

      <Header />
      <Search setMovieList={setMovieList} setIsError={setIsError} />
      <div className="d-flex justify-content-center">
        <Cards
          currentPosts={currentPostsList}
          isError={isError}
          handleOnDelete={handleOnDelete}
        />
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={movieList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
