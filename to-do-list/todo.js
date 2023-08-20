const form = document.querySelector("form");
const list = document.getElementById("list");
const newTask = document.getElementById("task");
const tasks = document.querySelectorAll("#list > li");

// localstorage
const storeList = () => {
    window.localStorage.todoList = list.innerHTML;
}
// to get and read localstorage
const getTodos = () => {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li class="task">Click on the task to remove it</li>`
    }
} 

window.addEventListener('load', getTodos);

const todoMaker = () => {
    //create new task
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        task = document.createElement("li");
        task.classList.add("task");
        list.appendChild(task);
    
        task.innerText = newTask.value;

        storeList();
        newTask.value = "";
    })

    //check and remove a task
    list.addEventListener("click", (e) => {
        //in ul, we detect in wich element we clicks, and we removed it
        if(e.target.classList.contains('done')) {
            e.target.remove();
        } else {
            e.target.classList.add('done');
        }
        storeList();
    })
}

todoMaker();