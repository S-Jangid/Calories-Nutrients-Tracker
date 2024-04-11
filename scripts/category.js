

let type = localStorage.getItem("type") || `fast`;

function addCategory(type){
    type = type;
    console.log(type);
    localStorage.setItem(('type'),type)
}




