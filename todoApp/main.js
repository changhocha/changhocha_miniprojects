const listsContainer = document.querySelector('[data-lists]')
const newlistForm = document.querySelector('[data-new-list-form]')
const newlistInput = document.querySelector('[data-new-list-input]')
const deleteListbutton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')

const api = {
    key: "148f47353c97fdf70d0cd1951904a49d",
    token: "3383abd611623dfd1495850cab9359147238afacc93b1f224e604f3218344a9a",
    base: "https://api.trello.com",
    boardID: "620506cba1c703887437fcd8"
}

function callapi() {
    fetch(`${api.base}/1/members/me/boards?key=${api.key}&token=${api.token}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

callapi()



const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
const LOCAL_STORAGE_SELECTED_TRELLOLIST_ID = 'task.selectedTrelloListID'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
let selectedTrelloListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_TRELLOLIST_ID)

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListID = e.target.dataset.listId
        saveAndRender()
    }
})

tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = lists.find(list => list.id === selectedListID)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

deleteListbutton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListID)
    selectedListID = null
    saveAndRender()
})

newlistForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newlistInput.value
    fetch(`https://api.trello.com/1/boards/${api.boardID}/lists?name=${listName}&key=${api.key}&token=${api.token}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(res => res.json()).then(data => {
        saveTrelloListid(data)
        console.log(data);
    })
    if (listName == null || listName === '') return
    const list = createList(listName)
    newlistInput.value = null
    lists.push(list)
    saveAndRender()
})

function saveTrelloListid(data) {
    localStorage.setItem(LOCAL_STORAGE_SELECTED_TRELLOLIST_ID, data.id)
}

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks.push(task)
    saveAndRender()
})

clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})


function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function saveAndRender () {
    save()
    render()
}

function createTask(name) {
    return { id: Date.now().toString(), name: name, complete: false }
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)    
}

function render() {
    clearElement(listsContainer)
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListID)

    if (selectedListID == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList) {
    const incompleteTasksCount = selectedList.tasks.filter(task =>
    !task.complete).length
    const taskString = incompleteTasksCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        if (list.id === selectedListID) {
            listElement.classList.add('active-list')
        }
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()