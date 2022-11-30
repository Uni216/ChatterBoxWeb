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

RName = localStorage.getItem("RoomName")
UName = localStorage.getItem("user_name")


function getData() {
    firebase.database().ref("/" + RName).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;

                      //Start code

console.log(firebase_message_id)
console.log(message_data)
name=message_data["Name"]
like=message_data["Like"]
message=message_data["Message"]

nameTag= "<h4>"+ name + " <img src='tick.png' class='user_tick'> </h4>"

messageTag= "<h4 class='message_h4'>" + message + "</h4>"

likeButton= "<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updateLike(this.id)'>" 
spanTag= "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>"
Row= nameTag + messageTag + likeButton + spanTag 
document.getElementById("output").innerHTML += Row



                      //End code

                }
          });
    });
}



getData();

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("RoomName")
    window.location = "index.html"
}

function back() {
    window.location = "CHATRoom.html"
}

function Send() {

    MSG = document.getElementById("msg").value
    firebase.database().ref(RName).push({
          Name: UName,
          Message: MSG,
          Like: 0
    })
    document.getElementById("msg").value = " "

}

function updateLike(message_id){
console.log("Clicked on the like button- " + message_id)
Likes= document.getElementById(message_id).value
updatedLikes=  Number(Likes) + 1
firebase.database().ref(RName).child(message_id).update({
    Like : updatedLikes
})
}