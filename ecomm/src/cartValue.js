const cartValue = document.querySelector("#Cart-Button")

export const updateCartValue = (cartProduct) => {
    return cartValue.innerHTML = `<a href="Cart.html">Cart ${cartProduct.length} </a>`
}