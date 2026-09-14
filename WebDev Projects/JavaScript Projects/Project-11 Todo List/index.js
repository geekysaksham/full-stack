const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [{
    id: Date.now(),
    text: "Go to Gym",
    isCompleted: false
}, {
    id: Date.now(),
    text: "Revision WebDev",
    isCompleted: true
}, {
    id: Date.now(),
    text: "Take Class",
    isCompleted: false
}];

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value;
    // console.log(todoValue);
    todos.push(todoValue);

    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    }

    addTodo(newTodo);
})

function renderTodo() {
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
        li.innerHTML = `
                        <input data-id=${todo.id} ${todo.isCompleted === true ? 'checked' : ""} type="checkbox" name="" id="">
                        <p class="flex-1">${todo.text}</p>

                        <div class="flex gap-2">
                            <button data-action="edit" data-id=${todo.id}>Edit</button>
                            <button data-action="delete" data-id=${todo.id}>Delete</button>
                        </div>
    `
        todoList.append(li);
    })
}

renderTodo();

function addTodo(todo) {
    const li = document.createElement("li");
    // li.textContent = todo.text;
    // data-id="1"
    li.dataset.id = todo.id;
    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = `
                        <input data-id=${todo.id} ${todo.isCompleted === true ? 'checked' : ""} type="checkbox" name="" id="">
                        <p class="flex-1">${todo.text}</p>

                        <div class="flex gap-2">
                            <button data-action="edit" data-id=${todo.id}>Edit</button>
                            <button data-action="delete" data-id=${todo.id}>Delete</button>
                        </div>
    `
    todoList.append(li);
}

function deleteTodo(e,id) {
    e.target.closest("li").remove();

    todos = todos.filter((todo) => {
        if(todos.id !== Number(id)) return todo;
    })

}

todoList.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    let btn = e.target.closest("button");
    let action = btn?.dataset?.action;
    let id = li?.dataset?.id;
    let checkbox = e.target.closest("input[type = 'checkbox']");
    console.log(checkbox);

    if(action === "edit"){
        //edit wala part
        console.log("editing.....");
    }
    if(action === "delete"){
        deleteTodo(e,id);
    }
    if(checkbox){
        todos = todos.map((todo) => {
            if(todo.id === Number(id)){
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }
            }
            else return todo;
        })
        console.log(todos);
    }
})