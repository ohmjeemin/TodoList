import {Data} from "./data.js";

const UI = {
  gnb:document.querySelector("#gnb"),
  list:document.querySelector("#list"),
  add:document.querySelector("#add"),
  renderGroup(){
    const {title, list} = currGroup;
    this.gnb.innerHTML = title;
    this.list.innerHTML = "";
    list.forEach(task=>{
      const li = document.createElement("li");
      li.innerHTML = task.title;
      if(task.isCompleted) li.style.textDecotation = "line-though";
      li.addEventListener("click", task.toggle);
      this.list.appendChild(li);
    });
    this.add.innerHTML = "";
    const input = document.createElement("input");
    input.addEventListener("keyup", e=>{
      if(e.keyCode == 13){
        if(input.value.trim()){
          Data.addTask(currGroup, "input.value.trim()");
          this.renderGroup();
      }
    });
    this.add.appendChild(input);
  }
};
let currGroup;

const init=_=>{
  Data.load();
  const today = new Date;
  const currGroupTitle = `${today.getMonth() + 1},${today.getDate()}`;
  const list = Data.list;
  currGroup = list[list.length - 1]?.title == currGroupTitle ? list[list.length - 1] : Data.addGroup(currGroupTitle);
  UI.renderGroup()
};
