const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".cart-items");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.parentNode;
    const productName = product.querySelector("span").textContent;
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.textContent = productName;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-item");
    cartItem.appendChild(removeButton);

    cartItems.appendChild(cartItem);

    // Add remove from cart functionality
    removeButton.addEventListener("click", () => {
      cartItems.removeChild(cartItem);
    });
  });
});
