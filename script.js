document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('newTry').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
});


document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('newTry').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
});
 

document.getElementById('cart-icon').addEventListener('click',()=>{
  document.getElementById('invisible').style.zIndex = '-1';
  document.getElementById('invisibles').style.zIndex = '-1';
  document.getElementById('invisible').style.opacity = '5%';
  document.getElementById('invisibles').style.opacity = '5%';
  document.getElementById('confirmation').style.zIndex = '100';
  document.getElementById('confirmation').style.opacity ='100%';
  document.body.style.overflow = 'hidden';
})


document.getElementById('redButton').addEventListener('click',()=>{
  document.getElementById('invisible').style.zIndex = '100';
  document.getElementById('invisibles').style.zIndex = '99';
  document.getElementById('invisible').style.opacity = '100%';
  document.getElementById('invisibles').style.opacity = '100%';
  document.getElementById('confirmation').style.zIndex = '-1';
  document.getElementById('confirmation').style.opacity ='0%';
  document.body.style.overflow = 'auto';
})


let cart= [];
let cartItems = {plantName:'',plantPrice:0,count:0};
console.log(cartItems);
let title = document.getElementById("plantName");
let price = document.getElementById("rate");
cartItems.plantName = title.innerText;
cartItems.plantPrice = price.innerText;
let b = document.getElementById("buyProduct").innerHTML = cartItems.plantName;
console.log(cartItems.plantName);
let c = document.getElementById("buyPrice").innerHTML = cartItems.plantPrice;
console.log(cartItems.plantPrice);
const quantityInput = document.getElementById('quantity');

// Add an event listener to update cartItems.quantity when the input changes
quantityInput.addEventListener('input', function () {
  // Update the quantity based on user input
  cartItems.quantity = parseInt(this.value, 10) || 0;

  // Calculate the total price
  const total = cartItems.quantity * cartItems.plantPrice;
  console.log(total);
  let t = document.getElementById("amount").innerHTML=total;
});


