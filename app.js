// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
fileteOption.addEventListener('click', filterTodo);


// Functions
function addTodo(event) {
    // prevent from submitting
    event.preventDefault();
//  Todo DIV
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
    // Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild (newTodo);
     // Check MARK BUTTON
        const completedButton = document.createElement("button");
        completedButton.innerHTML= '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild( completedButton);
        // Check Trash BUTTON
        const trashButton = document.createElement("button");
        trashButton.innerHTML= '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild( trashButton);

        // Append To List
        todoList.appendChild(todoDiv);

        // clear Todo INPUT VALUE
        todoInput.value = "";
}

function deletecheck(e) {
    const item = e.target;

    // Delete TODO

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
         });
     }
        //  CHECK MARK
        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
    
        }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach (function(todo){
        switch(e.target.value){
            case "all":
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display ='flex';

                }else {
                    todo.style.display ="no"
                }
        }
    });
}


