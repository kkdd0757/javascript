let todos = [];
const $main = document.querySelector('.main');
const $newTodo = document.querySelector('.new-todo');
const $footer = document.querySelector('.footer');
const $filters = document.querySelector('.filters');
const $toggleAll = document.querySelector('.toggle-all');
const $view = document.querySelector('.view');
const $todoList = document.querySelector('.todo-list');
const $clearCompleted = document.querySelector('.clear-completed');
const $todoCount = document.querySelector('.todo-count');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');

//렌더링
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) =>
        ` <li data-id="${id}">
      <div class="view">
      <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
      <label>${content}</label>
      <button class="destroy"></button>
      </div>
      <input class="edit" value="${content}" />
      </li>`
    )
    .join('');
  $todoCount.textContent = `${todos.length} ${todos.length <= 1 ? 'item left' : 'items left'}`;
  // $todoCount.textContent = todos.length + (todos.length <= 1 ? 'item left' : 'items left');
};

// completed와 active 나누기
const activeStatus = todos.filter(todo => [todo.completed !== true]);
const completedStatus = todos.filter(todo => [todo.completed !== false]);

// setTodos (추가하고 서버에 추가)
const setTodos = newTodos => {
  console.log(todos, newTodos);
  todos = newTodos;
  render();
};

const fetchTodos = () => {
  setTodos([
    {
      id: 3,
      content: 'JavaScript',
      completed: false,
    },
    {
      id: 2,
      content: 'CSS',
      completed: true,
    },
    {
      id: 1,
      content: 'HTML',
      completed: false,
    },
  ]);
};

// 새로 등록될 id는 현재 최대값+1
const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

//추가해줄 요소 => id, 콘텐츠, completed
const addTodos = content =>
  setTodos([
    {
      id: generateTodoId(),
      content,
      completed: false,
    },
    ...todos,
  ]);
const toggleCompletedTodo = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    )
  );
};

// checked만 clear
const checkedClear = () => {
  setTodos(todos.filter(todo => todo.completed !== true));
};

// 해당 checked가 클릭되었다면 completed !todo.completed로 바꾸어주기
const toggleAllTodoId = checked => {
  setTodos(
    todos.map(todo => ({
      ...todo,
      completed: checked,
    }))
  );
};

// 해당 id를 지워라
const removeTodo = id => setTodos(todos.filter(todo => todo.id !== +id));

// tab panel에 추가
const activeTabPanel = () => setTodos(todos.filter([todo.completed !== true]));
const completedTabPanel = () => setTodos(todos.filter([todo.completed !== false]));

//더블클릭시 editing class 생김
const editTodo = (id, content) =>
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content: content } : todo)));

// Event Binding
window.addEventListener('DOMContentLoaded', fetchTodos);
// 클릭발생시 이벤트 onclick
$toggleAll.onclick = e => {
  // console.log(e.target.checked);
  toggleAllTodoId(e.target.checked);
};

$todoList.onclick = e => {
  if (e.target.classList.contains('destroy')) removeTodo(e.target.parentNode.parentNode.dataset.id);
  if (e.target.classList.contains('toggle'))
    toggleCompletedTodo(e.target.parentNode.parentNode.dataset.id);
};
// 더블클릭 발생시 이벤트
$todoList.ondblclick = e => {
  e.target.parentNode.parentNode.classList.add('editing');
};
$todoList.onkeydown = e => {
  if (e.key !== 'Enter') return;
  const content = e.target.value.trim();
  console.log(content);
  console.log(e.target.parentNode.dataset.id);
  editTodo(e.target.parentNode.dataset.id, content);
};

$clearCompleted.onclick = () => {
  checkedClear();
};
// $active.onclick = e => {
//   e.target.activeStatus();
// };

//enter
$newTodo.addEventListener('keyup', event => {
  const content = $newTodo.value.trim();
  if (event.key !== 'Enter') return;
  if (content) addTodos(content);

  $newTodo.value = '';
  $newTodo.focus();
});
