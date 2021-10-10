import {
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  addTodos,
  removeAllCompletedTodos,
  toggleTodosCompleted,
  fetchTodos
} from './controller.mjs';

const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $toggleAll = document.querySelector('.toggle-all');
const $clearCompleted = document.querySelector('.clear-completed');

// Event bindings ------------------------------------
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = $newTodo.value.trim();

  if (content) addTodos(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;
  const { id } = e.target.closest('li').dataset;

  toggleTodosCompleted(id);
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.closest('li').dataset.id);
};

$clearCompleted.onclick = removeAllCompletedTodos;
