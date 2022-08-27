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
var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");

const firebaseConfig = {
  apiKey: "AIzaSyBtBegQtuB_TcnIDQcIyUynWuOPmZkpfvQ",
  authDomain: "kurd-movie-trailer.firebaseapp.com",
  projectId: "kurd-movie-trailer",
  storageBucket: "kurd-movie-trailer.appspot.com",
  messagingSenderId: "557149530646",
  appId: "1:557149530646:web:013ea41fe86c927a652337",
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;
var id = location.search.substring(1);
// var ss = console.log(id);
var v = false;

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
var keys = [];
fetch(
  `https://api.themoviedb.org/3/tv/${id}/videos?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const list = data.results;
    list.map((item) => {
      keys.push(item.id);
      var trailer = "n/a";
      if (item.id == keys[0]) {
        trailer = "https://www.youtube.com/embed/" + item.key;
        // console.log(trailer);

        document.getElementById(
          "videoContainer"
        ).innerHTML += `<iframe id="ytplayer" width="560" height="315" src=${trailer}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`;
      }
    });
  });

fetch(
  `https://api.themoviedb.org/3/tv/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    var list = data.genres;
    const last_air_date = data.last_air_date;
    const genres = data.genres;
    var genre = "";
    const county = data.production_countries;
    var country = "";
    const spoken = data.spoken_languages;
    var spokenlan = "";
    const created_by = data.created_by;
    var created = "";

    genres.forEach((element) => {
      genre += element["name"] + ", ";
    });
    genre = genre.substring(0, genre.length - 2);

    created_by.forEach((element) => {
      created += element["name"];
    });

    county.forEach((element) => {
      country += element["name"];
    });

    spoken.forEach((element) => {
      spokenlan += element["english_name"] + ", ";
    });
    spokenlan = spokenlan.substring(0, spokenlan.length - 2);

    // list.map((item) => {
    document.getElementById(
      "genres"
    ).innerHTML += `<div id="list"><span id="released">Released: </span><span id="sp">${last_air_date}</span></br></br>
                                       <span id="released">Genre: </span><span id="sp">${genre}</span></br></br>
                                       <span id="released">Original language: </span><span id="sp">${data.original_language}</span></br></br>
                                       <span id="released">Created by: </span><span id="sp">${created}</span></br></br>
                                       <span id="released">Country: </span><span id="sp">${country}</span></br></br>
                                       <span id="released">Spoken languages: </span><span id="sp">${spokenlan}</span></br></br>
                                       <span id="released">Number of seasons: </span><span id="sp">${data.number_of_seasons}</span></br></br>
                                       <span id="released">Number of episodes: </span><span id="sp">${data.number_of_episodes}</span></br></br>
                                       <button id="bb">Favourite <i id="heart" class="fa fa-heart" aria-hidden="true"></i></button></br></br>
        </div>`;
    // });

    firestore
      .collection("userList")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().email == myemail &&
            doc.data().password == mypassword &&
            doc.data().userName == myuserName &&
            doc.data().age == format
          ) {
            emaillogin = doc.data().email;
            userNamelogin = doc.data().userName;
            passwordlogin = doc.data().password;

            for (let i = 0; i < doc.data().FID2.length; i++) {
              if (doc.data().FID2[i] == data.id) {
                document.getElementById("heart").style.color = "red";
              } else {
                document.getElementById("heart").style.color = "black";
              }
            }
          }
        });
      });

    var submitButton = document.getElementById("bb");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      var f = [];
      var dataID = data.id;
      // console.log(dataID);
      var emaillogin = null;
      var userNamelogin = null;
      var passwordlogin = null;

      firestore
        .collection("userList")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              doc.data().email == myemail &&
              doc.data().password == mypassword &&
              doc.data().userName == myuserName &&
              doc.data().age == format
            ) {
              emaillogin = doc.data().email;
              userNamelogin = doc.data().userName;
              passwordlogin = doc.data().password;
              for (let i = 0; i < doc.data().FID2.length; i++) {
                if (doc.data().FID2[i] == dataID) {
                  var items = doc.data().FID2[i];
                  var i2 = i;
                }
              }
              if (items == dataID) {
                f = doc.data().FID2;
                f.splice(i2, 1);
                // console.log(`${doc.id} => ${doc.data().email}`);
                firestore
                  .collection("userList")
                  .doc(doc.id)
                  .update({ FID2: f })
                  .then(() => {
                    document.getElementById("heart").style.color = "black";
                    // alert("The movie removed of faivourete");
                  })
                  .then(() => {
                    // window.location.reload();
                  });
              } else {
                f = doc.data().FID2;
                f.push(dataID);
                // console.log(`${doc.id} => ${doc.data().email}`);
                firestore
                  .collection("userList")
                  .doc(doc.id)
                  .update({ FID2: f })
                  .then(() => {
                    document.getElementById("heart").style.color = "red";
                    // alert("The movie added to faivourete");
                  })
                  .then(() => {
                    // window.location.reload();
                  });
              }
            }
          });
        })
        .then(() => {
          if (
            passwordlogin == null &&
            emaillogin == null &&
            userNamelogin == null
          ) {
            alert("you should have acount to active faivourete");
          }
        });
    });
  });
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var emaile = null;
var passwordp = null;
var userNameu = null;
var agea = null;

