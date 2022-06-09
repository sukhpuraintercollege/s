const db = firebase.firestore();
let email = document.getElementById("adminEmail").value;
let password = document.getElementById("adminPass").value;

function adminLogin() {
  console.log("Calling admin Login")
  console.log("Email  ",email,"   Password   ",password)
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("user logged in")
      console.log(user)
      // Signed in
      // if (user){
      //   window.location.replace("./admin.html")
      //   console.log("user logged in")
      // }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}
