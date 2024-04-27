const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (!inputBox.value) {
        alert("A tarefa não pode ser vazia.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

document.addEventListener('keydown', function(event) {
    const enterKey = 'Enter';
    if (event.key === enterKey) {
        addTask();
    }
});