const movieForm = document.getElementById("movieForm");
const movieInput = document.getElementById("movieInput");
const movieList = document.getElementById("movieList");

// todo: implement add movie
movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const movieName = movieInput.value;

    addMovieToList(movieName);
    saveMovieToLocalStorage(movieName);
});

// todo: implement add movie to DOM list
function addMovieToList(movieName) {
    const listItem = document.createElement("li");
    listItem.textContent = movieName

    movieList.appendChild(listItem);
}

// todo: implement store movies to local storage
function saveMovieToLocalStorage(movieName) {
    const storedMoviesJSON = localStorage.getItem("movies");
    
    console.log(storedMoviesJSON);

    console.log(JSON.parse(storedMoviesJSON));

    const storedMovies = JSON.parse(storedMoviesJSON) || [];

    console.log(storedMovies);

    storedMovies.push(movieName);

    console.log(storedMovies);

    localStorage.setItem("movies", JSON.stringify(storedMovies));
}

// todo: implement loading of movies from local storage at page load
window.addEventListener("DOMContentLoaded", () => {
    const storedMoviesJSON = localStorage.getItem("movies");
    const storedMovies = JSON.parse(storedMoviesJSON) || [];
    storedMovies.forEach(element => {
        addMovieToList(element);
    });
});
