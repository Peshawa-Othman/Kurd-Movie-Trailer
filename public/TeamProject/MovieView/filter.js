var changingAge = localStorage.getItem("changingAge");
// console.log(changingAge);

var achgeners = 16;
var geners = "without_geners";

var type = null;
var chooosemovie = false;
var chooosetv = false;

var ifMovieOrTvshowSelect = false;
var ifYearSelect = false;
var ifGenerSelect = false;

function mymovie() {
  type = "movie";
  chooosemovie = true;
  chooosetv = false;
  ifMovieOrTvshowSelect = true;
}

function mytv() {
  type = "tv";
  chooosetv = true;
  chooosemovie = false;
  ifMovieOrTvshowSelect = true;
}

var YEARS = 0;
var YEARSALL = 0;
var YEARSOLDER = 0;

function myallfilter() {
  if (document.getElementById("allReleased").checked == true) {
    YEARSALL = 2022;
    YEARS = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARSALL);
  } else if (document.getElementById("2022").checked == true) {
    YEARS = 2022;
    YEARSALL = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARS);
  } else if (document.getElementById("2021").checked == true) {
    YEARS = 2021;
    YEARSALL = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARS);
  } else if (document.getElementById("2020").checked == true) {
    YEARS = 2020;
    YEARSALL = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARS);
  } else if (document.getElementById("2019").checked == true) {
    YEARS = 2019;
    YEARSALL = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARS);
  } else if (document.getElementById("2018").checked == true) {
    YEARS = 2018;
    YEARSALL = 0;
    YEARSOLDER = 0;
    ifYearSelect = true;
    // console.log(YEARS);
  } else if (document.getElementById("older").checked == true) {
    YEARSOLDER = 2017;
    YEARSALL = 0;
    YEARS = 0;
    ifYearSelect = true;
    // console.log(YEARSOLDER);
  }
}

var theGenre = 0;
var theAllGenre = 0;

function myallfiltermovietv() {
  if (document.getElementById("allGenre").checked == true) {
    theAllGenre = "theAllGenre";
    theGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Action").checked == true) {
    theGenre = 28;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Comedy").checked == true) {
    theGenre = 35;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Drama").checked == true) {
    theGenre = 18;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Family").checked == true) {
    theGenre = 10751;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Romance").checked == true) {
    theGenre = 10749;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("History").checked == true) {
    theGenre = 36;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("crime").checked == true) {
    theGenre = 80;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("ScienceFiction").checked == true) {
    theGenre = 878;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Adventure").checked == true) {
    theGenre = 12;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("fantasy").checked == true) {
    theGenre = 14;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("Horror").checked == true) {
    theGenre = 27;
    theAllGenre = 0;
    ifGenerSelect = true;
  } else if (document.getElementById("war").checked == true) {
    theGenre = 10752;
    theAllGenre = 0;
    ifGenerSelect = true;
  }
}
function myfilter() {
  document.getElementById("boxFilter").style.display = "flex";
  document.getElementById("buttomfilterforchoosing").style.display = "none";
}

function myfilterClose() {
  document.getElementById("boxFilter").style.display = "none";
  document.getElementById("buttomfilterforchoosing").style.display = "block";
}

document.getElementById("hidenfilter").style.display = "none";
document.getElementById("hiden").style.display = "block";

fltuer.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    ifMovieOrTvshowSelect == true &&
    ifYearSelect == true &&
    ifGenerSelect == true
  ) {
    document.getElementById("hiden").style.display = "none";
    document.getElementById("hidenfilter").style.display = "block";
  }

  for (let i = 1; i < 5; i++) {
    if (chooosemovie == true) {
      // console.log(chooosemovie);
      fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=717eacf2852518ed1f0a438d848f9334&sort_by=popularity.desc&${geners}&page=${i}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const list = data.results;
          list.map((item) => {
            const id = item.id;
            const title = item.title;
            const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
            const date = item.release_date;
            const year = date.toString().substr(0, 4);
            const genress = item.genre_ids;

            const movie = `<a href="../select_movies/movie.html?${id}">
                      <div class="movie">
                          <img class="posters" src="${poster}" alt="Poster">
                          <div id="textContainer">
                          <h2 style="color: black" id="titleCard">${title}</h2>
                            <i id="sty1" class="fa fa-clock-o"></i>
                            <span id="sty2">2:23</span>
                            <span id="sty3">${year}</span>
                          </div>
                        </div></a>`;
            if (genress.includes(achgeners) || geners == "without_geners") {
              if (theAllGenre == "theAllGenre") {
                if (year == YEARS) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSALL) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSOLDER) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                }
              } else if (genress.includes(theGenre)) {
                if (year == YEARS) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSALL) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSOLDER) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                }
              }
            }
          });
        });
    }

    if (chooosetv == true) {
      // console.log(chooosetv);
      fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&sort_by=popularity.desc&page=${i}&${geners}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const list = data.results;
          list.map((item) => {
            const id = item.id;
            const title = item.name;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.first_air_date;
            const year = date.substr(0, 4);
            var genress = item.genre_ids;

            const movie = `<a href="../select_tv_show/tv_show.html?${id}">
            <div class="movie">
                <img class="posters" src="${poster}" alt="Poster">
                <div id="textContainer">
                  <h2 style="color: black;" id="titleCard">${title}</h2>
                  <i id="sty1" class="fa fa-clock-o"></i>
                  <span id="sty2">2:24</span>
                  <span id="sty3">${year}</span>
                </div>
              </div></a>`;
            if (genress.includes(achgeners) || geners == "without_geners") {
              if (theAllGenre == "theAllGenre") {
                if (year == YEARS) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSALL) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSOLDER) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                }
              } else if (genress.includes(theGenre)) {
                if (year == YEARS) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSALL) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                } else if (year <= YEARSOLDER) {
                  document.getElementById("mymoviefilter").innerHTML += movie;
                }
              }
            }
          });
        });
    }
  }
  if (
    ifMovieOrTvshowSelect == true &&
    ifYearSelect == true &&
    ifGenerSelect == true
  ) {
    // console.log(true);
    if (chooosetv == true) {
      document.getElementById("mymoviefilter").innerHTML = "";
    }
    if (chooosemovie == true) {
      document.getElementById("mymoviefilter").innerHTML = "";
    }
    document.getElementById("boxFilter").style.display = "none";
    document.getElementById("buttomfilterforchoosing").style.display = "block";
  }
});
