


function showSideBar() {
    var show = document.querySelector(".mainmenu");
    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  }





function accountDrop() {
 var show = document.querySelector("#dropdown");
 if(show.style.display == "block"){
   show.style.display = "none";
 }
 else {
   show.style.display = "block"
 }
}

function signIn(){
 window.location.href = "signinkohls.html"
}

