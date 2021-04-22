//todo 추가
var btnAddEl =document.getElementById('btnAdd');

btnAddEl.addEventListener('click', function(){
    addTodo();
});

function addTodo(){

    var todotext =document.getElementById('todotext').value;
    var textnode = document.createTextNode(todotext);
    //console.log(textnode);

    var tr = document.createElement('tr');
    var td01 = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');
    td01.appendChild(input);

    var td02 = document.createElement('td');
    td02.appendChild(textnode);

    tr.appendChild(td01);
    tr.appendChild(td02);


    var tbody = document.getElementById('listBody');
    tbody.appendChild(tr);
    document.getElementById('todotext').value = ''; //input text 초기화

    // console.log(tbody);
}


//선택 완료
var DeleteSel = document.getElementById('DeleteSel');
var DelList = new Array();


DeleteSel.addEventListener('click', function(){

    delTodo();

});

//선택 완료
function delTodo(){
    var checkbox = document.querySelectorAll('.btn-chk');
    //onsole.log(checkbox.length);

    for(var i=0; i<checkbox.length; i++){
        var item = checkbox.item(i);
        //console.log(item);
        var checkResult = item.checked;
        //console.log(checkResult);

        if(checkResult){
            var parent = item.parentNode.parentNode;
            //console.log(parent);
            parent.parentNode.removeChild(parent);
            addDoneList(parent);
        }
    }
}

//donelist에 추가
function addDoneList(item){
    var doneList = document.getElementById('done-listBody');
    item.firstChild.firstChild.checked=false;
    doneList.appendChild(item);
}


//전체 완료
var delAllBtn = document.getElementById('btnDelAll');
var tbody = document.getElementById('listBody');
var trList = tbody.children;

delAllBtn.addEventListener('click', function(){
    console.log(trList.length);

    for(var i=0; i<trList.length; i++){
        var trOne = trList[i];
        //console.log(trOne);
        trOne.parentNode.removeChild(trOne);
        addDoneList(trOne);
    }
})