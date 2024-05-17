document.addEventListener("DOMContentLoaded", function () {
    fetchSeries();
    fetchMovies();
});

async function fetchSeries() {
    try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        const series = response.data;
        console.log(response);
        const seriesContainer = document.getElementById('series-container');
        series.slice(0, 8).forEach(show => {
            const seriesItem = document.createElement('div');
            let image = show.image.original;
            let urlP = show.url;
            console.log(image);
            seriesItem.innerHTML = `<h3>${show.name}</h3><p>${show.language}</p><p>Rating ${show.rating.average}</p><p>${show.genres}</p>`;
            const poster = `
            <div>
                <a href="${urlP}"><img src="${image}" />
                </div>
            `
            seriesItem.innerHTML += poster
            seriesContainer.appendChild(seriesItem);
        });
    } catch (error) {
        console.error('Error fetching series:', error);
    }
}

async function fetchMovies() {
    try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        const movies = response.data;
        const moviesContainer = document.getElementById('movies-container');
        movies.slice(9, 21).forEach(movie => {
            const movieItem = document.createElement('article');
            let imgg = movie.image.original;
            let urlM = movie.url
            console.log(imgg);
            console.log(urlM);
            movieItem.innerHTML = `<h3>${movie.name}</h3><p>${movie.language}</p><p>Rating ${movie.rating.average}</p>`;
            const poster2 = `
            <div>
                <a href="${urlM}"><img src="${imgg}" />
                </div>
            `
            movieItem.innerHTML += poster2
            moviesContainer.appendChild(movieItem);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}