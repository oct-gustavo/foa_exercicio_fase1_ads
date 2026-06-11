const inputBox = document.getElementById("task-input");
const taskList = document.getElementById("list-task");

function addTask(){
    if (inputBox.value === '') {
        alert("Você deve digitar uma tarefa!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
    }
    inputBox.value = "";
}