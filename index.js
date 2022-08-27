const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value) {
    todoList.innerHTML += `<li>${todoInput.value}</li>`;
  }
  todoInput.value = null;
});

todoList.addEventListener("click", (e) => {
  e.target.remove();
});
