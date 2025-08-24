
// Global variables for the script.js file i included products, cart, and balance. i also set up contants and functions.
const products = [
    {
        name: "cherry",
        price: 25.99,
        quantity: 0,
        productId: 1,
        image: "cherry.jpg"
    },
    {
        name: "orange",
        price: 89.99,
        quantity: 0,
        productId: 2,
        image: "orange.jpg"
    },
    {
        name: "strawberry",
        price: 199.99,
        quantity: 0,
        productId: 3,
        image: "strawberry.jpg"
    }
];

let cart = [];
let balance = 0;

// Adds product to cart or increases quantity if already in cart until no  itmes.
function addProductToCart(productId) {
    const product = products.find(p => p.productId === productId);
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
}

// Increases quantity of product in cart
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    }
}

// Decreases quantity of product in cart or removes if quantity is 1
function decreaseQuantity(productId) {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
    }
}

// Removes product from cart completely
function removeProductFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
}

// Calculates total cost of products in cart
function cartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Processes payment and returns balance but taking out what acustomer paid and the total owed
function pay(amount) {
    const total = cartTotal();
    balance = amount - total;
    return balance;
}
// Handle credit card form submission. this allows info to be entered into the credit card form. tis a extra that i added to ensure i get teh extra credit.
document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('card-payment-form');

  if (cardForm) {
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('cardholder-name').value.trim();
      const number = document.getElementById('card-number').value.trim();
      const expiry = document.getElementById('expiration-date').value;
      const cvv = document.getElementById('cvv').value.trim();

      // Basic validation
      if (!name || !number.match(/^\d{16}$/) || !cvv.match(/^\d{3}$/)) {
        alert('Please enter valid card details.');
        return;
      }

      // Simulates payment success this shows that the payment was done successfully. i added this and the part above from  the extras that were provided on the rubric for extra credits.
      alert(`Payment successful!\nThank you, ${name}.`);
      cardForm.reset();
    });
  }
});
