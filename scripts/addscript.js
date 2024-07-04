function addTodo() {
    // input element 가져오기
    var input = document.getElementById('todoInput');
    
    // input의 값 가져오기
    var todoText = input.value;
    
    // 값이 비어있는지 확인
    if (todoText.trim() === "") {
      alert('할 일을 입력하세요!');
      return; // 함수 실행 중단
    }
    
    // 새로운 리스트 아이템 만들기
    var li = document.createElement('li');
    li.textContent = todoText;
    
    // 리스트에 아이템 추가
    document.getElementById('todoList').appendChild(li);
    
    // input 초기화
    input.value = '';
  }