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
// let userName = document.getElementById("userName").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let repeatPassword = document.getElementById("repeatPassword").value;
// let age = document.getElementById("format").value;
let submitButton = document.getElementById("submit");

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

const db = firestore.collection("userList");

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
  if (document.getElementById("password").value == "") {
    document.getElementById("roolePassword").innerHTML =
      "Password should not be empty";
  } else if (document.getElementById("password").value.length <= 8) {
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
    document.getElementById("password").value
  ) {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should be same us a password";
  } else if (document.getElementById("repeatPassword").value.length <= 8) {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should be more than 8 character";
  } else if (
    document.getElementById("repeatPassword").value ==
      document.getElementById("password").value &&
    document.getElementById("email").value != "" &&
    document.getElementById("userName").value != "" &&
    document.getElementById("userName").value.length >= 4 &&
    document.getElementById("format").value != "Choose an Age" &&
    document.getElementById("password").value.length >= 8 &&
    document.getElementById("repeatPassword").value.length >= 8
  ) {
    // document.getElementById("rooleRepeatPassword").innerHTML = "";

    // let submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (e) => {
    // e.preventDefault();

    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let age = document.getElementById("format").value;
    db.doc()
      .set({
        FID: [],
        FID2: [],
        userName: userName,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
        age: age,
      })
      .then(() => {
        alert(
          "Your form has been submitted successfully waiting for login to the homepage..."
        );
        localStorage.setItem("myValueUserName", userName);
        localStorage.setItem("password", password);
        localStorage.setItem("repeatPassword", repeatPassword);
        localStorage.setItem("myValueEmail", email);
        localStorage.setItem("myValueFormat", age);
        // document.getElementById("userName").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("password").value = "";
        // document.getElementById("repeatPassword").value = "";
      })
      .then(() => {
        window.location.replace("../home/index.html");
      })
      .catch((error) => {
        console.log(error);
      });
    // window.location.href = "../home/index.html";
    // });
  } else {
    return false;
  }
  ////////////////////////////////////////////////////////
});
//////////////////////////////////////////////////////////////
/// eye for showing password and hide it
function myFunction() {
  var password = document.getElementById("password");
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
////////////////////////////////////////////////////////////////

var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");
var myrepeatPassword = localStorage.getItem("repeatPassword");

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
