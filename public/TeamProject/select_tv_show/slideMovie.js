var id = location.search.substring(1);
// console.log(id);

fetch(
  `https://api.themoviedb.org/3/tv/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((item) => {
    // console.log(item);

    const id = item.id;
    const title = item.name;
    const description = item.overview;
    const rating = item.vote_average;
    const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
    const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
    const year = item.first_air_date;

    const movie = `
            <div class="carousel-cell"  id="" >
              <div id="slideContainer">
              <img src="${backdrop}" alt="" id="sliderBackdrop">
              <img src="${poster}" alt="" id="poster">
                <div id="container">
                  <div id="textContainer">
                    <h1 id="title">${title}</h1>
                    <p id="description">${description}</p>
                    <div id="details">
                      <ol>
                        <li class="details_li" id="imdbRating">
                          <img class="details_logo" id="imdb" src="./2-imdb.png">
                          ${rating}
                        </li>
                        <li class="details_li">
                          <h4>Released Date: ${year}</h4>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    document.getElementById("mySlide").innerHTML += movie;
  });
