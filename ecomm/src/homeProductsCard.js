import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')

export const showProductConatainer = (Products) => {
    if (!Products) {
        return false;
    }

    Products.forEach((currentProduct) => {
        const {id, Name, category, Brand, price, Stock, Description, image} = currentProduct;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)

        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = Name;
        productClone.querySelector(".productRating").textContent = Name;
        productClone.querySelector(".productDescription").textContent = Description;
        productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹ ${price * 2}`;
        productClone.querySelector(".productStock").textContent = Stock;
        // productClone.querySelector('.productQuantity').textContent = 0;

        productClone.querySelector('.StockElement').addEventListener("click", (event) => {
            homeQuantityToggle(event, id, Stock);
        });

        productClone.querySelector('.addToCartButton').addEventListener('click', (event) => {
            addToCart(event, id, Stock)
        })

        productContainer.append(productClone);

    });

}