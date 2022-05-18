var user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);

document.getElementById("wellcome").innerHTML =
  "Wellcome " + user.username + " ..!";

  
  
  
  
  