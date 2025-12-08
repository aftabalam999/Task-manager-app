document.getElementById('logout').addEventListener('click', ()=>{
    window.location.href = "../index.html";
})

const addtask = document.getElementById('addTask');
const pendingTask = {
    pendingMainContainer : document.getElementById('addMainCon'),
}
const addTaskSection = {
    mainContainer : document.getElementById('addMainCon'),
    title : document.getElementById('taskTitle'),
    description : document.getElementById('taskDesc'),
    addTaskBtn : document.getElementById('addTaskBtn'),
    cancelBtn : document.getElementById('cancelBtn'),

}
addtask.addEventListener('click', ()=>{
    addTaskSection.mainContainer.classList.remove('hidden');
});

addTaskSection.cancelBtn.addEventListener('click', ()=>{
    addTaskSection.mainContainer.classList.add('hidden');
})
const ul = document.querySelector("#ul");

addTaskSection.addTaskBtn.addEventListener('click', ()=>{
    const titlevalue = addTaskSection.title.value;
    const descripvalue = addTaskSection.description.value;
    // addtasks(titlevalue,descripvalue);
    ul.innerHTML=`<li>hello</li>`;
})

function addtasks(title,description){
    console.log(title);
    console.log(description);

}

// function createElement(){
//     let div 
// }