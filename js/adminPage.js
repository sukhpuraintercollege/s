
function checkAuthAdmin(){
  firebase.auth().onAuthStateChanged().then(user=>{
    if (user){
      console.log("user is admin")
    } else{window.location.replace("./admin.html")}
  }).catch((error) =>{
    console.log(error)
  })
}
checkAuthAdmin()
