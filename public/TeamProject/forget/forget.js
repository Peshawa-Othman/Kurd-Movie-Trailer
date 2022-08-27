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
let submitButton = document.getElementById("send");
var userEmailforget = document.getElementById("email").value;

var submitForget = false;

document.getElementById("submit").style.display = "none";
document.getElementById("display").style.display = "none";

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
  if (document.getElementById("email").value == "") {
    document.getElementById("rooleEmail").innerHTML =
      "Email should not be empty";
  } else if (document.getElementById("email").value == "@") {
    document.getElementById("rooleEmail").innerHTML = "It is not Email";
  } else {
    document.getElementById("rooleEmail").innerHTML = "";
    const auth = firebase.auth();
    // console.log(auth);
    auth.useDeviceLanguage();
    var userEmail = "Peshawa.1914215@gmail.com";
    auth
      .sendPasswordResetEmail(userEmail)
      .then(() => {
        alert("Password Reset Email Sent Successfully!");
        document.getElementById("send").style.display = "none";
        document.getElementById("submit").style.display = "block";
        document.getElementById("display").style.display = "block";
      })
      .catch((error) => {
        alert("same thing wrong of your email..!!!!");
      });
  }
});

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// var submitButtonforupdate = document.getElementById("submit");

// submitButtonforupdate.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (document.getElementById("userName").value == "") {
//     document.getElementById("rooleName").innerHTML =
//       "The numbers should not be empty";
//   } else if (document.getElementById("userName").value.length < 6) {
//     document.getElementById("rooleName").innerHTML =
//       "The numbers should be 6 character";
//   } else if (document.getElementById("userName").value.length > 6) {
//     document.getElementById("rooleName").innerHTML =
//       "The numbers should not be more than 6 character";
//   } else {
//     document.getElementById("rooleName").innerHTML = "";
//   }
// });
///////////////////////////////////////////////////////////////
// firestore
//   .collection("userList")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (
//         doc.data().email == myemail &&
//         doc.data().password == mypassword &&
//         doc.data().userName == myuserName &&
//         doc.data().age == format
//       ) {
//         console.log(`${doc.id} => ${doc.data().email}`);
//         document.getElementById("email").value = doc.data().email;
//       }
//     });
//   });
///////////////////////////////////////////////////////////////
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
        localStorage.setItem("myValueUserName", "");
        localStorage.setItem("password", "");
        localStorage.setItem("repeatPassword", "");
        localStorage.setItem("myValueEmail", "");
        localStorage.setItem("myValueFormat", "");
        alert("LogOut of your acounnt!");
      } else {
        alert("You are not login to logut!!!");
      }
    })
    .then(() => {
      window.location.replace("../signUp/signUp.html");
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
