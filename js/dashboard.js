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

// Load from LocalStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach((task, index) => {
    const li = createElement(task.title, task.description, index + 1);
    ul.appendChild(li);
});

addTaskSection.addTaskBtn.addEventListener('click', ()=>{
    const titlevalue = addTaskSection.title.value;
    const descripvalue = addTaskSection.description.value;
    if(titlevalue && descripvalue){
        addtasks(titlevalue,descripvalue);
        addTaskSection.title.value = "";
        addTaskSection.description.value = "";
        addTaskSection.mainContainer.classList.add('hidden');
    } else {
        alert("Please enter title and description");
    }
})

function addtasks(title,description){
    // Save to LocalStorage
    tasks.push({ title, description });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const index = ul.children.length + 1;
    const li = createElement(title, description, index);
    ul.appendChild(li);
}

function createElement(title, description, index){
    let li = document.createElement('li');
    li.classList.add('task-con');
    li.innerHTML = `
        <div class="task">
            <h3>#${index} ${title}</h3>
            <p>${description}</p>
        </div>
    `;
    return li;
}

