function addToCart(productName) {
  alert(productName + ' added to cart!');
}
let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " has been added to your cart!");
}

function viewCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let cartList = cart.map((item, index) => `${index + 1}. ${item}`).join("\n");
  let message = "Items in your cart:\n\n" + cartList;

  let send = confirm(message + "\n\nDo you want to send your order to the owner?");
  if (send) {
    sendOrderToOwner(cart);
  }
}

function sendOrderToOwner(cartItems) {
  let orderText = "Hello, I want to order the following items:\n\n" + cartItems.join("\n");
  let encodedText = encodeURIComponent(orderText);
  let phone = "+251939842323"; // Replace with your WhatsApp number
  let url = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(url, "_blank");
}
function addToCart(productName) {
  // Get existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add product to cart
  cart.push(productName);

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show a message
  alert(productName + " has been added to your cart!");
}
localStorage.getItem('cart')
function addToCart(productId) {
  fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: productId,
      quantity: 1,
      session_id: 'guest-123' // In real app, use session or JWT
    })
  })
  .then(res => res.json())
  .then(data => alert('Item added to cart'));
}
