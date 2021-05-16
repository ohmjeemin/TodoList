
document.getElementById("month").textContent
    = moment().format("MMM");

document.getElementById("day").textContent
    = moment().format("DD");


document.getElementById("add-btn")
    .addEventListener("click", (event) =>{
        event.preventDefault();
        const text = document.getElementById("textBox").value;
        if(text.length < 1) return false;
        addToDo(text);
})

const doneToDo = e => {
    const liSelected = e.target.closest("li");
    if(!liSelected) return;
    const taskSelected = liSelected.querySelector(".task");
    const uncheckedBox = liSelected.querySelector(".material-icons.unchecked");
    if(liSelected.className==="list"){
        liSelected.classList.add("done");
        taskSelected.classList.add("done");
        uncheckedBox.innerHTML = "check_circle_outline"
    }else {
        liSelected.classList.remove("done");
        taskSelected.classList.remove("done");
        uncheckedBox.innerHTML="radio_button_unchecked";
    }
}

const listArea = document.getElementById("listArea");
listArea.addEventListener("click", doneToDo)

const makeToDoItem = text => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkBox = document.createElement("span");
    const todo = document.createElement("span");
    const delBtn = document.createElement("span");

    li.appendChild(div).appendChild(checkBox);
    li.appendChild(todo);
    li.appendChild(delBtn);

    li.className = "list";
    div.className = "checkbox";
    div.setAttribute("name", "checkbox");

    checkBox.classList.add("material-icons", "unchecked");
    checkBox.innerText="radio_button_unchecked";
    delBtn.classList.add("material-icons", "del-btn");
    delBtn.innerText="cancel";
    todo.innerText = text;
    todo.className = "task"

    return li;
}


const addToDo = text => {
    const listArea = document.getElementById("listArea");
    const el = makeToDoItem(text);
    listArea.appendChild(el);
    document.getElementById("textBox").value = "";
}

