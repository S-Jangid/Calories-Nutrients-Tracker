
import { foodItems } from "../data/food_item.js";
import { cart } from "./cart.js";

// localStorage.clear();
export let breakfast = JSON.parse(localStorage.getItem('breakfast')) ||
[] ;
export let lunch = JSON.parse(localStorage.getItem('lunch')) || [];
export let snacks = JSON.parse(localStorage.getItem('snacks'))|| [];
export let dinner = JSON.parse(localStorage.getItem('dinner')) || [];


export function cartegorize() {
    breakfast = [];
    lunch =[];
    snacks = [];
    dinner = [];
    foodItems.forEach(element =>{
        // console.log(cart);
        cart.forEach((item) =>{
            // console.log(element.id)
            // console.log(item.productId)
            if(element.id === item.productId)
            {

                if (item.category === 'breakfast')
                {
                    breakfast.push({
                        element,
                        quantity: item.quantity,
                    });
                    // console.log(breakfast);
                }
                
                else if (item.category === 'lunch')
                {
                    lunch.push({
                        element,
                        quantity: item.quantity,
                    });
                }
        
                else if (item.category === 'snacks')
                {
                    // console.log("HERe snacks ")
                    snacks.push({
                        element,
                        quantity: item.quantity,
                    });
                }
        
                else if (item.category === 'dinner')
                {
                    dinner.push({
                        element,
                        quantity: item.quantity,
                    });
                }
        
            }
        })
    })

    localStorage.setItem('breakfast',JSON.stringify(breakfast));
    localStorage.setItem('lunch',JSON.stringify(lunch));
    localStorage.setItem('snacks',JSON.stringify(snacks));
    localStorage.setItem('dinner',JSON.stringify(dinner));

}




export function bftCart(productId){

    const cartIndex = cart.findIndex(ctitem => ctitem.productId === productId && ctitem.category === 'breakfast')
    console.log(cartIndex)
    cart.splice(cartIndex,1)

    const mealIndex = breakfast.findIndex(item => item.element.id === productId)
    console.log(mealIndex)
    breakfast.splice(mealIndex,1)

    console.log(cart)

    localStorage.setItem('breakfast',JSON.stringify(breakfast));
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function lhCart(productId){

    const cartIndex = cart.findIndex(ctitem => ctitem.productId === productId && ctitem.category === 'lunch')
    console.log(cartIndex)
    cart.splice(cartIndex,1)

    const mealIndex = lunch.findIndex(item => item.element.id === productId)
    console.log(mealIndex)
    lunch.splice(mealIndex,1)

    console.log(cart)

    localStorage.setItem('lunch',JSON.stringify(lunch));
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function ssCart(productId){

    const cartIndex = cart.findIndex(ctitem => ctitem.productId === productId && ctitem.category === 'snacks')
    console.log(cartIndex)
    cart.splice(cartIndex,1)

    const mealIndex = snacks.findIndex(item => item.element.id === productId)
    console.log(mealIndex)
    snacks.splice(mealIndex,1)

    console.log(cart)

    localStorage.setItem('snacks',JSON.stringify(snacks));
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function drCart(productId){

    const cartIndex = cart.findIndex(ctitem => ctitem.productId === productId && ctitem.category === 'dinner')
    console.log(cartIndex)
    cart.splice(cartIndex,1)

    const mealIndex = dinner.findIndex(item => item.element.id === productId)
    console.log(mealIndex)
    dinner.splice(mealIndex,1)

    console.log(cart)

    localStorage.setItem('dinner',JSON.stringify(dinner));
    localStorage.setItem('cart',JSON.stringify(cart));
}

// export function drCart(productId){
//     // console.log(productId);
//     let newCart = [];

//     dinner.forEach((item)=>{
//         if(item.element.id !== productId)
//         {
//             cart.forEach((item,index) =>{
//                 if(item.category === 'dinner')
//                     cart.splice(index,1)
//             })
//             newCart.push(item);
//         }

//     })
//     dinner = newCart;
//     localStorage.setItem('dinner',JSON.stringify(dinner));
//     localStorage.setItem('cart',JSON.stringify(cart));
// }