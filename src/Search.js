import axios from "axios";
import React, { useState } from "react";

function Search({ setMovieList, setIsError }) {
  const [form, setForm] = useState("");
  // const [movie, setMovie] = useState({});
  // const [isError, setIsError] = useState(false);
  const handleOnChange = (e) => {
    // console.log(e);
    setForm(e.target.value);
    setIsError(false);
    // console.log(form);
  };
  const omdbApi = "http://www.omdbapi.com/?apikey=fd6a1ab5&s=";

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("s");
      // Make a call using Axios
      const response = await axios.get(omdbApi + form); // form will make dynamic serach in API
      // console.log(response);
      if (response.data.Response) {
        // setMovie(response.data);
        setMovieList(response.data.Search);
        // console.log(response.data.Search);
      } else {
        setMovieList("");
        setIsError(true);
        // setMovie({});
      }
    } catch (e) {
      setMovieList("");

      setIsError(true);
      // setMovie({});
    }

    // axios.get(url) -> this returns a promise so there should be await and
    // if there is await then there needs to be async in function
  };
  return (
    <>
      <form action="" onSubmit={handleOnSubmit} className="row g-3">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Enter a movie name . . . ."
            onChange={handleOnChange}
          />
        </div>
        <div className="col-2 d-grid">
          <button type="submit" className="btn btn-warning">
            <i className="fa-solid fa-magnifying-glass me-3"></i>Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
