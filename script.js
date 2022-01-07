// dark && Light Mode
const mode = document.querySelector("#mode");
const sun = document.querySelector("#sun");
sun.addEventListener("click", () => {
    mode.href = "http://127.0.0.1:5500/style.light.css";
    }
);

const moon = document.querySelector("#moon");
moon.addEventListener("click", () => {
    mode.href = "http://127.0.0.1:5500/style-dark.css";
    }
);
// Add to do list
const input = document.querySelector("#input");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");
const deletBtn = document.querySelectorAll(".delete-item");



// delete to do
const deleteToDo = (e) => {
    console.log(e.target); 
    e.target.parentElement.remove();
}

// complete task 
// const completeTask = (e) => {
//     e.target.parentElement.classList.toggle("completed");
// }
const addToDo = () => {
    if (input.value.length > 0) {
        const li = document.createElement("li");
        const left = document.createElement("div");
        left.className = "left";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "todo-checkbox";
        checkbox.addEventListener("click", (e) => {
            if (checkbox.checked) {
                e.target.parentElement.parentElement.classList.toggle("completed");
            }
        });
            
        const span = document.createElement("span");
        span.innerText = input.value;
        const del = document.createElement("span");
        del.innerText = "╳";
        del.className = "delete-item";
        del.addEventListener("click", deleteToDo);
        left.appendChild(checkbox);
        left.appendChild(span);
        li.appendChild(left);
        li.appendChild(del);
        ul.appendChild(li);
        input.value = "";
       }else{
             alert("Please enter a task");
       }
};

add.addEventListener("click", () => {
    addToDo();
 
});
// add to do while pressing keyup
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        addToDo();
    }
});







