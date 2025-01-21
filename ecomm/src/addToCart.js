import { getCartProductFromList } from "./getCartProduct";
import { updateCartValue } from "./cartValue";

export const addToCart = (event, id, Stock) => {
    let arrayLocalStorageProduct = getCartProductFromList();

    const currentProduct = document.querySelector(`#card${id}`);
    const quantity = currentProduct.querySelector('.productQuantity').innerText; 
    let price = currentProduct.querySelector('.productPrice').innerText;

    price = price.replace("₹", "").replace(/,/g, ""); // Remove ₹ and commas (if any)

    // let existingProduct = arrayLocalStorageProduct.find((currentProduct) => {
    //     currentProduct.id === id
    // })

    // if (existingProduct) {
    //     console.log("hello");
        
    //     // return false
    // }

    console.log(id);
    

    price = price * quantity;

    arrayLocalStorageProduct.push({ quantity, price });
    localStorage.setItem('cartProductList', JSON.stringify(arrayLocalStorageProduct));

    updateCartValue(arrayLocalStorageProduct)
};
// localStorage.clear(); // TO CLEAR DATA FROM LOCAL STORAGE