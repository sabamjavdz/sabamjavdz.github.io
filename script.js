// script.js

const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const viewCartBtn = document.getElementById('viewCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartOverlay = document.getElementById('cartOverlay');

const cartItemsList = document.getElementById('cartItems');
const totalPriceDisplay = document.getElementById('totalPrice');

let cartItems = [];

// Add event listeners
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

viewCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    addToCartDisplay(name, price);
    updateCartTotal();
}

// Function to add item to cart display
function addToCartDisplay(name, price) {
    const item = { name: name, price: price };
    cartItems.push(item);

    const itemElement = document.createElement('li');
    itemElement.innerText = `${name} - $${price}`;
    cartItemsList.appendChild(itemElement);
}

// Function to update cart total
function updateCartTotal() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
    });
    totalPriceDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to open cart overlay
function openCart() {
    cartOverlay.style.display = 'flex';
}

// Function to close cart overlay
function closeCart() {
    cartOverlay.style.display = 'none';
}
document.getElementById("myButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    console.log("Button clicked!"); // Log a message to the console
});