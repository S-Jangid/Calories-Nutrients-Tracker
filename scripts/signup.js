import { userInfo } from "../data/user_info.js";
import { fName, lName, setValue} from "./variable.js";

let f,l, uName,password,cnfPassword,Age,mNo,height,weight,activity,sex,goal;
// console.log(fName);


document.querySelector(".js-submit-btn").addEventListener("click",()=>{
    f = document.querySelector(".js-first-name").value;

    l = document.querySelector(".js-last-name").value;

    setValue(f,l);

    uName = document.querySelector(".js-user-name").value;

    password = document.querySelector(".js-password").value;
    
    cnfPassword = document.querySelector(".js-cnfPassword").value;

    mNo = document.querySelector(".js-mob-no").value;

    Age = document.querySelector(".js-age").value;

    height = document.querySelector(".js-height").value;

    weight = document.querySelector(".js-weight").value;

    activity = document.querySelector(".js-activity").value;

    sex = document.querySelector(".js-sex").value;

    goal = document.querySelector(".js-goal").value;

    inspecting();
    
    console.log(userInfo);
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
})

function inspecting()
{
    if(f === '' || l === '' || uName === '' || password === '' || Age === '' || mNo === '' || height === '' || weight === '' )
        alert("Pleasse fill all the values");

    else if (mNo.length !== 10)
        alert("Mobile Number is incorrect");

    else if (cnfPassword !== password )
        alert("Your confirm password is not the same as above");
    

    else
    {
        storing();
        window. location. href ="../main.html";
    }


}

function storing()
{
    userInfo.push({
        fName: f,
        lName: l,
        uName: uName,
        password: password,
        mNo: mNo,
        Age: Age,
        height: height,
        weight: weight,
        activity: activity,
        sex:sex,
        goal: goal
    });

}
