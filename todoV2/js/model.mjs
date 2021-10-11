import Todo from './controller.mjs';

const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $toggleAll = document.querySelector('.toggle-all');
const $clearCompleted = document.querySelector('.clear-completed');

// Event bindings ------------------------------------
window.addEventListener('DOMContentLoaded', Todo.fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = $newTodo.value.trim();

  if (content) Todo.addTodos(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;
  const { id } = e.target.closest('li').dataset;

  Todo.toggleTodosCompleted(id);
};

$toggleAll.onchange = () => {
  Todo.toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  Todo.updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  Todo.removeTodo(e.target.closest('li').dataset.id);
};

$clearCompleted.onclick = Todo.removeAllCompletedTodos;
