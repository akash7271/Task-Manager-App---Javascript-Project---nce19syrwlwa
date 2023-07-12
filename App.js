const inputValue=document.getElementById("todo");
const addTask=document.querySelector(".add-task");
const addedElement=document.querySelector(".added-element");









// const details=document.getElementById("itemsdetail");
// const submitbtn=document.getElementById("submitbtn");
// const icon=document.querySelector(".icon");
// newAddElement.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const elemenvalue=newAddElement.textContent;
//     details.style.display="block";
//     icon.innerText=elemenvalue;
//     submitbtn.addEventListener("click", ()=>{
//         details.style.display="none";
//     })

// })



addTask.addEventListener("click",(e)=>{
    e.preventDefault();
    const newAddElement=document.createElement("li");
    newAddElement.classList.add("item");
    newAddElement.setAttribute("draggable","true");
    let innertext=inputValue.value;
    if(!innertext) return;

   
    
    newAddElement.innerText=`${innertext}`;
   
    newAddElement.addEventListener("dragstart",()=>{
        newAddElement.classList.add("is-dragging");
    });
    newAddElement.addEventListener("dragend", ()=>{
        newAddElement.classList.remove("is-dragging");
    });
    addedElement.appendChild(newAddElement);
    inputValue.value="";



    //  const items=document.querySelectorAll(".items");

    const details=document.getElementById("itemsdetail");
    const submitbtn=document.getElementById("submitbtn");
    const icon=document.querySelector(".icon");
    newAddElement.addEventListener("click",(e)=>{
        e.preventDefault();
        const elemenvalue=newAddElement.textContent;
        details.style.display="block";
        icon.innerText=elemenvalue;
        submitbtn.addEventListener("click", ()=>{
            details.style.display="none";
        })
    
    })
    









});

const dropableaddelement=document.querySelectorAll(".added-element");
const dragableitems=document.querySelectorAll(".item");
dragableitems.forEach((task)=>{
    task.addEventListener('dragstart',()=>{
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend",()=>{
        task.classList.remove("is-dragging");
    })
});
dropableaddelement.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
  
      const bottomTask = insertAboveTask(zone, e.clientY);
      const curTask = document.querySelector(".is-dragging");
  
      if (!bottomTask) {
        zone.appendChild(curTask);
      } else {
        zone.insertBefore(curTask, bottomTask);
      }
    });
  });
  const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".item:not(.is-dragging)");
  
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;
  
    els.forEach((task) => {
      const { top } = task.getBoundingClientRect();
  
      const offset = mouseY - top;
  
      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });
  
    return closestTask;
  };

//   on click items we get a detail of that items
// const items=document.querySelectorAll(".items");
// const itemsdetail=document.querySelector(".items-detail");
// items.forEach((task)=>{
//     task.addEventListener("click", (e)=>{
//         e.preventDefault();
//         itemsdetail.style

//     })
// })









