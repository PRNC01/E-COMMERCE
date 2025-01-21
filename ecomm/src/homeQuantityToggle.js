export const homeQuantityToggle = (event, id, Stock) => {
    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;
    
    if (event.target.className === 'cartIncrement') {
        if (quantity < Stock) {
            quantity += 1
        }else if (quantity == Stock) {
            quantity = Stock;
        }
    }

    if (event.target.className === 'cartDecrement') {
            quantity -= 1
    }

    console.log(quantity);
    

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quantity',quantity)
    return quantity;
    
}