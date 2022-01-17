let task = document.getElementById("title");
let description = document.getElementById("description");
let addTaskBtn = document.getElementById("save");

let tasks = [];

/* 
To save data to localstorage
*/
function saveData(tasks) {
    let data = JSON.stringify(tasks);
    localStorage.setItem("todos", data);
}
/*
To load data from localstorage
*/
function loadData() {
    let tasksList = localStorage.getItem("todos");
    let data = JSON.parse(tasksList);
    return data;
}
/* 
To add task to the list
*/
function addTask() {
    let taskInputVal = task.value;
    let descInputVal = description.value;
    let list = { title: taskInputVal, description: descInputVal }
    tasks.push(list);
    displayTask();
    saveData(tasks);
}

/*
To display the tasks from the list
*/
function displayTask() {
    let data = loadData();
    let col_8 = document.querySelector(".col-8");
    if (data) {
        data.forEach(item => {
            // create card
            let card = document.createElement("div");
            card.className = "card p-3 m-2"
            //create row in card
            let row = document.createElement("div");
            row.className = "row";
            // create fisrt col-6 
            let col_6_1 = document.createElement("div");
            col_6_1.className = "col-6";
            // create h6 for title and add text
            let h6 = document.createElement("h6");
            h6.textContent = item.title;
            col_6_1.appendChild(h6);
            row.appendChild(col_6_1);
            // create second col-6 and set classname
            let col_6_2 = document.createElement("div");
            col_6_2.className = "col-6";
            // create checkbox to check is task done
            let checkTask = document.createElement("input");
            checkTask.type = "checkbox";
            checkTask.id = "isDone";
            checkTask.className = "float-end";
            col_6_2.appendChild(checkTask);
            row.appendChild(col_6_2);
            // create paragraph for description
            let p = document.createElement("p");
            p.textContent = item.description;
            row.appendChild(p);
            // create button delete
            let deleteBtn = document.createElement("a");
            deleteBtn.href = "#";
            let deleteLable = document.createTextNode("Delete");
            deleteBtn.appendChild(deleteLable);
            // create button edit
            let editBtn = document.createElement("a");
            editBtn.href = "#";
            let editLable = document.createTextNode("Edit");
            editBtn.appendChild(editLable);

            // create span
            let span = document.createElement("span");
            let space = document.createTextNode(" | ");
            span.appendChild(deleteBtn);
            span.appendChild(space);
            span.appendChild(editBtn);

            row.appendChild(span);
            card.appendChild(row);
            col_8.appendChild(card);
        });
    }
}
loadData();
displayTask();
addTaskBtn.addEventListener('click', addTask);