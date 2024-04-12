import { userInfo } from "../data/user_info.js";
import { fName, lName, setValue } from "./variable.js";

let loginbtn = document.querySelector(".js-login-btn");





function verify() {
    let matchingItem = null;
    let uName = document.querySelector('.js-username').value;
    let password = document.querySelector('.js-password').value;
    
    userInfo.forEach((user)=>{

        if((uName === user.uName) && (password === user.password) )
        {
            matchingItem = user;
        }
            
    })
    if(matchingItem !== null)
    {
        console.log("You are Logged in!");
        let f = matchingItem.fName;
        let l = matchingItem.lName;
        setValue(f,l);
        window. location. href ="../main.html";
        localStorage.setItem('fName')
    }
    else
        alert("Username or password is incorrect");
}

loginbtn.addEventListener(('click'),()=>{
    verify();
})



document.querySelector(".js-password").addEventListener(('keyup'),(event)=>{
if(event.key === 'Enter')
    verify();

})
