const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  addTodoItem(text);
  input.value = "";
});

function addTodoItem(text) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.className = "delete-btn";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  list.appendChild(li);
}