firestore.settings({ timestampsInSnapshots: true, merge: true });

var logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  firestore
    .collection("userList")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().email == myemail &&
          doc.data().password == mypassword &&
          doc.data().userName == myuserName &&
          doc.data().age == format
        ) {
          emaile = doc.data().email;
          passwordp = doc.data().password;
          userNameu = doc.data().userName;
          agea = doc.data().age;
          // console.log(`${doc.id} => ${doc.data().email}`);
        }
      });
    })
    .then(() => {
      if (
        emaile == myemail &&
        passwordp == mypassword &&
        userNameu == myuserName &&
        agea == format
      ) {
        if (confirm("LogOut of your acounnt!") == true) {
          localStorage.setItem("myValueUserName", "");
          localStorage.setItem("password", "");
          localStorage.setItem("repeatPassword", "");
          localStorage.setItem("myValueEmail", "");
          localStorage.setItem("myValueFormat", "");
          window.location.replace("../login/login.html");
        } else {
          return false;
        }
      } else {
        alert("You are not login to logut!!!");
      }
    })
    .then(() => {
      // window.location.replace("../signUp/signUp.html");
    });
});
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var r1 = null;
var r2 = null;
var r3 = null;
firestore
  .collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName
      ) {
        // console.log(`${doc.id} => ${doc.data().email}`);
        r1 = doc.data().userName;
        r2 = doc.data().email;
        r3 = doc.data().password;
        // console.log(r1);
      } else {
        // console.log(doc.data().password);
      }
    });
  })
  .then(() => {
    if (r1 != null && r2 != null && r3 != null) {
      document.getElementById("signUpForHiadenOrShow").style.display = "none";
    } else {
      document.getElementById("signUpForHiadenOrShow").style.display = "block";
    }
  });
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var r4 = null;
var r5 = null;
var r6 = null;
firestore
  .collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName
      ) {
        // console.log(`${doc.id} => ${doc.data().email}`);
        r4 = doc.data().userName;
        r5 = doc.data().email;
        r6 = doc.data().password;
        // console.log(r6);
      } else {
        // document.getElementById("loginForHiadenOrShow").style.display = "block";
      }
    });
  })
  .then(() => {
    if (r4 != null && r5 != null && r6 != null) {
      document.getElementById("loginForHiadenOrShow").style.display = "none";
    } else {
      document.getElementById("loginForHiadenOrShow").style.display = "block";
    }
  });
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
var r7 = null;
var r8 = null;
var r9 = null;
firestore
  .collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName
      ) {
        // console.log(`${doc.id} => ${doc.data().email}`);
        r7 = doc.data().userName;
        r8 = doc.data().email;
        r9 = doc.data().password;
        // console.log(r9);
      } else {
        // document.getElementById("logutForHiadenOrShow").style.display = "none";
      }
    });
  })
  .then(() => {
    if (r7 != null && r8 != null && r9 != null) {
      document.getElementById("logutForHiadenOrShow").style.display = "block";
    } else {
      document.getElementById("logutForHiadenOrShow").style.display = "none";
    }
  });
