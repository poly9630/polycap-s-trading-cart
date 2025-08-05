
// Global variables
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

// Adds product to cart or increases quantity if already in cart
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

// Processes payment and returns balance
function pay(amount) {
    const total = cartTotal();
    balance = amount - total;
    return balance;
}
