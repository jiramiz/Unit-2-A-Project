document.querySelector("#myform").addEventListener("submit", otp);

function otp(event) {
  event.preventDefault();
  var cardNo = document.querySelector("#cardNo").value;
  var cardH = document.querySelector("#cardH").value;
  var cardex = document.querySelector("#cardex").value;
  var cvv = document.querySelector("#cvv").value;

  if (cardNo == "" || cardH == "" || cardex == "" || cvv == "") {
    alert("Enter card details properly.");
  } else {
    alert("Your one time password is 1234 ");
  }
}

document.querySelector("#h").addEventListener("click", home);

function home() {
  window.location.href = "home.html";
}

document.querySelector("header>div>div").addEventListener("click", cart);

function cart() {
  window.location.href = "cart.html";
}

document.querySelector("#btn").addEventListener("click", chk);

function chk(event) {
  event.preventDefault();
  var x = document.querySelector("#otp").value;
  if (x == "1234") {
    window.location.href = "orderConfirm.html";
  } else {
    alert("Wrong OTP");
  }
}



var data = JSON.parse(localStorage.getItem("pay"));

var totp = 0;

var main = document.querySelector("#cart");





function add(elem) {
  var div = document.createElement("div");
  main.append(div);

  var ig = document.createElement("img");
  ig.setAttribute("src", elem.image);
  var head = document.createElement("p");
  head.style.fontWeight = "bold";
  head.style.fontSize = "10px";
  head.textContent = elem.name;
  var des = document.createElement("p");
  des.innerHTML = "$" + elem.price;
  des.style.fontSize = "12px";

  totp = totp + elem.price;

  div.append(ig, head, des);
}



document.querySelector("#ptag").textContent = "$" + totp;
