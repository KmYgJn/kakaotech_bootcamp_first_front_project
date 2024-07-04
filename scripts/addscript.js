// 페이지 로드 시 localStorage에서 Todo 항목을 가져와서 화면에 표시
document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
  });
  
  // Todo 추가 함수
  function addTodo() {
    var input = document.getElementById('todoInput');
    var todoText = input.value.trim();
  
    if (todoText !== "") {
      // Todo 객체 생성
      var todo = {
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
    var todoList = document.getElementById('todoList');
    var li = document.createElement('li');
    li.textContent = todo.text;
    li.dataset.id = todo.id; // 데이터셋에 Todo의 id를 저장
    todoList.appendChild(li);
  }
  
  // localStorage에 Todo를 저장하는 함수
  function saveTodoToLocalStorage(todo) {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // localStorage에서 Todo를 로드하여 화면에 표시하는 함수
  function loadTodos() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(function(todo) {
      addTodoToList(todo);
    });
  }
  
  // 화면 맨 아래로 스크롤하는 함수
  function scrollToBottom() {
    var todoListSection = document.querySelector('.todo-list-section');
    todoListSection.scrollTop = todoListSection.scrollHeight;
  }
  