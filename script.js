var inputButton = document.getElementById("inputTask");
var deleteButtons = document.getElementsByClassName('deleteTask');
var doneButtons = document.getElementsByClassName('doneTask')

function addEventListenersDEL(){
	for(let i = 0; i< deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click", deleteTask);
	}
}

function addEventListenersDONE(){
	for(let i = 0; i< doneButtons.length; i++){
	doneButtons[i].addEventListener("click", doneTask);
	}
}


function addTask() {
	const val = document.getElementById("taskName");
	if(val.value !== ''){
		const li = document.createElement('li');
		li.classList.add('listItem');

		const p = document.createElement('p');
		p.classList.add('listItemContent');
		
		p.textContent = val.value;
		val.value = '';
		li.appendChild(p);
		
		const doneButton = document.createElement('button');
		doneButton.classList.add('btn', 'btn-primary', 'doneTask');
		doneButton.setAttribute('type', 'button');
		doneButton.textContent = "Done";
		
		const deleteButton = document.createElement('button');
		deleteButton.classList.add('btn','btn-dark', 'deleteTask');
		deleteButton.setAttribute('type', 'button');
		deleteButton.textContent = "Delete";

		li.append(doneButton, deleteButton);
		const ul = document.getElementById('todoList');
		ul.appendChild(li);
		deleteButtons = document.getElementsByClassName('deleteTask');
		doneButtons = document.getElementsByClassName('doneTask');
		addEventListenersDEL();
		addEventListenersDONE();
	}
}

function deleteTask(){

	this.parentElement.remove();
}

function doneTask(){

	this.parentElement.classList.toggle('done');
	this.parentElement.children[0].classList.toggle('doneText');
	if(this.textContent === 'Undo')
		this.textContent = 'Done';
	else this.textContent = 'Undo';
}

inputButton.addEventListener("click", addTask);
addEventListenersDEL();
addEventListenersDONE();