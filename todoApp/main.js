const listsContainer = document.querySelector('[data-lists]')
const newlistForm = document.querySelector('[data-new-list-form]')
const newlistInput = document.querySelector('[data-new-list-input]')

let lists = []

newlistForm.addEventListener('submit', e=> {
    e.preventDefault()
    const listName = newlistInput.value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newlistInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function render() {
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()