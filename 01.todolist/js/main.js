
document.getElementById("month").textContent
    = moment().format("MMM");

document.getElementById("day").textContent
    = moment().format("DD");

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function(){
    const text = document.getElementById("textBox").value;
    addToDo(text);
})

// < div
// className = "list" >
//     < div
// className = "checkbox" > < span
// className = "material-icons check" > done < /span></
// div >
// < span > 장보기 < /span>
// <span className="material-icons del-btn">cancel</span>
//</div>

const addToDo = text => {
    console.log(text);
    
   // const ul = document.createElement("ul");

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
    checkBox.classList.add("material-icons", "check");
    delBtn.classList.add("material-icons", "del-btn");
    todo.innerText = text;

    listArea.appendChild(li);
}