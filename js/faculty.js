const db = firebase.firestore();
let targetElem = document.getElementById("facultyGrid");

function gridAppend(){
  let counter = 1;
    db.collection("faculty").get().then(snapshot=>{
      snapshot.forEach(docs =>{
        let divEl = document.createElement('div');
        divEl.setAttribute("class","grid grid-rows-1 grid-flow-col gap-4");
        divEl.innerHTML =`<div class="grid grid-cols-4 gap-4">
          <p>${counter}</p>
          <img class="" src="${docs.data()["photo"]}" alt="">
          <p id="name">${docs.data()["name"]}</p>
          <p id="subject">${docs.data()["subject"]}</p>
        </div>`
        console.log(docs.id,"  ==> ",docs.data())
        counter +=1;
        targetElem.appendChild(divEl)
      })
    })
}

gridAppend()

// <div class="grid grid-rows-1 grid-flow-col gap-4">
//
// </div>
