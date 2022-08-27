const form = document.querySelector("form");

const storeList = () => {
  window.localStorage.todoStorage = todoList.innerHTML;
};

const getList = () => {
  todoList.innerHTML = window.localStorage.todoStorage;
};

getList();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value) {
    todoList.innerHTML += `<li>${todoInput.value}</li>`;
  }
  todoInput.value = null;
  storeList();
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList != "") {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
