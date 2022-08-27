const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
var keyword = location.search.substring(1).split("=");
keyword = keyword[1];

var changingAge = localStorage.getItem("myValueFormat");
// console.log(changingAge);
// var geners = null;
var geners = changingAge;
function myFunctionAge1() {
  // const element = document.getElementById("mostPopularMovie");
  // element.scrollIntoView();
  geners = "without_genres";

  for (let i = 1; i < 100; i++) {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&query=${keyword}&page=${i}&${geners}&include_adult=false`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;
        list.map((item) => {
          if (item.media_type == "tv") {
            const id = item.id;
            const title = item.name;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.first_air_date;
            const year = date.substring(0, 4);

            const movie = `<a href="../select_tv_show/tv_show.html?${id}">
        <div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 style="color: black;" id="titleCard">${title}</h2>
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                          <span id="sty2">${score}K</span>
              <span id="sty3">${year}</span>
            </div>
          </div></a>`;
            document.getElementById("searchResult").innerHTML += movie;
          } else if (item.media_type == "movie") {
            const id = item.id;
            const title = item.title;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.release_date;
            const year = date.substring(0, 4);

            const movie = `<a href="../select_movies/movie.html?${id}">
      <div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 style="color: black;" id="titleCard">${title}</h2>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                          <span id="sty2">${score}K</span>
            <span id="sty3">${year}</span>
          </div>
        </div></a>`;
            document.getElementById("searchResult").innerHTML += movie;
          }
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("searchResult").innerHTML = "";
}

function myFunctionAge2() {
  // const element = document.getElementById("mostPopularMovie");
  // element.scrollIntoView();
  geners = "with_genres=16";

  for (let i = 1; i < 100; i++) {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&query=${keyword}&page=${i}&${geners}&include_adult=false`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;
        list.map((item) => {
          if (item.media_type == "tv") {
            const id = item.id;
            const title = item.name;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.first_air_date;
            const year = date.substring(0, 4);

            const movie = `<a href="../select_tv_show/tv_show.html?${id}">
        <div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 style="color: black;" id="titleCard">${title}</h2>
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              <span id="sty2">${score}K</span>
              <span id="sty3">${year}</span>
            </div>
          </div></a>`;
            for (let n = 0; n < 10; n++) {
              if (item.genre_ids[n] == "16") {
                document.getElementById("searchResult").innerHTML += movie;
              }
            }
          } else if (item.media_type == "movie") {
            const id = item.id;
            const title = item.title;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.release_date;
            const year = date.substring(0, 4);

            const movie = `<a href="../select_movies/movie.html?${id}">
      <div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 style="color: black;" id="titleCard">${title}</h2>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span id="sty2">${score}K</span>
            <span id="sty3">${year}</span>
          </div>
        </div></a>`;
            for (let n = 0; n < 10; n++) {
              if (item.genre_ids[n] == "16") {
                document.getElementById("searchResult").innerHTML += movie;
              }
            }
          }
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("searchResult").innerHTML = "";
}

for (let i = 1; i < 50; i++) {
  fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&query=${keyword}&page=${i}&${geners}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const list = data.results;
      list.map((item) => {
        if (item.media_type == "tv") {
          const id = item.id;
          const title = item.name;
          const score = item.vote_average;
          const genert = item.genre_ids;
          const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
          const date = item.first_air_date;
          const year = date.substring(0, 4);

          const movie = `<a href="../select_tv_show/tv_show.html?${id}">
        <div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 style="color: black;" id="titleCard">${title}</h2>
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              <span id="sty2">${score}K</span>
              <span id="sty3">${year}</span>
            </div>
          </div></a>`;
          // for (let n = 0; n < 10; n++) {
          if (geners == "without_geners" || geners == "") {
            document.getElementById("searchResult").innerHTML += movie;
          } else if (item.genre_ids == "16") {
            document.getElementById("searchResult").innerHTML += movie;
          }
          // }
        } else if (item.media_type == "movie") {
          const id = item.id;
          const title = item.title;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
          const date = item.release_date;
          const year = date.substring(0, 4);

          const movie = `<a href="../select_movies/movie.html?${id}">
      <div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 style="color: black;" id="titleCard">${title}</h2>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span id="sty2">${score}K</span>
            <span id="sty3">${year}</span>
          </div>
        </div></a>`;
          // for (let n = 0; n < 10; n++) {
          // if (item.genre_ids[n] == "16") {
          if (geners == "without_geners" || geners == "") {
            document.getElementById("searchResult").innerHTML += movie;
          } else if (item.genre_ids == "16") {
            document.getElementById("searchResult").innerHTML += movie;
          }
          // }
          // }
        }
      });
    })

    .catch((err) => {
      console.error(err);
    });
}
