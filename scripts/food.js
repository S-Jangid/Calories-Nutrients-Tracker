
import { foodItems } from "../data/food_item.js";
import { cart } from "./cart.js";
import { cartegorize } from "./categorize.js";

let itemHtml = [];

foodItems.forEach((item) => {
    itemHtml += `<div class="item">
    <img class="img" src="${item.img}" alt="">
    <div class="item-description">
        <div class ="interaction">
            <h1>${item.name}</h1>
            <div class="calories">Calories ${item.calories}</div>
            <button class="js-add-btn add-btn" data-product-id = "${item.id}" >Add</button>
        </div>

        <div class="nutrients">
            <div class="classified-nutrients">
                <div> 
                <img src="images/soyabean.jpg" alt="">
                </div>

                <div> 
                ${item.protein}
                </div>

                <div> 
                Protein
                </div>

            </div>
            <div class="classified-nutrients">
                <div> 
                <img src="images/bread.png" alt="">
                </div>

                <div> 
                ${item.carbohydrates}
                </div>

                <div> 
                Carbohydrates
                </div>

            </div>
            <div class="classified-nutrients">
                <div> 
                <img src="images/oil.png" alt="">
                </div>

                <div> 
                ${item.fat}
                </div>

                <div> 
                Fat
                </div>

            </div>
            <div class="classified-nutrients">
                <div> 
                <img src="images/fiber.jpeg" alt="">
                </div>

                <div> 
                ${item.fiber}
                </div>

                <div> 
                Fiber
                </div>

            </div>

        </div>

    </div>
</div>`
})



// localStorage.clear();
document.querySelector(".js-container").innerHTML = itemHtml;

document.querySelectorAll('.js-add-btn').forEach((button) => {
    button.addEventListener('click',()=>{
        // console.log(button.dataset.productId);
        
        
        addToCart(button);
        // updateQuantity();

        console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart));
        // console.log(`cart : ${JSON.parse(localStorage.getItem('cart'))}`);
    })
})


function addToCart(button){
    // console.log(cart);
    let category = type;
    // console.log(category);
    let matchingItem;
    // let arr = Array.cart;
    // console.log(arr);
    cart.forEach((item) => {
        // console.log(item.productId)
        if (button.dataset.productId === item.productId && category === item.category)
        {
            matchingItem = item;
        }  
    })
    if (matchingItem)
    {
        matchingItem.quantity +=1;
    }
    
    else
    {
        cart.push({
            productId: button.dataset.productId,
            quantity : 1,
            category: category,
        })
    }
    cartegorize();

}


// function updateCart(productId){
//     // console.log(productId);
//     let newCart = [];

//     cart.forEach((item)=>{
//         if(item.productId !== productId)
//         {
//             newCart.push(item);
//         }

//     })
//     cart = newCart;
// }