
const db = firebase.firestore();

async function submitDetails(){
  let email = document.getElementById("email").value;
  let mobileNumber = document.getElementById("mobileNUmber").value;
  let fullName = document.getElementById("fullName").value;
  let gender = document.getElementById("gender").value;
  let category = document.getElementById("category").value;
  let dob = document.getElementById("dob").value;
  let motherTongue = document.getElementById("motherTongue").value;
  let birhtplace = document.getElementById("birhtplace").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let religion = document.getElementById("religion").value;
  let aadharNumber = document.getElementById("aadharNumber").value;
  let addressLine1 = document.getElementById("addressLine1").value;
  let addressLine2 = document.getElementById("addressLine2").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let pincode = document.getElementById("pincode").value;
  let classStud = document.getElementById("class").value;
  let submitButton = document.getElementById("submitButton");
  submitButton.innerHTML = "Submitting Details"
  db.collection("admission").doc(`class${classStud}`).set({
    FullName : fullName,
    MobileNumber : mobileNumber,
    Email :email,
    Gender:gender,
    Category:category,
    Dateofbirhh:dob,
    motherTongue:motherTongue,
    Birthplace:birhtplace,
    BloodGroup : bloodGroup,
    Religion:religion,
    AadharNumber: aadharNumber,
    addressLine1:addressLine1,
    addressLine2:addressLine2,
    city:city,
    state:state,
    pincode:pincode
  }).then(()=>{submitButton.innerHTML="Submit";console.log("data added")}).then(()=>{alert("Details Added")}).then(()=>{window.location.reload()})

}
