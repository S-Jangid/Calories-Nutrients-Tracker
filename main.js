// localStorage.clear();

import { userInfo } from "./data/user_info.js";
import { calculateMaintenanceCalories } from "./scripts/calorie_cal.js";
import { bftCart,drCart, lhCart, ssCart, breakfast, cartegorize, dinner,  lunch, snacks } from "./scripts/categorize.js";
import { fName, lName } from "./scripts/variable.js";


// import { bftCart, drCart, lhCart, ssCart } from "./scripts/updating_cart.js";
// import { cart } from "./scripts/cart.js";
// import { foodItems } from "./data/food_item.js";
// console.log(fName);
// console.log(lName);


document.querySelector(".js-pfp").innerHTML = fName.charAt(0).toUpperCase();
document.querySelector(".js-pname").innerHTML = fName.charAt(0).toUpperCase() + fName.slice(1) + " " + lName.charAt(0).toUpperCase() + lName.slice(1);

let member;
let calories;


userInfo.forEach((user) =>{
    if(user.fName === fName)
    member = user;

    else
    member = user
})

// console.log(member);

calories = calculateMaintenanceCalories(member.sex,member.weight,member.height,member.Age,member.activity,member.goal).toFixed(0);
let tc = 'Target: '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + calories ;

document.querySelector(".js-to-be-consumed").innerHTML = tc; 


let bftHtml = document.querySelector(".js-breakfast-items");
let LhHtml = document.querySelector(".js-lunch-items");
let ssHtml = document.querySelector(".js-snacks-items");
let drHtml = document.querySelector(".js-dinner-items");

// console.log(breakfast)
rendering();



function rendering() {
    let html = [];
    
    let protein=0;
    let carbs = 0;
    let fat = 0;
    let fiber = 0;
    let totalCalories = 0 ;
    let bftCalories = 0;
    let lhCalories = 0;
    let ssCalories = 0;
    let drCalories = 0;
    let c = 0
    
    
    breakfast.forEach((item) => {
        html += `<div class="item">
        <div>
        <img src=${item.element.img} alt="">
        </div>
        <div>
        ${item.element.name}
        </div>
        <div>
        ${(item.element.calories) * item.quantity}(${item.quantity})
        <button class = "js-bft-delete-btn delete-btn" data-product-id="${item.element.id}">Delete</button>
        </div>
        </div>`

        totalCalories += (item.element.calories) * (item.quantity);
        bftCalories += (item.element.calories) * item.quantity;
        protein += item.element.protein
        carbs += item.element.carbohydrates
        // console.log("carbs : "+ carbs)
        // console.log(item.element.carbohydrates);
        fat += item.element.fat
        fiber += item.element.fiber
        
    })
    bftHtml.innerHTML = html;
    html = [];
    
    lunch.forEach((item) => {
        html += `<div class="item">
        <div>
                            <img src=${item.element.img} alt="">
                            </div>
                            <div>
                            ${item.element.name}
                            </div>
                            <div>
                            ${(item.element.calories) * item.quantity}(${item.quantity})
                            <button class = "js-lh-delete-btn delete-btn" data-product-id="${item.element.id}">Delete</button>
                            </div>
                            </div>`
                            totalCalories += (item.element.calories) * item.quantity;
                            lhCalories += (item.element.calories) * item.quantity;
                            protein += item.element.protein
                            carbs += item.element.carbohydrates
                            fat += item.element.fat
                            fiber += item.element.fiber
                            
                        })
                        LhHtml.innerHTML = html;
                        html = [];
                        
                        snacks.forEach((item) => {
                            html += `<div class="item">
                        <div>
                            <img src=${item.element.img} alt="">
                            </div>
                            <div>
                            ${item.element.name}
                            </div>
                            <div>
                            ${(item.element.calories) * item.quantity}(${item.quantity})
                            <button class = "js-ss-delete-btn delete-btn" data-product-id="${item.element.id}">Delete</button>
                            </div>
                            </div>`
                            totalCalories += (item.element.calories) * item.quantity;
        ssCalories += (item.element.calories) * item.quantity;
        protein += item.element.protein
        carbs += item.element.carbohydrates
        fat += item.element.fat
        fiber += item.element.fiber
        
    })
    ssHtml.innerHTML = html;
    html = [];

    
    dinner.forEach((item) => {
        html += `<div class="item">
        <div>
        <img src=${item.element.img} alt="">
        </div>
        <div>
        ${item.element.name}
        </div>
        <div>
        ${(item.element.calories) * item.quantity}(${item.quantity})
        <button class = "js-dr-delete-btn delete-btn" data-product-id="${item.element.id}">Delete</button>
        </div>
                    </div>`
                    
                    totalCalories += (item.element.calories) * item.quantity;
                    drCalories += (item.element.calories) * item.quantity;
                    protein += item.element.protein
                    carbs += item.element.carbohydrates
                    fat += item.element.fat
                    fiber += item.element.fiber
                })
    drHtml.innerHTML = html;
    
    // Adding the values
    
    c = `Consumed: `+'\xa0\xa0\xa0' + totalCalories;
    document.querySelector(".js-bft-calories").innerHTML = bftCalories;
    document.querySelector(".js-lh-calories").innerHTML = lhCalories;
    document.querySelector(".js-ss-calories").innerHTML = ssCalories;
    document.querySelector(".js-dr-calories").innerHTML = drCalories;
    document.querySelector(".js-consumed").innerHTML = c;
    
    document.querySelector(".js-protein").innerHTML = `Protein: ${protein}`
    document.querySelector(".js-carbs").innerHTML = `Carbs: ${carbs}`
    document.querySelector(".js-fat").innerHTML = `Fat: ${fat}`
    document.querySelector(".js-fiber").innerHTML = `Fiber: ${fiber}`

    // Delete button


    document.querySelectorAll(".js-bft-delete-btn").forEach((button) => {
    
        button.addEventListener(('click'), () => {  
            // console.log(button.dataset.productId);
            let id = button.dataset.productId;
            bftCart(id);
            rendering();
        })
    });
    
    document.querySelectorAll(".js-lh-delete-btn").forEach((button) => {
    
        button.addEventListener(('click'), () => {
            let id = button.dataset.productId;
            lhCart(id);
            rendering();
        })
    });
    
    document.querySelectorAll(".js-ss-delete-btn").forEach((button) => {
    
        button.addEventListener(('click'), () => {
            let id = button.dataset.productId;
            ssCart(id);
            rendering();
        })
    });
    
    document.querySelectorAll(".js-dr-delete-btn").forEach((button) => {
    
    
        button.addEventListener(('click'), () => {
            console.log("dinner")
            let id = button.dataset.productId;
            drCart(id);
            rendering();
        })
    
    });
};




// console.log('hii');

// console.log(JSON.parse(localStorage.getItem('breakfast')));
// console.log(JSON.parse(localStorage.getItem('snacks')));
