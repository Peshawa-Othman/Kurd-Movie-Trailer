// var changingAge = localStorage.getItem("changingAge");
// // console.log(changingAge);
// // var geners = null;
// var geners = changingAge;
// fetch(
//   `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&`,
//   {
//     method: "GET",
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     const list = data.results;

//     list.map((item) => {
//       const id = item.id;
//       const title = item.name;
//       const description = item.overview;
//       const rating = item.vote_average;
//       const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
//       const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;

//       const movie = `<div class="mySlides" id="" >
//         <img id="topimg" class="backgroundImage"
//             src="${backdrop}"
//             alt="cover image">
//         <img src="${poster}"
//             alt="" id="poster">
//         <div id="container">
//             <div id="textContainer">
//                 <h1 id="title">${title}</h1>
//                 <p id="description">${description}</p>
//                 <div id="details">
//                     <ol>
//                         <li class="details_li" id="imdbRating">
//                             <img class="details_logo" id="imdb" src="./2-imdb.png">
//                             ${rating}
//                         </li>
//                     </ol>
//                 </div>
//             </div>
//         </div>
//     </div>`;

//       document.getElementById("slideshowdiv").innerHTML += movie;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// var slideIndex = 0;
// carousel();

// var img = null;

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   x[slideIndex - 1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 2 seconds
// }
var changingAge = localStorage.getItem("myValueFormat");
// console.log(changingAge);
// var geners = null;
var geners = changingAge;

var url = `https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&${geners}`;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    // console.log(response);
    myfunc(response);
    let script = document.createElement("script");
    script.src = "./flickity.pkgd.min.js";
    document.head.appendChild(script);
  }
};
xhttp.open("GET", url, true);
xhttp.send();

var myfunc = function (data) {
  const list = data.results;
  // console.log(list);
  list.map((item) => {
    const id = item.id;
    const title = item.title;
    const description = item.overview;
    const rating = item.vote_average;
    const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
    const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
    const year = item.release_date;

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
};
