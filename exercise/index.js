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
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});