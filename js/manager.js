const db = firebase.firestore();

function setPic(){
  console.log("calling SetPics")
  let targetElem = document.getElementById("imgContainer")
  db.collection("director").doc("directorPic").get().then(snapshot=>{
    targetElem.innerHTML = `
    <img src="${snapshot.data()["img"]}" class="w-[20rem] h-auto" alt="">
    <figcaption  for="principalImg font-bold">${snapshot.data()["tag"]}</figcaption>
    `
    document.getElementById("message").innerHTML = `${snapshot.data()["msg"]}`
  })
}

setPic()
