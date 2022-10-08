const firebaseConfig = {
    apiKey: "AIzaSyDs2embB7WtVY2GFmv7dhBKYHe0vSCMuwU",
    authDomain: "kwitterweb-64ce2.firebaseapp.com",
    databaseURL: "https://kwitterweb-64ce2-default-rtdb.firebaseio.com",
    projectId: "kwitterweb-64ce2",
    storageBucket: "kwitterweb-64ce2.appspot.com",
    messagingSenderId: "386882448718",
    appId: "1:386882448718:web:8d47822a8e2e5999fa821f"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

UName= localStorage.getItem("user_name")
document.getElementById("Lname").innerHTML= "Welcome  " +  UName
console.log(UName)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    //Start code

console.log(Room_names)
Row=  "<div class='room_name' id='"+Room_names+"' onclick='Redirect(this.id)'> "+ Room_names+"</div> <hr>" 
document.getElementById("output").innerHTML +=Row


    //End code
    });});}
getData();
function addRoom(){
    Rname= document.getElementById("RoomName").value
    firebase.database().ref("/").child(Rname).update({
          purpose: "Adding Room Name"
          
    })
    localStorage.setItem("RoomName",Rname)
    window.location="kwitter_page.html"
}
function Redirect(RooName){
localStorage.setItem("RoomName", RooName)
window.location="kwitter_page.html"
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("RoomName")
    window.location= "index.html"
}