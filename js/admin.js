function submitAdminDetails(){
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPass").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    if (user){
      console.log("user logged in")
      window.locaion.replace("../adminPage.html")
    } else {
      window.location.replace("../index.html")
    }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


function()
