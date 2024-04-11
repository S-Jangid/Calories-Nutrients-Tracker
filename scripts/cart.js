
export let cart = [];
cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId: 0,
    quantity : 0,
    category: null,
}]
// console.log(cart);
// localStorage.clear();