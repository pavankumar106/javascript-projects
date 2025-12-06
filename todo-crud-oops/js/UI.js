class UI {
  constructor(todoList) {
    this.todoList = todoList;
    this.todoContainer = document.getElementById("todos");
  }
  renderTodos() {
    this.todoContainer.innerHTML = "";
    this.todoList.getTodos().forEach((todo) => {
      const div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} data-id="${
        todo.id
      }" class="toggle">
        <span contenteditable="true" class="title" data-id="${todo.id}">
          ${todo.title}
        </span>
        <button class="delete" data-id="${todo.id}">X</button>
      `;
      this.todoContainer.appendChild(div);
    });
  }
}
