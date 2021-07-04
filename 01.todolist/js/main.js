


document.getElementById("month").textContent
    = moment().format("MMM");

document.getElementById("day").textContent
    = moment().format("DD");

let total =0;
let done = 0;

// + 버튼에 이벤트 걸기
document.getElementById("add-btn")
    .addEventListener("click", (event) =>{
        event.preventDefault();
        const text = document.getElementById("textBox").value;
        if(text.length < 1) return false;
        addToDo(text);
})

// 투두 블럭 만들기
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

// 리스트에 넣기
const addToDo = text => {
    const listArea = document.getElementById("listArea");
    const el = makeToDoItem(text);
    listArea.appendChild(el);
    document.getElementById("textBox").value = "";
    //progressbar 색칠하기
    const progressBar = document.getElementById("bar");
    total ++;
    paintBar(progressBar, total, done)
}

const doneToDo = e => {
    const liSelected = e.target.closest("li");
    if(!liSelected) return;
    const taskSelected = liSelected.querySelector(".task");
    const uncheckedBox = liSelected.querySelector(".material-icons.unchecked");
    //진행중->완료
    if(liSelected.className==="list"){
        liSelected.classList.add("done");
        taskSelected.classList.add("done");
        uncheckedBox.innerHTML = "check_circle_outline";
        done ++;
        const progressBar = document.getElementById("bar");
        paintBar(progressBar, total, done)
    }// 완료->진행중
    else {
        liSelected.classList.remove("done");
        taskSelected.classList.remove("done");
        uncheckedBox.innerHTML="radio_button_unchecked";
        done --;
        const progressBar = document.getElementById("bar");
        paintBar(progressBar, total, done)
    }
}


const listArea = document.getElementById("listArea");
listArea.addEventListener("click", doneToDo)


const paintBar = (el, totalCnt, doneCnt) => {
    let result = 0;
    if(doneCnt!==0) {
        result = Math.round(doneCnt/totalCnt*100);
    }
    el.style.width = `${result}%`;
}