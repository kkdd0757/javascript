// state---------
let todos = [];
let currentFilter = 'all';

// state function ------------------------------------
const $main = document.querySelector('.main');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $todoList = document.querySelector('.todo-list');
const $clearCompleted = document.querySelector('.clear-completed');

const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
        <div class="view">
          <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
          <label>${content}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
      </li>
    `
    )
    .join('');

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  const activeTodos = todos.filter(todo => !todo.completed);
  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

const setTodos = newTodos => {
  todos = newTodos;
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  render();
};

export { todos, setTodos, setFilter };
