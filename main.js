function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}


// Our new array of objects!
// Try prepopulating with two more todos to get yourself started.
// You absolutely can put the `priority` as a different value than a number. It could be set to a string of 'high' or 'low'.
// It could be a property `highPriority` that is true or false.
let todos = [
  {
    name: 'prepopulate more todos',
    date: getCurrentDateAndTime(),
    completed: false,
    priority: 1,
  },
]

// TODO: uncomment below once you have printList and printTodo working!
// This way you'll have a pre-populated todo list to play with.

// printList();

// Instead of taking in various parameters, we're going to pass in a whole todo object here.
// Remember that you can access that todo's properties with dot notation!
function printTodo(todo, todoIndex) {

  const ol = document.querySelector('.todo-list');
  
  const li = document.createElement('li');
  li.id = todoIndex;
  
  const todoNameElement = document.createElement('p');
  const todoDateElement = document.createElement('p');

  // Set the todo elements above to the appropriate properties from the todo that was passed in.


  // If the todo's priority property is high priority (2, or whatever you've set it to), then do some extra styling on the li here. Bold? Red? Bigger font? Up to you!



  li.appendChild(todoNameElement);
  li.appendChild(todoDateElement);

  todoNameElement.onclick = handleMark;
  todoDateElement.onclick = handleMark;

  ol.appendChild(li);
}

// Here we're passing in the whole todo, so that you can have that object in `printTodo`!
function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i], i);

    i = i + 1;
  }
}

function addTodo() {
  // What should we take in and what should we push in?
}

const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;

function addToList() {
  const inputBox = document.querySelector('.todo-input');
  const todoName = inputBox.value;
  const todoDate = getCurrentDateAndTime();
  const priorityInput = document.querySelector('.priority-pulldown');

  // Be careful when grabbing the `.value` of priorityInput above. Whatever value they choose in their pulldown will come in as a string!

  // Now make a todo object out of all the values above! (And `false` for `completed`!)
  
  // Now pass that todo into your `addTodo` and `printTodo` functions. Pay attention to what `printTodo` takes in as a parameter!


}


function handleMark(event) {
  // Get the li
  const li = event.target.parentNode;

  // Get its index.
  const index = Number(li.id);

  printMark(index);
  markComplete(index);
}


function markComplete(index) {
  // If it's complete in the data, set it to not complete, and vice versa!
}

function printMark(index) {
  const li = document.querySelector(`li:nth-child(${index + 1})`);
  
    // Set the dom styling appropriately here based on whether it's complete or not!
}

const deleteButton = document.querySelector('.delete-completed-todos');
deleteButton.onclick = handleDelete;

function handleDelete() {
  const newTodos = [];

  // Only push into newTodos any todo that is NOT complete.

  
  todos = newTodos;
  clearList();
  printList();
}


function clearList() {
  // Grab the todo list ul and put it in a variable
  const list = document.querySelector('.todo-list');

  // Remove all children of that list.
  // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
  while (list.hasChildNodes()) {
    list.firstChild.remove();
  }
}
