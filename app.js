//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");



//Event Listerners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


function addTodo(event){
event.preventDefault();
//todo div
const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');
//create li
const newTodo=document.createElement('li');
newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// completed /checked
const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Trash button
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//append to list
todoList.appendChild(newTodo);
//clear todo input value
todoInput.value="";
}
function deleteCheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;

        //Animation
      
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }

    //check mark
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");

    }
}
