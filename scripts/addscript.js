// 페이지 로드 시 localStorage에서 Todo 항목을 가져와서 화면에 표시
document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
  });
  
// Todo 추가 함수
function addTodo() {
  const input = document.getElementById('todoInput');
  const todoText = input.value.trim();

  if (todoText !== "") {
    // Todo 객체 생성
    const todo = {
      id: Date.now(),
      text: todoText
    };

    // Todo를 화면에 추가
    addTodoToList(todo);

    // localStorage에 Todo 저장
    saveTodoToLocalStorage(todo);
    
    // 입력 필드 초기화
    input.value = '';

    // 스크롤 맨 아래로 이동
    scrollToBottom();
  } else {
    alert('할 일을 입력하세요!');
  }
}
  
// Todo를 화면에 추가하는 함수
function addTodoToList(todo) {
    try {
      const todoList = document.getElementById('todoList');
      const li = document.createElement('li');
      li.textContent = todo.text;
      li.dataset.id = todo.id; // 데이터셋에 Todo의 id를 저장
      todoList.appendChild(li);
    } catch (error) {
      console.error('Todo를 화면에 추가하는 도중 에러가 발생했습니다:', error);
    }
  }
  
// localStorage에 Todo를 저장하는 함수
function saveTodoToLocalStorage(todo) {
  try {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('localStorage에 Todo를 저장하는 도중 에러가 발생했습니다:', error);
  }
}
  
// localStorage에서 Todo를 로드하여 화면에 표시하는 함수
function loadTodos() {
  try {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(function(todo) {
      addTodoToList(todo);
    });
  } catch (error) {
    console.error('localStorage에서 Todo를 로드하는 도중 에러가 발생했습니다:', error);
  }
}
  
  
// 화면 맨 아래로 스크롤하는 함수
function scrollToBottom() {
  const todoListSection = document.querySelector('.todo-list-section');
  todoListSection.scrollTop = todoListSection.scrollHeight;
}
  