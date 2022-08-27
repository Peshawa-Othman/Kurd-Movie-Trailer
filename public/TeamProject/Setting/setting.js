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
// document.getElementById("age").innerHTML = format;

if (format == "with_genres=16") {
  document.getElementById("age").innerHTML = "Child";
} else if (format == "without_genres") {
  document.getElementById("age").innerHTML = "Old";
}
document.getElementById("theemail").innerHTML = myemail;
document.getElementById("name").innerHTML = myuserName;
document.getElementById("password").innerHTML = mypassword;

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const inputs = document.querySelectorAll(".input");
function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
/////////////////////////////////////////////////////////////
var userName = document.getElementById("userName").value;
var email = document.getElementById("email").value;
var password = document.getElementById("inputPassword").value;
var repeatPassword = document.getElementById("repeatPassword").value;
var age = document.getElementById("format").value;
var submitButton = document.getElementById("submit");

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

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  ////////////////////////////////////////////////////////
  if (document.getElementById("userName").value == "") {
    document.getElementById("rooleName").innerHTML =
      "UserName should not be empty";
  } else if (document.getElementById("userName").value.length <= 4) {
    document.getElementById("rooleName").innerHTML =
      "UserName should be more than 4 character";
  } else {
    document.getElementById("rooleName").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("email").value == "") {
    document.getElementById("rooleEmail").innerHTML =
      "Email should not be empty";
  } else if (document.getElementById("email").value == "@") {
    document.getElementById("rooleEmail").innerHTML = "It is not Email";
  } else {
    document.getElementById("rooleEmail").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("format").value == "Choose an Age") {
    document.getElementById("selectedFormat").innerHTML = "didnt selected";
  } else {
    document.getElementById("selectedFormat").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("inputPassword").value == "") {
    document.getElementById("roolePassword").innerHTML =
      "Password should not be empty";
  } else if (document.getElementById("inputPassword").value.length <= 8) {
    document.getElementById("roolePassword").innerHTML =
      "Password should be more than 8 character";
  } else {
    document.getElementById("roolePassword").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("repeatPassword").value == "") {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should not be empty";
  } else if (
    document.getElementById("repeatPassword").value !=
    document.getElementById("inputPassword").value
  ) {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should be same us a password";
  } else if (document.getElementById("repeatPassword").value.length <= 8) {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should be more than 8 character";
  } else if (
    document.getElementById("repeatPassword").value ==
      document.getElementById("inputPassword").value &&
    document.getElementById("email").value != "" &&
    document.getElementById("userName").value != "" &&
    document.getElementById("userName").value.length >= 4 &&
    document.getElementById("format").value != "Choose an Age" &&
    document.getElementById("inputPassword").value.length >= 8 &&
    document.getElementById("repeatPassword").value.length >= 8
  ) {
    document.getElementById("rooleRepeatPassword").innerHTML = "";

    var n = document.getElementById("userName").value;
    console.log(n);
    var em = document.getElementById("email").value;
    console.log(em);
    var p = document.getElementById("inputPassword").value;
    console.log(p);
    var rP = document.getElementById("repeatPassword").value;
    console.log(rP);
    var a = document.getElementById("format").value;
    console.log(a);

    var userData = {
      userName: n,
      email: em,
      password: p,
      repeatPassword: rP,
      age: a,
    };
    // console.log(userData);
    firestore
      .collection("userList")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data().email}`);
          if (
            doc.data().email == myemail &&
            doc.data().password == mypassword &&
            doc.data().userName == myuserName &&
            doc.data().age == format
          ) {
            // console.log(`${doc.id} => ${doc.data().email}`);
            firestore.collection("userList").doc(doc.id).update(userData);
          }
        });
      })
      .then(() => {
        firestore
          .collection("userList")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data().email}`);
              if (
                doc.data().email == em &&
                doc.data().password == p &&
                doc.data().userName == n &&
                doc.data().age == a
              ) {
                // console.log(`${doc.id} => ${doc.data().email}`);
                firestore.collection("userList").doc(doc.id).update(userData);
                document.getElementById("theemail").innerHTML = em;
                document.getElementById("name").innerHTML = n;
                document.getElementById("password").innerHTML = p;
                document.getElementById("age").innerHTML = a;
                localStorage.setItem("myValueUserName", "");
                localStorage.setItem("password", "");
                localStorage.setItem("repeatPassword", "");
                localStorage.setItem("myValueEmail", "");
                localStorage.setItem("myValueFormat", "");
                alert("The update is completed");
                window.location.replace("../login/login.html");
              }
            });
          });
      });
  } else {
    return true;
  }
  ////////////////////////////////////////////////////////
});
//////////////////////////////////////////////////////////////
/// eye for showing password and hide it
function myFunction() {
  var password = document.getElementById("inputPassword");
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");

  if (password.type === "password") {
    password.type = "text";
    hide1.style.display = "block";
    hide2.style.display = "none";
  } else {
    password.type = "password";
    hide1.style.display = "none";
    hide2.style.display = "block";
  }
}

function myFunction2() {
  var repeatPassword = document.getElementById("repeatPassword");
  var repeathide1 = document.getElementById("repeathide1");
  var repeathide2 = document.getElementById("repeathide2");

  if (repeatPassword.type === "password") {
    repeatPassword.type = "text";
    repeathide1.style.display = "block";
    repeathide2.style.display = "none";
  } else {
    repeatPassword.type = "password";
    repeathide1.style.display = "none";
    repeathide2.style.display = "block";
  }
}
//////////////////////////////////////////////////////////////

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
