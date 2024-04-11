

export let fName = localStorage.getItem('fName') || "shubham" ;

export let lName = localStorage.getItem('lName') || "jangid";

export function setValue(f,l)
{
    fName = f;
    lName = l;

    localStorage.setItem("fName",fName);
    localStorage.setItem("lName",lName);
}

// localStorage.clear();