function login(){
    Name = document.getElementById("UserName").value
    localStorage.setItem("user_name",Name)
    window.location=("CHATRoom.html")
}