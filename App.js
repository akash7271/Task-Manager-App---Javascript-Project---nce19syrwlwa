const inputValue=document.getElementById("todo");
const addTask=document.querySelector(".add-task");
const addedElement=document.querySelector(".added-element");
addTask.addEventListener("click",(e)=>{
    e.preventDefault();
    let innertext=inputValue.value;
    // console.log(innertext);

   
    
    const newAddElement=document.createElement("li");
    newAddElement.className="item";
    newAddElement.setAttribute("draggable","true");
    newAddElement.textContent=`${innertext}`;
    addedElement.appendChild(newAddElement);


});









