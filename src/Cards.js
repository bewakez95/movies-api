import React from "react";

function Cards({
  currentPosts,
  handleOnDelete,
  isError,
  handleOnAdd,
  // receiveData,
}) {
  // console.log(currentPosts);
  return (
    <>
      {isError && (
        <div className="alert alert-warning mt-2" role="alert">
          Sorry! no movie found
        </div>
      )}
      {currentPosts.length > 0 &&
        currentPosts.map((receiveData, i) => (
          <div
            key={receiveData.imdbID}
            className="card mt-3"
            style={{ width: "18rem", margin: "2rem" }}
          >
            <img src={receiveData.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <div>
                  {" "}
                  {receiveData.Title} - {receiveData.choice}
                </div>
                <div>
                  <i className="fa-solid fa-calendar-days"></i>{" "}
                  {receiveData.Year}
                </div>
                <div>
                  <i className="fa-solid fa-user-group"></i>
                  {receiveData.Type}
                </div>
                {handleOnAdd && (
                  <>
                    <div className="d-flex justify-content-between mb-1">
                      <button
                        className="btn btn-success"
                        onClick={() => handleOnAdd(receiveData, "awesome")} //to get movie that we need to categorise
                      >
                        Awesome
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleOnAdd(receiveData, "boring")}
                      >
                        Boring
                      </button>
                    </div>
                  </>
                )}
                <div className="d-grid">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(receiveData)}
                  >
                    Remove
                  </button>
                </div>
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Cards;
