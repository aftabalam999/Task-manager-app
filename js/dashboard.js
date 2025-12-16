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
const completedUl = document.querySelector("#completedUl");


/***********
 *  Load from LocalStorage
 ***********/
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editMode = false;
let editId = null;

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    ul.innerHTML = "";
    completedUl.innerHTML = "";
    
    let pendingCount = 1;
    let completedCount = 1;

    tasks.forEach(task => {
        if(!task.completed){
            const li = createElement(task, pendingCount, false);
            ul.appendChild(li);
            pendingCount++;
        } else {
            const li = createElement(task, completedCount, true);
            completedUl.appendChild(li);
            completedCount++;
        }
    });
}
renderTasks();

addTaskSection.addTaskBtn.addEventListener('click', ()=>{
    const titlevalue = addTaskSection.title.value;
    const descripvalue = addTaskSection.description.value;
    if(titlevalue && descripvalue){
        if(editMode){
            updateTask(editId, titlevalue, descripvalue);
        } else {
            addtasks(titlevalue,descripvalue);
        }
        
        addTaskSection.title.value = "";
        addTaskSection.description.value = "";
        addTaskSection.mainContainer.classList.add('hidden');
        editMode = false;
        editId = null;
        addTaskSection.addTaskBtn.innerText = "Add Task";
    } else {
        alert("Please enter title and description");
    }
})

function addtasks(title,description){
    const task = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
}

function updateTask(id, title, description){
    tasks = tasks.map(t => t.id === id ? {...t, title, description} : t);
    saveTasks();
    renderTasks();
}


/***********
 * Global functions for onclick events
 ***********/
window.deleteTask = function(id){
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

window.completeTask = function(id){
    tasks = tasks.map(t => t.id === id ? {...t, completed: true} : t);
    saveTasks();
    renderTasks();
}

window.editTask = function(id){
    const task = tasks.find(t => t.id === id);
    if(task){
        addTaskSection.title.value = task.title;
        addTaskSection.description.value = task.description;
        addTaskSection.mainContainer.classList.remove('hidden');
        addTaskSection.addTaskBtn.innerText = "Save";
        editMode = true;
        editId = id;
    }
}

function createElement(task, index, isCompleted){
    let li = document.createElement('li');
    li.classList.add('task-con');
    
    let buttons = '';
    if(!isCompleted){
        buttons = `
            <button onclick="editTask(${task.id})" class="button" style="width:auto; margin-right:5px; color: blue; border-color: blue;">Edit</button>
            
            <button onclick="deleteTask(${task.id})" class="button" style="width:auto; color:red; border-color:red;">Delete</button>

            <button onclick="completeTask(${task.id})" class="button" style="width:auto; margin-right:5px; color: green; border-color: green;">Mark as Completed</button>

        `;
    } else {
         buttons = `
            <button onclick="deleteTask(${task.id})" class="button" style="width:auto; color:red; border-color:red;">Delete</button>
        `;
    }

    li.innerHTML = `
        <div class="task">
            <h3>${index}. ${task.title}</h3>
            <p>${task.description}</p>
            <div style="margin-top:10px;">
                ${buttons}
            </div>
        </div>
    `;
    return li;
}

