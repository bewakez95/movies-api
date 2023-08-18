import "./style.css";
import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import CategoryList from "./CategoryList";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [categoryMovieList, setCategoryMovieList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [displayList, setDisplayList] = useState([]); //local state

  // const handleOnDelete = (e) => {
  //   e.preventDefault();
  //   setMovieList({});
  // };

  //child is passing type and movie
  function handleOnAdd(movie, type) {
    // console.log(movie);
    const newMovie = { ...movie, choice: type }; //create a movie object(we have already type so renaming it to choice)
    const newArr = movieList.filter((m) => m.imdbID != movie.imdbID);
    setMovieList(newArr);
    setCategoryMovieList([...categoryMovieList, newMovie]);
  }
  //clear movie in awesome and booring section
  function handleOnDelete(remove) {
    const newArr = movieList.filter((m) => m.imdbID != remove.imdbID);
    setMovieList(newArr);
  }
  function handleOnDeleteCat(remove) {
    const newArr = categoryMovieList.filter((m) => m.imdbID != remove.imdbID);
    setCategoryMovieList(newArr);
  }
  // get current post for pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPostsList = [];
  console.log(isError);
  !isError &&
    movieList.length > 0 &&
    (currentPostsList = movieList.slice(indexOfFirstPost, indexOfLastPost));

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <Header />
      <Search setMovieList={setMovieList} setIsError={setIsError} />
      <div className="d-flex justify-content-center">
        <Cards
          // key={imdbID}
          currentPosts={currentPostsList}
          isError={isError}
          handleOnDelete={handleOnDelete}
          handleOnAdd={handleOnAdd}
        />
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={movieList.length}
        paginate={paginate}
      />
      <CategoryList
        categoryMovieList={categoryMovieList}
        setDisplayList={setDisplayList}
      />
      <div className="d-flex justify-content-center flex-wrap">
        <Cards
          handleOnDelete={handleOnDeleteCat}
          // key={imdbID}
          currentPosts={displayList}
        />
      </div>
    </div>
  );
}

export default App;
