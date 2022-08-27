var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
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
var d = window.innerWidth;

window.onload = function () {
  CheckNav();
};
window.onscroll = function () {
  CheckNav();
};
//Navigation
var nav = document.getElementById("nav");
function CheckNav() {
  var range = window.scrollY * 0.0025;
  nav.style.backgroundColor = `rgb(20,20,20,${range})`;
  if (window.scrollY >= 400) {
    range = 255;
  }
}

var changingAge = localStorage.getItem("myValueFormat");
console.log(changingAge);
// var geners = null;
var geners = changingAge;
function myFunctionAge1() {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
  const element = document.getElementById("mostPopularMovie");
  element.scrollIntoView();
  geners = "without_genres";

  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.title;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.release_date;
          const year = date.substr(0, 4);

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
          document.getElementById("mostPopularMovie").innerHTML += movie;
        });
      });
    // .catch((err) => {
    //   console.error(err);
    // });
  }
  document.getElementById("mostPopularMovie").innerHTML = "";
  //topPopelarTvShow
  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
          const date = item.first_air_date;
          const year = date.substr(0, 4);

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
          document.getElementById("mostPopularTvShow").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("mostPopularTvShow").innerHTML = "";

  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.title;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.release_date;
          const year = date.toString().substr(0, 4);

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
          document.getElementById("latestMovie").innerHTML += movie;
        });
      })
      .catch((err) => {
        // console.error(err);
      });
  }
  document.getElementById("latestMovie").innerHTML = "";
  //latestTvShow
  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.first_air_date;
          const year = date.substr(0, 4);

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
          document.getElementById("latestTvShow").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("latestTvShow").innerHTML = "";
}

function myFunctionAge2() {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
  const element = document.getElementById("mostPopularMovie");
  element.scrollIntoView();
  geners = "with_genres=16";

  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.title;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.release_date;
          const year = date.substr(0, 4);

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
          document.getElementById("mostPopularMovie").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("mostPopularMovie").innerHTML = "";
  //topPopelarTvShow
  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
          const date = item.first_air_date;
          const year = date.substr(0, 4);

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
          document.getElementById("mostPopularTvShow").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("mostPopularTvShow").innerHTML = "";

  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.title;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.release_date;
          const year = date.toString().substr(0, 4);

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
          document.getElementById("latestMovie").innerHTML += movie;
        });
      })
      .catch((err) => {
        // console.error(err);
      });
  }
  document.getElementById("latestMovie").innerHTML = "";
  //latestTvShow
  for (let i = 1; i < 2; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const list = data.results;

        list.map((item) => {
          const id = item.id;
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
          const date = item.first_air_date;
          const year = date.substr(0, 4);

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
          document.getElementById("latestTvShow").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("latestTvShow").innerHTML = "";
}
//topPopelarMovie
for (let i = 1; i < 2; i++) {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(async (data) => {
      // console.log(data);
      const list = data.results;

      list.map((item) => {
        const id = item.id;
        const title = item.title;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
        const date = item.release_date;
        const year = date.substr(0, 4);

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
        document.getElementById("mostPopularMovie").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

//topPopelarTvShow
for (let i = 1; i < 2; i++) {
  fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const list = data.results;

      list.map((item) => {
        const id = item.id;
        const title = item.name;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
        const date = item.first_air_date;
        const year = date.substr(0, 4);

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
        document.getElementById("mostPopularTvShow").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

//latestMovie
for (let i = 1; i < 2; i++) {
  fetch(
    // `https://api.themoviedb.org/3/discover/movie?api_key=717eacf2852518ed1f0a438d848f9334&include_adult=true&language=en-US&sort_by=popularity.desc&with_keywords=2426`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const list = data.results;

      list.map((item) => {
        const id = item.id;
        const title = item.title;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
        const date = item.release_date;
        const year = date.toString().substr(0, 4);

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
        document.getElementById("latestMovie").innerHTML += movie;
      });
    })
    .catch((err) => {
      // console.error(err);
    });
}

//latestTvShow
for (let i = 1; i < 2; i++) {
  fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const list = data.results;

      list.map((item) => {
        const id = item.id;
        const title = item.name;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
        const date = item.first_air_date;
        const year = date.substr(0, 4);

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
        document.getElementById("latestTvShow").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
