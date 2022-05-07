document.querySelector("#h").addEventListener("click",home);

function home() {
  window.location.href = "home.html";
}

document.querySelector("header>div>div").addEventListener("click",shop);

function shop() {
  
    window.location.href = "women.html";
}



var cartData = JSON.parse(localStorage.getItem("cart"));
  console.log(cartData);

  var total = cartData.reduce(function (sum, elem, index, arr) {
    return sum + Number(elem.price);
  }, 0);

  console.log(total);
 
  document.querySelector(
    "#cost"
  ).innerText = `$${total}`;

  
  cartData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;


    
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });

    box.append(img, name, price, btn);

    document.querySelector("#cart").append(box);
  });

  function removeItem(elem, index) {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
  }


     total=total + elem.price;
     var T =document.createElement("h5");

     T.textContent= "Total = $" + total;
     T.style.fontSize ="17px"
     

     var box = document.querySelector("#t");

     box.append(T)

     document.querySelector("#out").addEventListener("click",checkout)

     function checkout()
     {
         window.location.href = "payment.html"
     }

     document.querySelector("button").addEventListener("click",rmv)

     function rmv(index)
     {
             data.splice(index,1);
     }