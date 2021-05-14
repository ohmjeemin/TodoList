
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

const addToDo = text => {

    const listArea = document.getElementById("listArea");
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
    
    checkBox.classList.add("material-icons", "check");
    delBtn.classList.add("material-icons", "del-btn");
    todo.innerText = text;

    listArea.appendChild(li);
    document.getElementById("textBox").value = "";

    div.addEventListener("click", () => {
        if(li.className==="list"){
            li.classList.add("list", "done");
            todo.className = "done-task";
        }else {
            li.classList.remove("done");
            todo.className = "";
        }
    })
}
