import { updateCartValue } from "./cartValue";

export const getCartProductFromList = () => {
    let cartProduct = localStorage.getItem('cartProductList');

    if(!cartProduct){
        return [];
    }
    cartProduct = JSON.parse(cartProduct)

    updateCartValue(cartProduct);

    return cartProduct;
}