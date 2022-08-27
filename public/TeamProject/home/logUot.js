var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");
var myrepeatPassword = localStorage.getItem("repeatPassword");

var emaile = null;
var passwordp = null;
var userNameu = null;
var agea = null;

const firebaseConfig = {
  apiKey: "AIzaSyBtBegQtuB_TcnIDQcIyUynWuOPmZkpfvQ",
  authDomain: "kurd-movie-trailer.firebaseapp.com",
  projectId: "kurd-movie-trailer",
  storageBucket: "kurd-movie-trailer.appspot.com",
  messagingSenderId: "557149530646",
  appId: "1:557149530646:web:013ea41fe86c927a652337",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true, merge: true });

var logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  db.collection("userList")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().email == myemail &&
          doc.data().password == mypassword &&
          doc.data().userName == myuserName
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
        userNameu == myuserName
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
      // window.location.replace("../login/login.html");
    });
});
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
var r1 = null;
var r2 = null;
var r3 = null;
db.collection("userList")
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
db.collection("userList")
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
db.collection("userList")
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
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// function myFunctionAge1() {
//   db.collection("userList")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         if (
//           doc.data().email == myemail &&
//           doc.data().password == mypassword &&
//           doc.data().userName == myuserName
//         ) {
//           console.log(`${doc.id} => ${doc.data().email}`);
//           db.collection("userList").doc(doc.id).update({
//             age: "Old",
//           });
//         }
//       });
//     });
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////
// function myFunctionAge2() {
//   db.collection("userList")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         if (
//           doc.data().email == myemail &&
//           doc.data().password == mypassword &&
//           doc.data().userName == myuserName
//         ) {
//           console.log(`${doc.id} => ${doc.data().email}`);
//           db.collection("userList").doc(doc.id).update({
//             age: "Child",
//           });
//         }
//       });
//     });
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/////////////for sending massege to the team group page ////////////////////////////

function mysended() {
  db.collection("userList")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().email == myemail &&
          doc.data().password == mypassword &&
          doc.data().userName == myuserName
        ) {
          // console.log(`${doc.id} => ${doc.data().email}`);
          alert("The massege is sended.");
        }
      });
    });
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// var filter = true;
// function myfilter() {
//   db.collection("userList")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         if (
//           doc.data().email == myemail &&
//           doc.data().password == mypassword &&
//           doc.data().userName == myuserName
//         ) {
//           if (filter) {
//             filter = false;
//             console.log(`${doc.id} => ${doc.data().email}`);
//             document.getElementById("boxFilter").style.display = "flex";
//           } else {
//             console.log(`${doc.id} => ${doc.data().email}`);
//             filter = true;
//             document.getElementById("boxFilter").style.display = "none";
//           }
//         }
//       });
//     });
// }
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// var filterClose = true;
// function myfilterClose() {
//   db.collection("userList")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         if (
//           doc.data().email == myemail &&
//           doc.data().password == mypassword &&
//           doc.data().userName == myuserName
//         ) {
//           // if (filterClose) {
//           // filterClose = false;
//           // console.log(`${doc.id} => ${doc.data().email}`);
//           document.getElementById("boxFilter").style.display = "none";
//           // window.location.reload();
//           filter = true;
//           // } else {
//           //   console.log(`${doc.id} => ${doc.data().email}`);
//           //   filterClose = true;
//           //   document.getElementById("boxFilter").style.display = "none";
//           // }
//         }
//       });
//     });
// }

// db.collection("userList")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (
//         doc.data().email == myemail &&
//         doc.data().password == mypassword &&
//         doc.data().userName == myuserName
//       ) {
//         var typeofage = doc.data().age;
//         localStorage.setItem("myValuetypeofage", typeofage);
//       }
//     });
//   })
//   .then(() => {
//     // window.location.reload();
//   });

db.collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName
      ) {
        var changingAge = doc.data().age;

        localStorage.setItem("changingAge", changingAge);
        // console.log(`${doc.id} => ${doc.data().email}`);
      }
    });
  });
