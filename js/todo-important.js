const toDoFormImportant = document.getElementById("todo-form-important");
const toDoInputImportant = document.querySelector("#todo-form-important input");
const toDoListImportant = document.getElementById("todo-list-important");

const TODOS_KEY_IMPORTANT = "todosImportant";

let toDosImportant = [];

function saveToDosImportant() {
  localStorage.setItem(TODOS_KEY_IMPORTANT, JSON.stringify(toDosImportant));
}

function deleteToDoImportant(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDosImportant = toDosImportant.filter(
    (toDoImportant) => toDoImportant.id !== parseInt(li.id)
  );
  saveToDosImportant();
}

function paintToDoImportant(newTodoImportant) {
  const li = document.createElement("li");
  li.id = newTodoImportant.id;
  const span = document.createElement("span");
  span.innerText = newTodoImportant.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDoImportant);
  li.appendChild(span);
  li.appendChild(button);
  toDoListImportant.appendChild(li);
}

function handleToDoSubmitImportant(event) {
  event.preventDefault();
  const newTodoImportant = toDoInputImportant.value;
  toDoInputImportant.value = "";
  const newTodoObjImportant = {
    text: newTodoImportant,
    id: Date.now(),
  };
  toDosImportant.push(newTodoObjImportant);
  paintToDoImportant(newTodoObjImportant);
  saveToDosImportant();
}

toDoFormImportant.addEventListener("submit", handleToDoSubmitImportant);

const savedToDosImportant = localStorage.getItem(TODOS_KEY_IMPORTANT);

if (savedToDosImportant !== null) {
  const parsedToDosImportant = JSON.parse(savedToDosImportant);
  toDosImportant = parsedToDosImportant;
  parsedToDosImportant.forEach(paintToDoImportant);
}
