//import {err} from "./test.js"
let list = [];
const Data = {
  load(){
    const raw = localstorage["ojmTodo"] ?? "";
    list = raw ? JSON.parse(raw).map(it=>new TaskGroup().parse(it)) : [];
  }
  save(){
    localstorage["ojmTodo"] = JSON.stringify(list);
  }
  addGroup(title){
    const group = new TaskGroup(title);
    this.list.push(group);
    this.save();
    return group;
  }
  addTask(group, title){
    if(list.indexOf(group) == -1) throw "invalid group";
    const task = new Task(title);
    group.add(task);
    this.save();
    return task;
  }
  get list(){
    return [...list];
  }
  prev(group){
    const idx = list.indexOf(group);
    if(idx == -1) throw "invalid group";
    return idx > 0 ? list[idx - 1] : null;
  }
  next(group){
    const idx = list.indexOf(group);
    if(idx == -1) throw "invalid group";
    return idx < list.length - 1 ? list[idx + 1] : null;
  }
};
const TaskGroup = class{
  #list = new Set;
  #title = "";
  constructor(title){
    this.#title = title;
  }
  parse(obj){
    this.#title = obj.title;
    obj.list.forEach(it=>this.add(new Task().parse(it)));
    return this;
  }
  set title(v){
    this.#title = v;
    Data.save();
  }
  get title(){
    return this.#title;
  }
  get list(){
    return [...this.#list];
  }
  add(task){
    this.#list.add(task);
    Data.save();
  }
  remove(task){
    this.#list.delete(task);
    Data.save();
  }
  toJSON(){
    return `{
      "title":"${this.#title}",
      "list":[${[...this.#list].reduce((acc,it)=>acc + "," + it.toJSON(), "").substr(1)}]
    }`;
  }
};
const Task = class{
  #title = "";
  #isCompleted = false;
  constructor(title){
    this.#title = title;
  }
  parse(obj){
    this.#title = obj.title;
    this.#isCompleted = obj.isCompleted;
    return this;
  }
  set title(v){
    this.#title = v;
    Data.save();
  }
  get title(){
    return this.#title;
  }
  get isCompleted(){
    return this.#isCompleted
  }
  toggle(){
    this.#isCompleted = !this.#isCompleted;
    Data.save();
  }
  toJSON(){
    return `{"title":"${this.#title}", "isCompleted":${this.#isCompleted}}`
  }
}
export {Data}
