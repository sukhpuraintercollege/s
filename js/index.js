const db = firebase.firestore()
let newsFeed = document.getElementById("newsfeedContainer")

const load = () => {
  db.collection("news").get().then((snapshot)=>{
    snapshot.forEach(docs => {
      let divnews =document.createElement("div");
      divnews.setAttribute("class","mb-3 p-2")
      divnews.innerHTML=`<div class="heading-small">${docs.data()["heading"]}
      </div>
      <div class="new-body">
        ${docs.data()["feed"]}
      </div>`;
      newsFeed.appendChild(divnews)
    });

  })
}

load()

// <div class="  mb-3 p-2" id ="newsg">
//     <div class="heading-small">
//         News Heading
//     </div>
//     <div class="new-body">
//       This the body
//     </div>
// </div>
