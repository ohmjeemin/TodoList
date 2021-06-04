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
    this.list.push(new TaskGroup(title));
  }
  addTask(group, title){
    if(this.list.indexOf(group) == -1) throw "invalid group";
    group.add(new Task(title));
  }
  get list(){
    return [...list];
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
  }
  get title(){
    return this.#title;
  }
  get list(){
    return [...this.#list];
  }
  add(task){
    this.#list.add(task);
  }
  remove(task){
    this.#list.delete(task);
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
  }
  get title(){
    return this.#title;
  }
  get isCompleted(){
    return this.#isCompleted
  }
  toggle(){
    this.#isCompleted = !this.#isCompleted;
  }
  toJSON(){
    return `{"title":"${this.#title}", "isCompleted":${this.#isCompleted}}`
  }
}
export {list}
