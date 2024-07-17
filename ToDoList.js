const input = document.getElementById("taskinput");
const button = document.getElementById("button");
const taskcount = document.getElementById("taskcount");
const tasklist = document.getElementById("tasklist");
let total = 0;

button.addEventListener("click", () => {
  const text = input.value;
  const li = document.createElement("li");
  li.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span>${text}</span>
            <button class="delete-btn">Delete</button>
            `;
  tasklist.appendChild(li);
  update (1);
  input.value = "";
  li.querySelector(".task-checkbox").addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.querySelector(".delete-btn").addEventListener("click", () => {
    tasklist.removeChild(li);
    update (-1);
  });
});
function update (change){
    total = total + change;
    taskcount.textContent = `Total tasks: ${total}`;
}

