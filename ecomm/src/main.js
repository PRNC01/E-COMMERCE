import './style.css'
import 'remixicon/fonts/remixicon.css'
import Products from '/Api/Products.json'
import { showProductConatainer } from './homeProductsCard';

// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault()
// }, false)

console.log(Products);


// DEFINE A FUNCTION NAME "showProductContainer()" THAT TAKES AN ARRAY OF PRODUCT AS INPUT
showProductConatainer(Products);



