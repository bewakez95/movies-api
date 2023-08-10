import React from "react";

function Cards({ currentPosts, handleOnDelete, isError }) {
  // console.log(currentPosts);

  return (
    <>
      {currentPosts.length > 0 &&
        currentPosts.map((receiveData) => (
          <div className="card mt-2" style={{ width: "18rem", margin: "2rem" }}>
            <img src={receiveData.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <div> {receiveData.Title}</div>
                <div>
                  <i className="fa-solid fa-star"></i> {receiveData.imdbRating}
                </div>
                <div>
                  <i className="fa-solid fa-award"></i> {receiveData.Awards}
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <button className="btn btn-success">Awesome</button>
                  <button className="btn btn-warning">Boring</button>
                </div>
                <div className="d-grid">
                  <button className="btn btn-danger" onClick={handleOnDelete}>
                    Remove
                  </button>
                </div>
              </p>
            </div>
          </div>
        ))}
      {isError && (
        <div className="alert alert-warning mt-2" role="alert">
          {/* {console.log(isError)} */}
          Sorry! no movie found
        </div>
      )}
    </>
  );
}

export default Cards;
