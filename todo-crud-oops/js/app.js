const todoList = new TodoList();
const ui = new UI(todoList);

// Add button
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("todoInput");
  if (input.value.trim() !== "") {
    todoList.addTodo(input.value);
    input.value = "";
    ui.renderTodos();
  }
});

// Delete
document.getElementById("todos").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = Number(e.target.dataset.id);
    todoList.deleteTodo(id);
    ui.renderTodos();
  }
});

// Toggle Complete
document.getElementById("todos").addEventListener("change", (e) => {
  if (e.target.classList.contains("toggle")) {
    const id = Number(e.target.dataset.id);
    todoList.toggleCompletion(id);
    ui.renderTodos();
  }
});

// Update Title
document.getElementById("todos").addEventListener("input", (e) => {
  if (e.target.classList.contains("title")) {
    const id = Number(e.target.dataset.id);
    todoList.updateTodo(id, e.target.textContent);
  }
});
