const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (!inputBox.value) {
        alert("A tarefa não pode ser vazia.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "✖";
        li.appendChild(span);
    }
    inputBox.value = "";
}

document.addEventListener('keydown', function(event) {
    const enterKey = 'Enter';
    if (event.key === enterKey) {
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);