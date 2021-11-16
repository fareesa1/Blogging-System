// var userName = "";
// var userInfo = "";

// const firebaseConfig = {
//     apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
//    authDomain: "wireleib-e42d3.firebaseapp.com",
//    databaseURL: "https://wireleib-e42d3-default-rtdb.firebaseio.com",
//    projectId: "wireleib-e42d3",
//    storageBucket: "wireleib-e42d3.appspot.com",
//    messagingSenderId: "1049671850682",
//    appId: "1:1049671850682:web:fcccbf9461465c113f4083"
//  };
 
//  firebase.initializeApp(firebaseConfig);
//  db = firebase.database()

function readUserCard(){
    db.ref("users/").on("value", (data)=>{
        userInfo = data.val()
        console.log(userInfo.user1.title)
        document.getElementById("card1_title").innerText=userInfo.user1.title
    })
  
}

 window.onload = function() {
    //  if(){

    //  }
    // console.log(currentUserUid);
    readUserCard()
 }

 function redirect(x){
    // window.location("readPost.html")
    console.log("users/"+"user"+1)
    db.ref("users/"+"user"+1).on("value", (data)=>{
        console.log("users/"+"user"+1)
        userInfo = data.val()
        console.log(userInfo)
        // document.getElementById("card1_title").innerText=userInfo.user1.title
    })
 }