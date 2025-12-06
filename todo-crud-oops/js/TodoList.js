class TodoList {
  constructor() {
    this.todos = [];
  }
  addTodo(title) {
    const id = Date.now();
    const todo = new Todo(id, title);
    this.todos.push(todo);
    return todo;
  }
  getTodos() {
    return this.todos;
  }
  updateTodo(id, title) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.title = title;
    }
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
  toggleCompletion(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }
}
