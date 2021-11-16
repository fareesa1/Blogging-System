var x,y,db;
var userName="";
var uid;
var input_title;
var input_description;
var x1,y1;
var currentUserUid=""
var postTitle=""

const firebaseConfig = {
   apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
  authDomain: "wireleib-e42d3.firebaseapp.com",
  databaseURL: "https://wireleib-e42d3-default-rtdb.firebaseio.com",
  projectId: "wireleib-e42d3",
  storageBucket: "wireleib-e42d3.appspot.com",
  messagingSenderId: "1049671850682",
  appId: "1:1049671850682:web:fcccbf9461465c113f4083"
};

firebase.initializeApp(firebaseConfig);
db = firebase.database()


window.onload = function() {
  }

function login(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
    console.log("hello " + y)
    loginUser(x,y)
}

function register(){
    x1= document.getElementById("input3").value 
    y1= document.getElementById("input4").value
    console.log("hello " + y1)
    registerUser(x1,y1)
}

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log("User successfully created!");
         currentUserUid=cred.user.uid
        window.location.href = 'createpost.html';
        db.ref("users/").update({email:cred.user.email,uid:cred.user.uid})
    }).catch(err => {
    console.log(err.message);
    })

    document.getElementById('input3').value = ''
    document.getElementById('input4').value = ''
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((cred) => {
            // alert('Successfully authenticated!');
        currentUserUid=cred.user.uid
        db.ref("users/").update({email:cred.user.email,uid:cred.user.uid})
        console.log(cred.user.uid);
            window.location.href = 'createpost.html';
            // direct to logic success page
        }).catch(err => {
            console.log(err.message);
        })
         
}


function addUserData(){
    var rand = Math.round(Math.random() *60) + Math.round(Math.random() * 800)
    // rand = currentUserUid
    input_title = document.getElementById("input_title").value
    input_description = document.getElementById("input_description").value
    db.ref("posts/"+rand + "/").update({title:input_title, description:input_description, timeStamp:new Date().getTime()})
    // console.log(input_title)
    window.location.href = 'feed.html';
    

}

function readUserData(){
    db.ref("posts/").on("value", (data)=>{
        var readPost = data.val()
        
        console.log(readPost)
        var arr = Object.keys(readPost)
        var length=arr.length;
        console.log(length);
        var feed=document.getElementById("feed")
        console.log(feed);
        for(var i=0; i<length-3; i++){
            console.log(arr[i]) 
            console.log(readPost[arr[i].toString()].title)
            postTitle = readPost[arr[i].toString()].title
            var div=document.createElement("div")
            div.innerHTML=`<div class="card">
            <img src="https://picsum.photos/200/300/" width="350" height="300">
            <a href="readPost.html" onclick="redirect(1)"  >
                <h2 id="post_title" >${postTitle}</h2>
            </a>
            <p>RASHMI BANSAL</p>
        </div>`
        console.log(div);
      
        feed.appendChild(div); 
        }
       
       
    })
}





