//투두추가

const addTodoBtn = document.getElementById('btnAdd');


addTodoBtn.addEventListener('click', addTodo);

// function createEl(el){
//    return document.createElement(el);
// }


function addTodo(){

    const todoInput = document.getElementById('todotext');
    const textnode = document.createTextNode(todoInput.value);
    const tr = document.createElement('tr');
    const trCheck = document.createElement('td');
    const input = document.createElement('input');

    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');
    trCheck.appendChild(input);

    const trText = document.createElement('td');
    trText.appendChild(textnode);

    tr.appendChild(trCheck);
    tr.appendChild(trText);

    const tbody = document.getElementById('listBody');
    tbody.appendChild(tr);
    todoInput.value = "";

}

//선택 완료
let selCompletedBtn = document.getElementById('DeleteSel');

selCompletedBtn.addEventListener('click',  delTodo)

function delTodo(){
    let checkbox = document.querySelectorAll('.btn-chk');

    for(let i=0; i<checkbox.length; i++){
        let item = checkbox.item(i);
        let checkResult = item.checked;

        if(checkResult){
            let parent = item.parentNode.parentNode;
            parent.parentNode.removeChild(parent);
            addDoneList(parent);
        }
    }
}

//donelist에 추가
function addDoneList(item){
    let doneList = document.getElementById('done-listBody');
    item.firstChild.firstChild.checked=false;
    doneList.appendChild(item);
}


//전체 완료
let allCompletedBtn = document.getElementById('btnDelAll');
let trList = document.getElementById('listBody').children;

allCompletedBtn.addEventListener('click', function(){
    for(let i=0; i<trList.length; i++) {
        let compTr = trList[i];
        trList[i].remove();
        i--;
        addDoneList(compTr)
    }
})