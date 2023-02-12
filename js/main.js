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
	addBtn.addEventListener('click', addNewTask)
}

/*
1. tworzy nowy element (li)
2. dodawać nowy element do ul listy
3. funkcja odpalana na click w przycisku ADD
4. przechwytuje treść z inputa i umieszcza go w nowo utworzonym LI
5. funkcja nie doda do listy pustego 'todosa'
*/

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = ' Wprowadź treść zadania! '
	}
}

document.addEventListener('DOMContentLoaded', main)






