const listsContainer = document.querySelector("[data-lists]");
const newlistForm = document.querySelector("[data-new-list-form]");
const newlistInput = document.querySelector("[data-new-list-input]");
const deleteListbutton = document.querySelector("[data-delete-list-button]");
const listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const api = {
  key: "148f47353c97fdf70d0cd1951904a49d",
  token: "3383abd611623dfd1495850cab9359147238afacc93b1f224e604f3218344a9a",
  base: "https://api.trello.com",
};

(async () => {
  const cards = await getCards(); //card id, board id, list id
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(cards));
})();

async function getListName(listId) {
  return await fetch(
    `${api.base}/1/lists/${listId}?key=${api.key}&token=${api.token}`
  )
    .then((res) => res.json())
    .then((data) => data.name);
}

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
async function getCards(boardID = "61de5518990cbc6ea8d2b398") {
  const resArr = await fetch(
    `${api.base}/1/boards/${boardID}/cards/?key=${api.key}&token=${api.token}`
  ).then((res) => res.json());
  const listNames = await Promise.all(
    resArr.map(async ({ idList }) => getListName(idList)),
  );
  const merged = resArr.map((d, i) => {
    const { name, idList, idBoard, closed, id } = d;
    return { name, idList, idBoard, complete: closed, id, list: listNames[i] };
  });
  const grouped = groupBy(merged, "list"); //

  const myList = [];
  for (let index = 0; index < Object.values(grouped).length; index++) {
    const cards = Object.values(grouped)[index];
    const listName = Object.keys(grouped)[index];
    myList.push({
      id: cards[0].idList,
      name: listName,
      tasks: cards.map((d) => ({
        id: d.id,
        name: d.name,
        complete: d.complete,
      })),
    });
  }
  return myList;
}

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListID = e.target.dataset.listId;
    saveAndRender();
  }
});

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListID);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});

deleteListbutton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListID);
  selectedListID = null;
  saveAndRender();
});

newlistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newlistInput.value;
  fetch(`https://api.trello.com/1/boards/${boardID = "61de5518990cbc6ea8d2b398"}/lists?name=${listName}&key=${api.key}&token=${api.token}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          console.log(
            `Response: ${response.status} ${response.statusText}`
          );
          return response.text();
        })
        .then(text => console.log(text))
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newlistInput.value = null;
  lists.push(list);
  saveAndRender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
    fetch(`https://api.trello.com/1/cards?name=${taskName}&idList=${selectedListID}&key=${api.key}&token=${api.token}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          console.log(
            `Response: ${response.status} ${response.statusText}`
          );
          return response.text();
        })
        .then(text => console.log(text))
  if (taskName == null || taskName === "") return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListID);
  selectedList.tasks.push(task);
  saveAndRender();
});

clearCompleteTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListID);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false };
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));

}

function render() {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find((list) => list.id === selectedListID);
  console.log(selectedList);
  if (selectedListID == null) {
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
}

function renderTaskCount(selectedList) {
  const incompleteTasksCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTasksCount === 1 ? "task" : "tasks";
  listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`;
}

function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListID) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
