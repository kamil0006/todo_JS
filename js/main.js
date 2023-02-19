let todoInput // miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadań / koniecznie wpisanie tekstu
let addBtn // przycisk ADD - dodaje nowe elemnety do listy
let ulList // lista zadań, tagi UL
let newTodo // nowo dodane LI, nowe zadanie

const main = () => {
	prepareDOMELements()
	prepareDOMEvents()
}

const prepareDOMELements = () => {
	// pobieramy wszystkie elementy
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist  ul')
}

const prepareDOMEvents = () => {
	// nadajemy nasłuchwanie
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
}

/*
1. tworzy nowy element (li)
2. dodawać nowy element do ul listy
3. funkcja odpalana na click w przycisku ADD
4. przechwytuje treść z inputa i umieszcza go w nowo utworzonym LI
5. funkcja nie doda do listy pustego 'todosa'
*/

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()

		ulList.append(newTodo)


		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = ' Wprowadź treść zadania! '
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'
	
	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'
	
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'


	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		console.log('edit');
	} else if (e.target.matches('.delete')) {
		console.log('delete');
	}
}

document.addEventListener('DOMContentLoaded', main)
